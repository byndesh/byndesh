$contentPath = "apps/web/content"

# Ensure directories exist
$dirs = @("trips", "stories", "reviews", "faq", "team-members", "jobs")
foreach ($dir in $dirs) {
    if (-not (Test-Path "$contentPath/$dir")) {
        New-Item -ItemType Directory -Path "$contentPath/$dir" -Force | Out-Null
    }
}

# --- 1. TRIPS ---
$trips = @(
    @{
        slug = "sundarbans-tiger-expedition"
        content = @"
---
title: Sundarbans Tiger Expedition
category: sundarbans-safaris
location: Khulna & Sundarbans
duration: 4 Days
price_bdt: 25000
price_usd: 210
difficulty: moderate
season: Nov - Feb
group_size: 6-12 persons
included:
  - Luxury forest cruise vessel
  - All meals (organic delta cuisine)
  - Trained naturalist guide
  - Forest permits & security
not_included:
  - Personal expenses
  - Tips
---
Deep into the heart of the world's largest mangrove forest. Track the elusive Royal Bengal Tiger and explore the unique biodiversity of the Sundarbans.
"@
    },
    @{
        slug = "keokradong-peak-trek"
        content = @"
---
title: Keokradong Peak Trek
category: hill-tracts-trekking
location: Bandarban
duration: 5 Days
price_bdt: 12000
price_usd: 100
difficulty: challenging
season: Oct - Mar
group_size: 4-10 persons
included:
  - Local guide from Bogalake
  - Homestays in tribal villages
  - All meals
  - Transport from Bandarban town
not_included:
  - Personal trekking gear
---
Conquer one of the highest peaks in Bangladesh. Experience the vibrant cultures of the hill tracts and the breathtaking beauty of Bandarban.
"@
    },
    @{
        slug = "seven-layer-tea-swamp-forest"
        content = @"
---
title: Seven-Layer Tea & Swamp Forest
category: tea-country
location: Sylhet & Srimangal
duration: 3 Days
price_bdt: 15000
price_usd: 125
difficulty: easy
season: June - Oct
group_size: 2-8 persons
included:
  - Tea estate bungalow stay
  - Boat trip in Ratargul
  - Naturalist guide
  - All meals
not_included:
  - Tips
---
Sip the famous seven-layer tea of Srimangal and paddle through the Ratargul Swamp Forest, the Amazon of the East.
"@
    },
    @{
        slug = "floating-markets-delta-life"
        content = @"
---
title: Floating Markets & Delta Life
category: river-expeditions
location: Barisal
duration: 3 Days
price_bdt: 10500
price_usd: 90
difficulty: easy
season: July - Sept
group_size: 2-6 persons
included:
  - Traditional boat hire
  - Farm-to-table meals
  - Local storytellers
  - Heritage walks
not_included:
  - Transport to Barisal
---
Witness the unique water-based commerce of Barisal. Explore the guava orchards and the vibrant floating markets of the delta.
"@
    },
    @{
        slug = "48-hours-in-old-dhaka"
        content = @"
---
title: 48 Hours in Old Dhaka
category: dhaka-culture
location: Dhaka
duration: 2 Days
price_bdt: 7500
price_usd: 65
difficulty: moderate
season: Year-round
group_size: 1-4 persons
included:
  - Rickshaw tours
  - Street food tasting
  - Heritage site entries
  - Professional historian guide
not_included:
  - Hotel accommodation
---
Dive into the chaotic charm of Old Dhaka. From the Mughal architecture of Lalbagh Fort to the narrow alleys of Shankhari Bazar.
"@
    }
)

foreach ($trip in $trips) {
    $trip.content | Out-File -FilePath "$contentPath/trips/$($trip.slug).mdoc" -Encoding utf8
}

# --- 2. STORIES ---
$stories = @(
    @{
        slug = "boatmen-of-barisal"
        content = @"
---
title: "The Boatmen of Barisal: A Vanishing Song"
category: cultural
excerpt: How the Bhatiali river songs are disappearing — and why we're recording them before they're gone.
featured: true
read_time: 8 min read
---
The river does not judge. It only carries. In the heart of Barisal, where the water is the only road, the sound of the 'Bhatiali' songs once filled the dusk.
"@
    },
    @{
        slug = "eating-old-dhaka"
        content = @"
---
title: Eating Old Dhaka
category: cultural
excerpt: A culinary journey through the centuries-old flavors of the Mughal capital.
featured: false
read_time: 12 min read
---
From the melt-in-your-mouth Bakarkhani to the spicy Biriyani of Nanna Mia, Old Dhaka is a paradise for those who live to eat.
"@
    },
    @{
        slug = "into-the-mangroves"
        content = @"
---
title: Into the Mangroves
category: wildlife
excerpt: A photographer's perspective on the shadows of the Sundarbans.
featured: true
read_time: 15 min read
---
The silence of the Sundarbans is not empty. It is heavy with the presence of things unseen. As a photographer, I came for the tiger, but I stayed for the trees.
"@
    }
)

foreach ($story in $stories) {
    $story.content | Out-File -FilePath "$contentPath/stories/$($story.slug).mdoc" -Encoding utf8
}

