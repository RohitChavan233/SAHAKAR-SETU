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
      {/* Banner */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-screen filter blur-[80px] translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Welcome back, {user.fullName}! 👋</h2>
          <p className="text-indigo-200 text-lg">Here's an overview of your SAHAKAR-SETU account today.</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/10 hover:border-indigo-500/50 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full filter blur-[60px] -translate-y-1/2 translate-x-1/3 opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xl shadow-inner">
              <i className="fa-solid fa-id-badge"></i>
            </div>
            <h3 className="text-lg font-bold text-indigo-100">Your Role</h3>
          </div>
          <p className="text-4xl font-extrabold text-white tracking-tight">{user.role}</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/10 hover:border-emerald-500/50 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full filter blur-[60px] -translate-y-1/2 translate-x-1/3 opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl shadow-inner">
              <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <h3 className="text-lg font-bold text-indigo-100">Enrolled Courses</h3>
          </div>
          <p className="text-4xl font-extrabold text-emerald-400 tracking-tight">0</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 flex flex-col justify-center relative overflow-hidden group hover:bg-white/10 hover:border-amber-500/50 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full filter blur-[60px] -translate-y-1/2 translate-x-1/3 opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl shadow-inner">
              <i className="fa-solid fa-calendar-check"></i>
            </div>
            <h3 className="text-lg font-bold text-indigo-100">Upcoming Batches</h3>
          </div>
          <p className="text-4xl font-extrabold text-amber-400 tracking-tight">0</p>
        </div>
      </div>
    </div>
  );
}
