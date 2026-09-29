export default function JobsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up pb-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">AI Job Portal</h1>
          <p className="text-indigo-200">Personalized cooperative job matches powered by BERT AI Engine.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Job 1 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row justify-between md:items-center gap-6 group">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                96% Skill Match
              </span>
              <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded">
                Full-Time
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">Computerized PACS ERP Accountant</h3>
            <p className="text-sm text-slate-300 mb-3">Nashik District Central Cooperative Bank (PACS Hub)</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span><i className="fa-solid fa-location-dot mr-1 text-slate-500"></i> Nashik (12 km)</span>
              <span><i className="fa-solid fa-indian-rupee-sign mr-1 text-slate-500"></i> 18,500/mo</span>
              <span><i className="fa-solid fa-certificate mr-1 text-slate-500"></i> Verified NCCT Cert Required</span>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-emerald-900/50">
              1-Click Apply ✓
            </button>
          </div>
        </div>

        {/* Job 2 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all flex flex-col md:flex-row justify-between md:items-center gap-6 group">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                91% Skill Match
              </span>
              <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded">
                Contract
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">Dairy Quality & Billing Supervisor</h3>
            <p className="text-sm text-slate-300 mb-3">Sahyadri Cooperative Milk Union Ltd.</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span><i className="fa-solid fa-location-dot mr-1 text-slate-500"></i> Sinnar, MH</span>
              <span><i className="fa-solid fa-indian-rupee-sign mr-1 text-slate-500"></i> 16,000/mo</span>
              <span><i className="fa-solid fa-flask mr-1 text-slate-500"></i> Dairy Tech Module</span>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg">
              1-Click Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
