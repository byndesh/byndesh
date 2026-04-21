import { PrismaClient, UserRole, ContentStatus } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env.local from the root directory
dotenv.config({ path: path.resolve(__dirname, "../../../.env.local") });

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not defined in environment");
  }
  
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  });

  console.log("🌱 Starting seeding...");
  console.log("DEBUG: Connecting to:", url.substring(0, 30) + "...");
  console.log("DEBUG: DATABASE_URL has #:", process.env.DATABASE_URL?.includes("#"));
  console.log("DEBUG: DATABASE_URL has %23:", process.env.DATABASE_URL?.includes("%23"));

  try {
    // 1. Create Super Admin
    const adminEmail = "admin@beyndesh.com";
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("Admin@123456", 12);
      await prisma.user.create({
        data: {
          email: adminEmail,
          name: "Beyndesh Super Admin",
          password: hashedPassword,
          role: UserRole.SUPER_ADMIN,
        },
      });
      console.log("✅ Super Admin created");
    } else {
      console.log("⏩ Super Admin already exists");
    }

    // 2. Create Sample Trips
    const countTrips = await prisma.cmsTrip.count();
    if (countTrips === 0) {
      await prisma.cmsTrip.createMany({
        data: [
          {
            title: "The Sundarbans Mangrove Adventure",
            titleBn: "সুন্দরবন ম্যানগ্রোভ অ্যাডভেঞ্চার",
            slug: "sundarbans-mangrove-adventure",
            excerpt: "Deep dive into the world's largest mangrove forest.",
            duration: 4,
            nights: 3,
            difficulty: "Moderate",
            priceBDT: 25000,
            status: ContentStatus.DRAFT,
            featured: true,
          },
          {
            title: "Sajek Valley Cloud Escape",
            titleBn: "সাজেক ভ্যালি ক্লাউড এসকেপ",
            slug: "sajek-valley-cloud-escape",
            excerpt: "Experience the ultimate mountain serenity.",
            duration: 3,
            nights: 2,
            difficulty: "Easy",
            priceBDT: 15000,
            status: ContentStatus.DRAFT,
          },
          {
            title: "Cox's Bazar Beach Getaway",
            titleBn: "কক্সবাজার বিচ গেটওয়ে",
            slug: "coxs-bazar-beach-getaway",
            excerpt: "Relax at the longest natural sea beach in the world.",
            duration: 3,
            nights: 2,
            difficulty: "Easy",
            priceBDT: 12000,
            status: ContentStatus.DRAFT,
          },
        ],
      });
      console.log("✅ Sample trips created");
    } else {
      console.log("⏩ Trips already exist");
    }

    // 3. Create Initial Settings
    const settings = [
      { key: "site_name", value: "Beyndesh" },
      { key: "contact_email", value: "hello@beyndesh.com" },
      { key: "contact_phone", value: "+880-1XX-XXXX-XXX" },
    ];

    for (const setting of settings) {
      await prisma.cmsSetting.upsert({
        where: { key: setting.key },
        update: { value: setting.value },
        create: {
          key: setting.key,
          value: setting.value,
          group: "general",
        },
      });
    }
    console.log("✅ Initial settings synced");

    console.log("🌳 Seeding completed!");
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
