import React from "react";
import { 
  Users, 
  Map, 
  ShoppingCart, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Active Trips", value: "12", icon: Map, color: "text-blue-600", bg: "bg-blue-50", trend: "+2 this month" },
    { label: "Total Bookings", value: "1,248", icon: ShoppingCart, color: "text-green-600", bg: "bg-green-50", trend: "+15% vs last month" },
    { label: "Registered Users", value: "4,821", icon: Users, color: "text-purple-600", bg: "bg-purple-50", trend: "+24 today" },
    { label: "Monthly Revenue", value: "৳2.4M", icon: TrendingUp, color: "text-bynd-orange", bg: "bg-orange-50", trend: "+8.2%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening with Beyndesh today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3" />
                {stat.trend.split(' ')[0]}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
              <p className="text-xs text-gray-400 mt-2">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-64 flex items-center justify-center text-gray-400 italic">
          Revenue Chart Placeholder
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-64 flex items-center justify-center text-gray-400 italic">
          Recent Activity Placeholder
        </div>
      </div>
    </div>
  );
}
