'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'documents' | 'settings'>('upcoming');

  // Sample data — in production this comes from auth + database
  const upcomingTrips = [
    {
      id: '1',
      name: 'Sundarbans Tiger Expedition',
      dates: '15–18 Nov 2026',
      status: 'confirmed' as const,
      paid: true,
    },
    {
      id: '2',
      name: 'Keokradong Peak Trek',
      dates: '5–10 Dec 2026',
      status: 'deposit' as const,
      paid: false,
    },
  ];

  const pastTrips = [
    {
      id: '3',
      name: '48 Hours in Old Dhaka',
      dates: '12–13 Apr 2026',
      reviewed: false,
    },
  ];

  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
        <span className="font-ui text-sm text-bynd-flame uppercase tracking-wider">MY JOURNEYS</span>
        <h1 className="font-heading text-4xl md:text-5xl text-bynd-ink uppercase mt-4 mb-2">
          WELCOME BACK.
        </h1>
        <p className="font-accent italic text-bynd-flame mb-12">Where shall we go next?</p>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-10 border-b border-bynd-border">
          {(['upcoming', 'past', 'documents', 'settings'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-ui text-sm uppercase px-6 py-3 transition ${
                activeTab === tab
                  ? 'text-bynd-flame border-b-2 border-bynd-flame'
                  : 'text-bynd-ash hover:text-bynd-ink'
              }`}
            >
              {tab === 'upcoming' ? 'UPCOMING TRIPS' : tab === 'past' ? 'PAST TRIPS' : tab === 'documents' ? 'DOCUMENTS' : 'SETTINGS'}
            </button>
          ))}
        </div>

        {/* Upcoming Trips */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            {upcomingTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg text-bynd-ink uppercase">{trip.name}</h3>
                  <p className="font-body text-bynd-ash">{trip.dates}</p>
                  <span className={`inline-block font-ui text-xs uppercase px-3 py-1 rounded-full mt-2 ${
                    trip.status === 'confirmed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {trip.status === 'confirmed' ? '✅ Confirmed' : '⏳ Deposit Paid'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="font-ui text-sm text-bynd-flame border border-bynd-flame px-4 py-2 rounded-full hover:bg-bynd-flame hover:text-white transition">
                    View Details
                  </button>
                  <button className="font-ui text-sm text-bynd-flame border border-bynd-flame px-4 py-2 rounded-full hover:bg-bynd-flame hover:text-white transition">
                    Download Itinerary
                  </button>
                  {!trip.paid && (
                    <button className="font-ui text-sm bg-bynd-flame text-white px-4 py-2 rounded-full hover:bg-bynd-flame/90 transition">
                      Pay Balance →
                    </button>
                  )}
                </div>
              </div>
            ))}
            {upcomingTrips.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-bynd-ash text-lg mb-4">No upcoming trips yet.</p>
                <Link href="/trips" className="font-ui text-bynd-flame hover:underline">BROWSE TRIPS →</Link>
              </div>
            )}
          </div>
        )}

        {/* Past Trips */}
        {activeTab === 'past' && (
          <div className="space-y-6">
            {pastTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg text-bynd-ink uppercase">{trip.name}</h3>
                  <p className="font-body text-bynd-ash">{trip.dates}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="font-ui text-sm text-bynd-flame border border-bynd-flame px-4 py-2 rounded-full hover:bg-bynd-flame hover:text-white transition">
                    View Photos
                  </button>
                  {!trip.reviewed && (
                    <button className="font-ui text-sm text-bynd-flame border border-bynd-flame px-4 py-2 rounded-full hover:bg-bynd-flame hover:text-white transition">
                      Leave a Review
                    </button>
                  )}
                  <button className="font-ui text-sm bg-bynd-flame text-white px-4 py-2 rounded-full hover:bg-bynd-flame/90 transition">
                    Book Again →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-4">
            {[
              { name: 'Booking Confirmation — Sundarbans Tiger Expedition', type: 'PDF' },
              { name: 'Pre-Departure Information Pack', type: 'PDF' },
              { name: 'Liability Waiver (sign electronically)', type: 'Form' },
              { name: 'Packing List — November Trip', type: 'PDF' },
              { name: 'Emergency Contacts Card', type: 'PDF' },
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between">
                <div>
                  <p className="font-body text-bynd-ink">{doc.name}</p>
                  <span className="font-ui text-xs text-bynd-ash uppercase">{doc.type}</span>
                </div>
                <button className="font-ui text-sm text-bynd-flame hover:underline">
                  {doc.type === 'Form' ? 'Sign →' : 'Download →'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm space-y-8">
            <div>
              <h3 className="font-heading text-lg text-bynd-ink uppercase mb-4">PERSONAL INFORMATION</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-ui text-sm text-bynd-ink block mb-1">FULL NAME</label>
                  <input type="text" defaultValue="James Mitchell" className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
                </div>
                <div>
                  <label className="font-ui text-sm text-bynd-ink block mb-1">EMAIL</label>
                  <input type="email" defaultValue="james@example.com" className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg text-bynd-ink uppercase mb-4">PREFERENCES</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-bynd-flame" />
                  <span className="font-body text-bynd-ink">Newsletter emails (monthly)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-bynd-flame" />
                  <span className="font-body text-bynd-ink">Trip update notifications</span>
                </label>
              </div>
            </div>
            <div>
              <label className="font-ui text-sm text-bynd-ink block mb-2">COMMUNICATION LANGUAGE</label>
              <select className="border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none">
                <option value="en">English</option>
                <option value="bn">Bangla</option>
              </select>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-bynd-flame text-white font-ui px-6 py-3 rounded-full hover:bg-bynd-flame/90 transition">
                SAVE CHANGES →
              </button>
              <button className="font-ui text-sm text-red-500 hover:underline">
                Delete my account
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          <Link href="/trips" className="font-ui text-sm text-bynd-flame border border-bynd-flame px-6 py-3 rounded-full hover:bg-bynd-flame hover:text-white transition">
            BROWSE NEW TRIPS →
          </Link>
          <Link href="/contact" className="font-ui text-sm text-bynd-flame border border-bynd-flame px-6 py-3 rounded-full hover:bg-bynd-flame hover:text-white transition">
            CONTACT SUPPORT →
          </Link>
          <button className="font-ui text-sm text-bynd-flame border border-bynd-flame px-6 py-3 rounded-full hover:bg-bynd-flame hover:text-white transition">
            REFER A FRIEND (earn ৳2,000 credit) →
          </button>
        </div>
      </div>
    </main>
  );
}
