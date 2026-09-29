export default function ProgressPage() {
  return (
    <div className="space-y-6 animate-fade-in-up pb-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">My Progress</h1>
          <p className="text-indigo-200">Track your skill development and certification milestones.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Certification Box */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-center items-center text-center">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-4xl mb-4 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <i className="fa-solid fa-award"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">NCCT Skill Certificate</h3>
          <p className="text-sm text-slate-300 mb-6 max-w-sm">You have successfully acquired verified skills in Tally ERP, PACS Audit, and Dairy Ops.</p>
          
          <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex gap-4 text-left w-full max-w-md">
            <div className="bg-white p-2 rounded-lg">
              <div className="w-16 h-16 border-2 border-black flex flex-col items-center justify-center p-1">
                <div className="w-full h-full bg-black/10 flex flex-wrap gap-1">
                   <div className="w-1/2 h-1/2 bg-black"></div><div className="w-1/3 h-1/2 bg-black"></div>
                   <div className="w-2/3 h-1/3 bg-black"></div><div className="w-1/3 h-1/2 bg-black"></div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">ID: CERT-VAM-2026-8841</p>
              <p className="text-xs text-white font-bold mb-1">Status: Verified & Linked</p>
              <p className="text-[10px] text-slate-400">Available on DigiLocker</p>
            </div>
          </div>
        </div>

        {/* Analytics Summary */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <i className="fa-solid fa-chart-simple text-indigo-400"></i> Overall Performance
          </h3>
          
          <div className="space-y-6 flex-1">
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-white">Average Pre-Test Score</span>
                <span className="text-slate-400">33.2%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-slate-500 h-2 rounded-full" style={{ width: '33.2%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-white">Average Post-Test Score</span>
                <span className="text-emerald-400">86.5%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '86.5%' }}></div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10 mt-auto">
              <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider mb-1">Total Skill Gain</p>
                  <p className="text-2xl font-extrabold text-white">+53.3%</p>
                </div>
                <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xl">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