# --- 3. REVIEWS ---
$reviews = @(
    @{ slug = "anna-k"; name = "Anna K."; location = "Germany"; category = "River Expeditions"; trip = "Floating Markets"; quote = "The most authentic experience I've had in South Asia. Bynd BD knows the hidden corners of the delta like no one else."; rating = 5 },
    @{ slug = "david-l"; name = "David L."; location = "UK"; category = "Sundarbans Safaris"; trip = "Tiger Expedition"; quote = "Tracking tigers from the deck of a wooden boat at dawn is a memory I will cherish forever. Professional and sustainable."; rating = 5 },
    @{ slug = "priya-m"; name = "Priya M."; location = "India"; category = "Tea Country"; trip = "Seven-Layer Tea"; quote = "Sylhet is magical, and the tea estate stay was so peaceful. The guide was incredibly knowledgeable about local flora."; rating = 4 },
    @{ slug = "marcus-t"; name = "Marcus T."; location = "Australia"; category = "Hill Tracts Trekking"; trip = "Keokradong Peak"; quote = "Bandarban is a world away from the rest of Bangladesh. The trek was challenging but the views from the top were worth it."; rating = 5 },
    @{ slug = "fernandez-family"; name = "Fernandez Family"; location = "Spain"; category = "Cultural Tours"; trip = "Old Dhaka"; quote = "Our kids loved the rickshaw ride! Old Dhaka is intense, but having a historian guide made it a deep learning experience."; rating = 5 },
    @{ slug = "sofia-h"; name = "Sofia H."; location = "Sweden"; category = "River Expeditions"; trip = "Delta Life"; quote = "Simple, beautiful, and profound. The floating guava markets felt like a scene from a dream."; rating = 4 }
)

foreach ($rev in $reviews) {
    @"
---
name: "$($rev.name)"
location: "$($rev.location)"
trip_category: "$($rev.category)"
trip_name: "$($rev.trip)"
quote: "$($rev.quote)"
rating: $($rev.rating)
featured: true
travel_date: "Spring 2024"
---
"@ | Out-File -FilePath "$contentPath/reviews/$($rev.slug).mdoc" -Encoding utf8
}

# --- 4. FAQ ---
$faqs = @(
    @{ q = "Is it safe to travel to Bangladesh?"; a = "Yes, Bangladesh is generally safe for tourists. We provide local guides and secure transport for all our expeditions." },
    @{ q = "When is the best time to visit?"; a = "The winter months (November to February) are the most comfortable. Monsoon (July to September) is best for river expeditions." },
    @{ q = "Do I need a visa?"; a = "Most nationalities can get a visa on arrival at Dhaka Airport. Check with the nearest Bangladesh embassy for latest rules." },
    @{ q = "What should I pack for a Sundarbans trek?"; a = "Lightweight, long-sleeved clothing, insect repellent, a good hat, and sturdy walking shoes." },
    @{ q = "Is there internet access in the Sundarbans?"; a = "Mobile data works in some areas, but expect to be disconnected for most of the forest cruise." },
    @{ q = "Are your tours sustainable?"; a = "We follow strict 'Leave No Trace' principles and work exclusively with local communities to ensure tourism benefits the delta." },
    @{ q = "Can I customize a trip?"; a = "Absolutely! Check out our 'Tailor-Made' section to design your own perfect itinerary." },
    @{ q = "What is the food like?"; a = "Expect plenty of rice, river fish, and organic vegetables. We can accommodate most dietary requirements if notified in advance." },
    @{ q = "How do I pay for my booking?"; a = "We accept international credit cards (Stripe) and local mobile payments (bKash/Rocket)." },
    @{ q = "What happens if a trip is cancelled?"; a = "We have a flexible cancellation policy. Check our 'Cancellation Policy' page for full details." },
    @{ q = "Are your guides certified?"; a = "All our naturalists and historian guides are certified and have years of experience in their respective regions." },
    @{ q = "Can I travel with my family?"; a = "Yes! Many of our cultural and river expeditions are family-friendly. We even have special family rates." }
)

$i = 1
foreach ($f in $faqs) {
    $slug = $f.q -replace '[^a-zA-Z0-9 ]', '' -replace ' ', '-'
    $slug = $slug.ToLower().Substring(0, [Math]::Min(30, $slug.Length))
    @"
---
question: "$($f.q)"
answer: "$($f.a)"
order: $($i)
---
"@ | Out-File -FilePath "$contentPath/faq/$slug.mdoc" -Encoding utf8
    $i++
}

# --- 5. TEAM ---
@"
---
name: Rafiq Ahmed
role: Lead Naturalist & Founder
region: Khulna & Sundarbans
languages:
  - Bangla
  - English
  - Hindi
favorite_experience: Hearing the first tiger call at dawn in the Katka range.
---
Rafiq has spent over 20 years exploring the Sundarbans. His passion for conservation led to the founding of Bynd BD.
"@ | Out-File -FilePath "$contentPath/team-members/rafiq-ahmed.mdoc" -Encoding utf8

# --- 6. JOBS ---
$jobs = @(
    @{ t = "Expedition Guide"; l = "Various Regions"; ty = "contract" },
    @{ t = "Operations Manager"; l = "Dhaka"; ty = "full-time" },
    @{ t = "Digital Storyteller"; l = "Remote/Field"; ty = "freelance" },
    @{ t = "Guest Relations Officer"; l = "Khulna"; ty = "full-time" },
    @{ t = "Community Liaison"; l = "Bandarban"; ty = "part-time" }
)

foreach ($j in $jobs) {
    $slug = $j.t -replace ' ', '-'
    $slug = $slug.ToLower()
    @"
---
title: "$($j.t)"
location: "$($j.l)"
type: "$($j.ty)"
languages:
  - Bangla
  - English
active: true
---
Join our team and help us show the world the beauty of Bangladesh.
"@ | Out-File -FilePath "$contentPath/jobs/$slug.mdoc" -Encoding utf8
}

Write-Host "Seeding complete!"
