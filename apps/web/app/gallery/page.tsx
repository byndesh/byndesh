// NO "use client" — this is a Server Component
import GalleryFilter from '@/components/interactive/GalleryFilter';

export const metadata = {
  title: 'Gallery — Bynd BD',
  description: 'See Bangladesh through our eyes. Real photos from real Bynd BD trips.',
};

const GALLERY_ITEMS = [
  {
    src: '/images/gallery/padma-sunrise.jpg',
    alt: 'Sunrise over the Padma River',
    category: 'Rivers & Boats',
    location: 'Barisal Division',
    caption: 'Sunrise over the Padma River. The boatman Karim has made this crossing every morning for 30 years.',
    photographer: 'Rafiq Ahmed',
  },
  {
    src: '/images/gallery/chakma-weaving.jpg',
    alt: 'Chakma women weaving',
    category: 'People',
    location: 'Rangamati',
    caption: 'Chakma women weaving on backstrap looms. The patterns tell stories of their community\'s history.',
    photographer: 'Tania Chakma',
  },
  {
    src: '/images/gallery/panam-nagar.jpg',
    alt: 'Abandoned mansions of Panam Nagar',
    category: 'Heritage',
    location: 'Sonargaon',
    caption: 'The abandoned mansions of Panam Nagar. Built by Hindu merchants in the 19th century, now frozen in time.',
    photographer: 'Bynd BD',
  },
  {
    src: '/images/gallery/kacchi-biryani.jpg',
    alt: 'Kacchi biryani at Haji Biriyani',
    category: 'Food',
    location: 'Old Dhaka',
    caption: 'Kacchi biryani at Haji Biriyani, Old Dhaka. Every grain separate. Every bite a memory.',
    photographer: 'Sofia H.',
  },
  {
    src: '/images/gallery/sundarbans-waterway.jpg',
    alt: 'Tidal waterway in the Sundarbans',
    category: 'Sundarbans',
    location: 'Khulna Division',
    caption: 'A tidal waterway deep in the Sundarbans mangrove forest.',
    photographer: 'Rafiq Ahmed',
  },
  {
    src: '/images/gallery/tea-gardens.jpg',
    alt: 'Tea gardens at dawn in Sreemangal',
    category: 'Sylhet',
    location: 'Sreemangal',
    caption: 'Dawn light over the tea gardens. The pluckers arrive before sunrise.',
    photographer: 'Bynd BD',
  },
  {
    src: '/images/gallery/nafakhum.jpg',
    alt: 'Nafakhum Waterfall',
    category: 'Hill Tracts',
    location: 'Bandarban',
    caption: 'Nafakhum — Bangladesh\'s most spectacular waterfall, reachable only by a three-day trek.',
    photographer: 'Marcus T.',
  },
  {
    src: '/images/gallery/cox-bazar-sunset.jpg',
    alt: 'Sunset at Cox\'s Bazar',
    category: "Cox's Bazar",
    location: "Cox's Bazar",
    caption: 'Golden hour on the world\'s longest natural sea beach.',
    photographer: 'Bynd BD',
  },
  {
    src: '/images/gallery/spotted-deer.jpg',
    alt: 'Spotted deer in the Sundarbans',
    category: 'Wildlife',
    location: 'Sundarbans',
    caption: 'Spotted deer at the Katka boardwalk, alert to every sound.',
    photographer: 'Rafiq Ahmed',
  },
  {
    src: '/images/gallery/old-dhaka-street.jpg',
    alt: 'Street life in Old Dhaka',
    category: 'Dhaka',
    location: 'Old Dhaka',
    caption: 'The narrow lanes of Old Dhaka — a century of life compressed into every block.',
    photographer: 'Bynd BD',
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-accent italic text-bynd-flame mb-2">every photo tells a journey</p>
        <h1 className="font-heading text-5xl md:text-7xl text-bynd-ink uppercase mb-4">
          SEE BANGLADESH<br />THROUGH OUR EYES.
        </h1>
        <p className="font-body text-bynd-ash max-w-2xl text-lg mb-12">
          These aren&apos;t stock photos. Every image was taken by our guides, our travelers, or our in-house photographer during real Bynd BD trips. This is what Bangladesh actually looks like.
        </p>

        <GalleryFilter items={GALLERY_ITEMS} />

        {/* Video Section */}
        <div className="mt-20">
          <h2 className="font-heading text-2xl text-bynd-ink uppercase mb-8">WATCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-bynd-ink rounded-2xl flex items-center justify-center">
              <span className="font-body text-white/60">&quot;The Delta&quot; — A Bynd BD Short Film (3:42)</span>
            </div>
            <div className="aspect-video bg-bynd-ink rounded-2xl flex items-center justify-center">
              <span className="font-body text-white/60">&quot;First Steps in Bandarban&quot; (2:15)</span>
            </div>
          </div>
        </div>

        {/* Submit CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-bynd-ash text-lg">
            Were you on a Bynd BD trip? Tag us on Instagram <strong>@byndbd</strong> or email{' '}
            <span className="text-bynd-flame">stories@byndbd.com</span>
          </p>
        </div>
      </div>
    </main>
  );
}
