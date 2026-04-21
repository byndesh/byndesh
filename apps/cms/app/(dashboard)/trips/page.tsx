import React from "react";
import { Plus, Search, Filter, MoreVertical, MapPin, Calendar, Users } from "lucide-react";

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">Trips Management</h1>
          <p className="text-gray-500 text-sm">Create, edit, and manage your adventure travel experiences.</p>
        </div>
        <button className="flex items-center gap-2 bg-bynd-orange text-white px-5 py-2.5 rounded-xl font-heading text-sm tracking-widest hover:bg-orange-600 transition-all shadow-lg active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          CREATE NEW TRIP
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search trips by name, location, or tag..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-bynd-orange focus:border-bynd-orange transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <select className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors appearance-none bg-white">
            <option>Recently Added</option>
            <option>Alphabetical</option>
            <option>Status: Published</option>
          </select>
        </div>
      </div>

      {/* Table Placeholder */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-bynd-orange mb-4">
            <MapPin className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 font-heading tracking-tight mb-2">Trips Module Coming Soon</h3>
          <p className="text-gray-500 max-w-sm text-sm">
            We are currently building the comprehensive trip management module. Stay tuned for advanced editing and media management features.
          </p>
        </div>
      </div>
    </div>
  );
}
