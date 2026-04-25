import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production' && process.env.KEYSTATIC_STORAGE_KIND !== 'local'
      ? {
          kind: 'github',
          repo: {
            owner: process.env.GITHUB_OWNER || 'placeholder',
            name: process.env.GITHUB_REPO || 'placeholder',
          },
        }
      : { kind: 'local' },
  collections: {
    trips: collection({
      label: 'Trips',
      slugField: 'title',
      path: 'content/trips/*',
      format: { contentField: 'overview' },
      schema: {
        title: fields.text({ label: 'Title' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'River Expeditions', value: 'river-expeditions' },
            { label: 'Sundarbans Safaris', value: 'sundarbans-safaris' },
            { label: 'Hill Tracts Trekking', value: 'hill-tracts-trekking' },
            { label: 'Tea Country & Sylhet', value: 'tea-country' },
            { label: 'Old Dhaka & Culture', value: 'dhaka-culture' },
            { label: 'Cox\'s Bazar & Islands', value: 'coxs-bazar' },
          ],
          defaultValue: 'river-expeditions',
        }),
        location: fields.text({ label: 'Location' }),
        duration: fields.text({ label: 'Duration' }),
        price_bdt: fields.integer({ label: 'Price (BDT)' }),
        price_usd: fields.integer({ label: 'Price (USD)' }),
        difficulty: fields.select({
          label: 'Difficulty',
          options: [
            { label: 'Easy', value: 'easy' },
            { label: 'Moderate', value: 'moderate' },
            { label: 'Challenging', value: 'challenging' },
            { label: 'Extreme', value: 'extreme' },
          ],
          defaultValue: 'easy',
        }),
        season: fields.text({ label: 'Best Season' }),
        group_size: fields.text({ label: 'Group Size' }),
        overview: fields.document({
          label: 'Overview',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        itinerary: fields.array(
          fields.object({
            day: fields.text({ label: 'Day' }),
            title: fields.text({ label: 'Title' }),
            description: fields.document({ label: 'Description', formatting: true }),
          }),
          { label: 'Itinerary', itemLabel: props => props.fields.day.value || 'New Day' }
        ),
        included: fields.array(fields.text({ label: 'Item' }), { label: 'Included' }),
        not_included: fields.array(fields.text({ label: 'Item' }), { label: 'Not Included' }),
        hero_image: fields.image({
          label: 'Hero Image',
          directory: 'public/images/trips',
          publicPath: '/images/trips',
        }),
        related_trips: fields.array(
          fields.relationship({ label: 'Trip', collection: 'trips' }),
          { label: 'Related Trips' }
        ),
      },
    }),
    destinations: collection({
      label: 'Destinations',
      slugField: 'title',
      path: 'content/destinations/*',
      format: { contentField: 'overview' },
      schema: {
        title: fields.text({ label: 'Title' }),
        signature_accent: fields.text({ label: 'Signature Accent Text' }),
        overview: fields.document({
          label: 'Overview',
          formatting: true,
          dividers: true,
          links: true,
        }),
        hero_stats: fields.object({
          unesco: fields.text({ label: 'UNESCO Status' }),
          area: fields.text({ label: 'Area' }),
          wildlife: fields.text({ label: 'Key Wildlife' }),
          season: fields.text({ label: 'Best Season' }),
        }),
        experiences: fields.array(fields.text({ label: 'Experience' }), { label: 'Key Experiences' }),
        practical_info: fields.document({ label: 'Practical Info', formatting: true }),
        available_trips: fields.array(
          fields.relationship({ label: 'Trip', collection: 'trips' }),
          { label: 'Available Trips' }
        ),
        related_destinations: fields.array(
          fields.relationship({ label: 'Destination', collection: 'destinations' }),
          { label: 'Related Destinations' }
        ),
      },
    }),
    stories: collection({
      label: 'Stories',
      slugField: 'title',
      path: 'content/stories/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.text({ label: 'Title' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Cultural', value: 'cultural' },
            { label: 'Wildlife', value: 'wildlife' },
            { label: 'Adventure', value: 'adventure' },
            { label: 'Photo Essay', value: 'photo-essay' },
          ],
          defaultValue: 'cultural',
        }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        body: fields.document({
          label: 'Body',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        read_time: fields.text({ label: 'Read Time' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        hero_image: fields.image({
          label: 'Hero Image',
          directory: 'public/images/stories',
          publicPath: '/images/stories',
        }),
        author: fields.relationship({ label: 'Author', collection: 'team_members' }),
      },
    }),
    reviews: collection({
      label: 'Reviews',
      slugField: 'name',
      path: 'content/reviews/*',
      schema: {
        name: fields.text({ label: 'Reviewer Name' }),
        location: fields.text({ label: 'Reviewer Location' }),
        trip_category: fields.text({ label: 'Trip Category' }),
        trip_name: fields.text({ label: 'Trip Name' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        rating: fields.integer({ label: 'Rating (1-5)', validation: { min: 1, max: 5 } }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        travel_date: fields.text({ label: 'Travel Date' }),
      },
    }),
    team_members: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'content/team-members/*',
      schema: {
        name: fields.text({ label: 'Name' }),
        role: fields.text({ label: 'Role' }),
        region: fields.text({ label: 'Region Base' }),
        languages: fields.array(fields.text({ label: 'Language' }), { label: 'Languages' }),
        bio: fields.document({ label: 'Bio', formatting: true }),
        favorite_experience: fields.text({ label: 'Favorite Experience' }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/images/team',
          publicPath: '/images/team',
        }),
      },
    }),
    job_postings: collection({
      label: 'Job Postings',
      slugField: 'title',
      path: 'content/jobs/*',
      schema: {
        title: fields.text({ label: 'Job Title' }),
        location: fields.text({ label: 'Location' }),
        type: fields.select({
          label: 'Employment Type',
          options: [
            { label: 'Full-time', value: 'full-time' },
            { label: 'Part-time', value: 'part-time' },
            { label: 'Contract', value: 'contract' },
            { label: 'Freelance', value: 'freelance' },
          ],
          defaultValue: 'full-time',
        }),
        languages: fields.array(fields.text({ label: 'Required Language' }), { label: 'Languages' }),
        description: fields.document({ label: 'Description', formatting: true }),
        active: fields.checkbox({ label: 'Active', defaultValue: true }),
      },
    }),
    faq_items: collection({
      label: 'FAQ Items',
      slugField: 'question',
      path: 'content/faq/*',
      schema: {
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
        order: fields.integer({ label: 'Order' }),
      },
    }),
  },
  singletons: {
    gift_card_options: singleton({
      label: 'Gift Card Options',
      path: 'content/gift-cards',
      schema: {
        options: fields.array(
          fields.object({
            amount_bdt: fields.integer({ label: 'Amount (BDT)' }),
            amount_usd: fields.integer({ label: 'Amount (USD)' }),
            description: fields.text({ label: 'Description' }),
          }),
          { label: 'Price Options' }
        ),
      },
    }),
  },
});
