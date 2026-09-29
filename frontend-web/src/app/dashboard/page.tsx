'use client';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 p-8 rounded-3xl shadow-xl border border-indigo-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Welcome back, {user.fullName}! 👋</h2>
          <p className="text-indigo-200 text-lg">Here's an overview of your SAHAKAR-SETU account today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-100 transition-colors"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl">
              <i className="fa-solid fa-id-badge"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-700">Your Role</h3>
          </div>
          <p className="text-4xl font-extrabold text-indigo-600 tracking-tight">{user.role}</p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-emerald-100 transition-colors"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
              <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-700">Enrolled Courses</h3>
          </div>
          <p className="text-4xl font-extrabold text-emerald-500 tracking-tight">0</p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-orange-100 transition-colors"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
              <i className="fa-solid fa-calendar-check"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-700">Upcoming Batches</h3>
          </div>
          <p className="text-4xl font-extrabold text-orange-500 tracking-tight">0</p>
        </div>
      </div>
    </div>
  );
}
