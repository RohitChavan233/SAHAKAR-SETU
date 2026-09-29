'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

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
      router.push('/');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive 
      ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-semibold shadow-inner border border-white/10 backdrop-blur-sm"
      : "flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-200 hover:bg-white/5 hover:text-white transition-all font-medium";
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-teal-900 flex font-sans text-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-black/20 backdrop-blur-xl border-r border-white/10 hidden md:flex flex-col relative z-20">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl font-bold shadow-lg shadow-black/20 text-white backdrop-blur-sm">
            <i className="fa-solid fa-wheat-awn"></i>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-wide text-white">SAHAKAR-SETU</h1>
            <p className="text-[10px] text-indigo-300 font-medium uppercase tracking-widest">Digital Ecosystem</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a href="/dashboard" className={getLinkClass("/dashboard")}>
            <i className="fa-solid fa-border-all w-5 text-indigo-300"></i> Dashboard
          </a>
          <a href="/dashboard/courses" className={getLinkClass("/dashboard/courses")}>
            <i className="fa-solid fa-book-open w-5 text-emerald-300/70"></i> Courses & Modules
          </a>
          <a href="/dashboard/batches" className={getLinkClass("/dashboard/batches")}>
            <i className="fa-solid fa-users-viewfinder w-5 text-amber-300/70"></i> Training Batches
          </a>
          <a href="/dashboard/jobs" className={getLinkClass("/dashboard/jobs")}>
            <i className="fa-solid fa-briefcase w-5 text-sky-300/70"></i> Job Portal
          </a>
          <a href="/dashboard/progress" className={getLinkClass("/dashboard/progress")}>
            <i className="fa-solid fa-chart-line w-5 text-purple-300/70"></i> My Progress
          </a>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <div className="bg-black/20 rounded-xl p-4 flex items-center gap-3 mb-4 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-md">
              {user.fullName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user.fullName}</p>
              <p className="text-xs text-emerald-300 font-medium truncate">{user.role}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-black/20 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-indigo-200 transition-all text-sm font-semibold border border-white/5 hover:border-red-500/30"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-black/10 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white hidden md:block tracking-wide">Overview</h2>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-200 hover:bg-white/10 hover:text-white transition-colors relative shadow-inner">
              <i className="fa-regular fa-bell"></i>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-slate-900 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            </button>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                {user.fullName.charAt(0)}
              </div>
              <i className="fa-solid fa-chevron-down text-xs text-indigo-300 group-hover:text-white transition-colors"></i>
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
