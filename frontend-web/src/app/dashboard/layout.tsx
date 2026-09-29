'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50/50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-indigo-950 text-indigo-50 hidden md:flex flex-col shadow-2xl relative z-20">
        <div className="p-6 border-b border-indigo-900/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/20 text-white">
            <i className="fa-solid fa-wheat-awn"></i>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-wide text-white">SAHAKAR-SETU</h1>
            <p className="text-[10px] text-indigo-300 font-medium uppercase tracking-widest">Digital Ecosystem</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-600/40 text-white font-semibold shadow-sm border border-indigo-500/30">
            <i className="fa-solid fa-border-all w-5"></i> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-all font-medium">
            <i className="fa-solid fa-book-open w-5"></i> Courses & Modules
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-all font-medium">
            <i className="fa-solid fa-users-viewfinder w-5"></i> Training Batches
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-all font-medium">
            <i className="fa-solid fa-briefcase w-5"></i> Job Portal
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-all font-medium">
            <i className="fa-solid fa-chart-line w-5"></i> My Progress
          </a>
        </nav>
        
        <div className="p-4 border-t border-indigo-900/50">
          <div className="bg-indigo-900/30 rounded-xl p-4 flex items-center gap-3 mb-4 border border-indigo-800/30">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-md">
              {user.fullName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user.fullName}</p>
              <p className="text-xs text-emerald-400 font-medium truncate">{user.role}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-900/50 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-indigo-300 transition-all text-sm font-semibold border border-indigo-800/30 hover:border-red-500/30"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-slate-800 hidden md:block">Overview</h2>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors relative">
              <i className="fa-regular fa-bell"></i>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-100"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {user.fullName.charAt(0)}
              </div>
              <i className="fa-solid fa-chevron-down text-xs text-slate-400"></i>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
