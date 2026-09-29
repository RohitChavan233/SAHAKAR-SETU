export default function CoursesPage() {
  return (
    <div className="space-y-6 animate-fade-in-up pb-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Courses & Modules</h1>
          <p className="text-indigo-200">Browse and continue your AI-LMS cooperative training.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl shadow-lg transition-colors flex items-center gap-2">
          <i className="fa-solid fa-magnifying-glass"></i> Explore Catalog
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course 1 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
          <div>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3 inline-block">
              In Progress
            </span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Computerized PACS ERP & Tally GST</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Learn complete end-to-end accounting for Primary Agricultural Credit Societies using standard Tally ERP.</p>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-slate-400">Completion</span>
              <span className="text-xs font-bold text-emerald-400">92%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
            </div>
            <button className="w-full mt-4 bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 text-white text-sm font-bold py-2 rounded-lg transition-all border border-white/5">
              Resume Module
            </button>
          </div>
        </div>

        {/* Course 2 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between group">
          <div>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3 inline-block">
              In Progress
            </span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Dairy Cooperative Quality & Cold-Chain</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Master cold chain management, quality testing, and supply chain logistics for dairy cooperatives.</p>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-slate-400">Completion</span>
              <span className="text-xs font-bold text-blue-400">84%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '84%' }}></div>
            </div>
            <button className="w-full mt-4 bg-white/10 hover:bg-blue-500/20 hover:text-blue-300 text-white text-sm font-bold py-2 rounded-lg transition-all border border-white/5">
              Resume Module
            </button>
          </div>
        </div>

        {/* Course 3 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all flex flex-col justify-between group">
          <div>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3 inline-block">
              In Progress
            </span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">Rural Digital Literacy, Cyber Hygiene & CSC</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Essential cyber security, UPI transactions, and operating a Common Service Centre (CSC).</p>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-slate-400">Completion</span>
              <span className="text-xs font-bold text-amber-400">78%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <button className="w-full mt-4 bg-white/10 hover:bg-amber-500/20 hover:text-amber-300 text-white text-sm font-bold py-2 rounded-lg transition-all border border-white/5">
              Resume Module
            </button>
          </div>
        </div>

        {/* Course 4 (Not Started) */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group opacity-70 hover:opacity-100">
          <div>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-500/20 text-slate-300 border border-slate-500/30 mb-3 inline-block">
              Not Started
            </span>
            <h3 className="text-lg font-bold text-white mb-2">Cooperative Law & Audit Framework</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Legal frameworks, bye-laws, and internal auditing guidelines for Indian cooperative societies.</p>
          </div>
          <div className="mt-6">
            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold py-2 rounded-lg transition-all shadow-lg">
              Start Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
