export default function BatchesPage() {
  return (
    <div className="space-y-6 animate-fade-in-up pb-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Training Batches</h1>
          <p className="text-indigo-200">Manage and track your enrolled NCCT training sessions.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Batch */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30 relative overflow-hidden group hover:bg-white/10 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full filter blur-[60px] -translate-y-1/2 translate-x-1/3 opacity-20"></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2 inline-block">
                LIVE NOW
              </span>
              <h3 className="text-xl font-bold text-white mb-1">Batch 44: Advanced ERP Implementation</h3>
              <p className="text-sm text-slate-300">VAMNICOM Pune • Offline/Hybrid</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl">
              <i className="fa-solid fa-chalkboard-user"></i>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-400">Next Session</span>
              <span className="text-xs font-bold text-white">Today, 2:00 PM (IST)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Instructor</span>
              <span className="text-xs font-bold text-indigo-300">Dr. A. Sharma</span>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 relative z-10">
            <i className="fa-solid fa-video"></i> Join Live Classroom
          </button>
        </div>

        {/* Upcoming Batch */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-2 inline-block">
                UPCOMING
              </span>
              <h3 className="text-xl font-bold text-white mb-1">Batch 48: Dairy Tech Fundamentals</h3>
              <p className="text-sm text-slate-300">ICM Nashik • Online</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center text-xl">
              <i className="fa-regular fa-calendar-check"></i>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-400">Start Date</span>
              <span className="text-xs font-bold text-white">Oct 15, 2026</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Duration</span>
              <span className="text-xs font-bold text-white">4 Weeks</span>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-all border border-white/5 flex items-center justify-center gap-2 relative z-10">
            <i className="fa-solid fa-circle-info"></i> View Syllabus
          </button>
        </div>
      </div>
    </div>
  );
}
