import React from "react";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bynd-paper flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl tracking-tighter text-bynd-black mb-2">
            BEYNDESH <span className="text-bynd-orange">CMS</span>
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">
            Administrative Access
          </p>
        </div>

        {/* Form Placeholder */}
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-bynd-orange focus:border-bynd-orange text-sm transition-all bg-gray-50 focus:bg-white"
                  placeholder="admin@beyndesh.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  type="password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-bynd-orange focus:border-bynd-orange text-sm transition-all bg-gray-50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-bynd-black text-white py-4 rounded-xl font-heading tracking-widest text-sm hover:bg-black transition-colors shadow-lg active:scale-[0.98]"
            >
              SIGN IN
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              Problems logging in? Please contact the system administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
