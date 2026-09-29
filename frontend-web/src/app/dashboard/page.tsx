"use client";
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
    <div className="space-y-6 animate-fade-in-up pb-10">
      
      {/* Top Banner */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-screen filter blur-[80px] translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl text-white shadow-lg border border-white/20">
                <i className="fa-solid fa-sitemap"></i>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">SAHAKAR-SETU: NCCT Integrated ERP, AI-LMS & Employment Exchange</h1>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap">
                    <i className="fa-solid fa-check-circle mr-1"></i> De-Duplication Active
                  </span>
                </div>
                <p className="text-indigo-200 text-sm font-medium">
                  National Council for Cooperative Training (VAMNICOM • 5 RICMs • 14 ICMs) <span className="mx-2 text-white/20">|</span> 
                  Trainee: <span className="text-white font-bold">{user.fullName} (NCCT-2026-MH-00492)</span> <span className="mx-2 text-white/20">|</span> 
                  Role: <span className="text-white font-bold">{user.role === 'TRAINEE' ? 'Rural Youth / PACS Operator' : user.role}</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white/10">
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
              <i className="fa-solid fa-microphone-lines"></i> Bhashini Voice AI: Marathi / हिंदी
            </span>
            <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
              <i className="fa-solid fa-server"></i> RPi-5 Edge Box: Synced (38 Trainees)
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
              <i className="fa-solid fa-id-card-clip"></i> BioPass RFID: 92% Attendance
            </span>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 hover:border-blue-500/50 transition-all">
          <div>
            <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">NCCT ERP Institutes</h3>
            <p className="text-2xl font-extrabold text-white">20 Connected</p>
            <p className="text-xs text-emerald-400 mt-1 font-medium"><i className="fa-solid fa-shield-halved mr-1"></i> 0 Duplicate Enrollments</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-building-columns"></i>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 hover:border-purple-500/50 transition-all">
          <div>
            <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">AI-LMS Skill Progress</h3>
            <p className="text-2xl font-extrabold text-white">86% Completed</p>
            <p className="text-xs text-purple-300 mt-1 font-medium"><i className="fa-solid fa-chart-line mr-1"></i> Pre-Test: 38% → Post-Test: 88%</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-user-graduate"></i>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 hover:border-emerald-500/50 transition-all">
          <div>
            <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Skill Certificate Status</h3>
            <p className="text-2xl font-extrabold text-white">QR Verified</p>
            <p className="text-xs text-slate-400 mt-1 font-medium"><i className="fa-solid fa-hashtag mr-1"></i> ID: CERT-VAM-2026-8841</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-award"></i>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:bg-white/10 hover:border-orange-500/50 transition-all">
          <div>
            <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">AI Coop Job Matches</h3>
            <p className="text-2xl font-extrabold text-white">4 Top Roles</p>
            <p className="text-xs text-orange-400 mt-1 font-medium"><i className="fa-solid fa-bolt mr-1"></i> 96% BERT Skill Match Score</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-briefcase"></i>
          </div>
        </div>
      </div>

      {/* Main 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Col 1: AI-LMS COURSES */}
        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-cubes text-indigo-400"></i> Multilingual AI-LMS Courses
              </h3>
              <span className="text-[10px] font-bold bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded border border-indigo-500/30">Offline Cached ✓</span>
            </div>
            
            <div className="space-y-6">
              {/* Course 1 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm font-bold text-white">1. Computerized PACS ERP & Tally GST</p>
                  <span className="text-xs font-bold text-emerald-400">92%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-[10px] text-slate-400">VAMNICOM Pune • Certified Module • Audio: Marathi/Hindi</p>
              </div>
              
              {/* Course 2 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm font-bold text-white">2. Dairy Cooperative Quality & Cold-Chain</p>
                  <span className="text-xs font-bold text-blue-400">84%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '84%' }}></div>
                </div>
                <p className="text-[10px] text-slate-400">ICM Nashik • Practical Lab Verified via BioPass RFID</p>
              </div>
              
              {/* Course 3 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm font-bold text-white">3. Rural Digital Literacy, Cyber Hygiene & CSC</p>
                  <span className="text-xs font-bold text-amber-400">78%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-[10px] text-slate-400">SHG & Youth Track • AI Adaptive Quiz Passed</p>
              </div>
            </div>
            
            {/* AI Assistant Box */}
            <div className="mt-8 bg-slate-900/50 rounded-xl border border-indigo-500/30 p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-amber-300 flex items-center gap-2">
                  <i className="fa-solid fa-robot"></i> SAHAKAR VOICE AI DIDI (BHASHINI)
                </h4>
                <span className="text-[9px] font-bold bg-indigo-500 text-white px-1.5 py-0.5 rounded">Live RAG Assistant</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 mb-1"><i className="fa-solid fa-user-pen mr-1"></i> Trainee Question (Marathi/Hindi):</p>
                  <p className="text-xs text-indigo-100 italic">"PACS society mein khad (fertilizer) stock entry aur NCDC loan form kaise bharein?"</p>
                </div>
                <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-500/20">
                  <p className="text-[10px] font-bold text-emerald-400 mb-1"><i className="fa-solid fa-volume-high mr-1"></i> AI Answer + Auto-Generated DPR:</p>
                  <p className="text-xs text-white">Step-by-step voice guide played. 5-Question Quiz & Bank Project Report (DPR) PDF unlocked.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: VISUAL LEARNING ANALYTICS */}
        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-chart-simple text-emerald-400"></i> Visual Learning Analytics
              </h3>
              <span className="text-[10px] text-slate-400 font-medium">Pre vs. Post Skill Gain</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">Simple visual graphs to help rural learners & NCCT trainers track skill growth:</p>
            
            <div className="flex items-center gap-6 mb-6 text-[10px] font-bold text-slate-300">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-600 rounded-sm"></div> Before Training (Pre-Test)</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-500 rounded-sm"></div> After Training (Post-Test)</div>
            </div>
            
            <div className="space-y-5 flex-1">
              {/* Stat 1 */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-white">PACS ERP Accounting</span>
                  <span className="text-indigo-300">35% → 92% (+57%)</span>
                </div>
                <div className="relative h-2.5 bg-white/10 rounded-full flex">
                  <div className="absolute left-0 top-0 h-full bg-slate-500 rounded-l-full" style={{ width: '35%' }}></div>
                  <div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full opacity-80" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              {/* Stat 2 */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-white">Digital Literacy & UPI</span>
                  <span className="text-emerald-300">40% → 90% (+50%)</span>
                </div>
                <div className="relative h-2.5 bg-white/10 rounded-full flex">
                  <div className="absolute left-0 top-0 h-full bg-slate-500 rounded-l-full" style={{ width: '40%' }}></div>
                  <div className="absolute left-0 top-0 h-full bg-emerald-500 rounded-full opacity-80" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              {/* Stat 3 */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-white">Dairy Quality & FSSAI</span>
                  <span className="text-orange-300">30% → 84% (+54%)</span>
                </div>
                <div className="relative h-2.5 bg-white/10 rounded-full flex">
                  <div className="absolute left-0 top-0 h-full bg-slate-500 rounded-l-full" style={{ width: '30%' }}></div>
                  <div className="absolute left-0 top-0 h-full bg-orange-500 rounded-full opacity-80" style={{ width: '84%' }}></div>
                </div>
              </div>
              
              {/* Stat 4 */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-white">Cooperative Law & Audit</span>
                  <span className="text-blue-300">28% → 80% (+52%)</span>
                </div>
                <div className="relative h-2.5 bg-white/10 rounded-full flex">
                  <div className="absolute left-0 top-0 h-full bg-slate-500 rounded-l-full" style={{ width: '28%' }}></div>
                  <div className="absolute left-0 top-0 h-full bg-blue-500 rounded-full opacity-80" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Certificate Box */}
            <div className="mt-6 border border-emerald-500/30 bg-emerald-900/10 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded uppercase">Publicly Visible Certification</span>
                <h4 className="text-sm font-bold text-white mt-1.5">NCCT Verified Skill Certificate</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">Skills: Tally ERP • PACS Audit • Dairy Ops</p>
                <p className="text-[10px] text-emerald-400 font-medium mt-1">✓ Linked to DigiLocker & Employer Directory</p>
              </div>
              <div className="bg-white p-1 rounded-lg">
                <div className="w-10 h-10 border-2 border-black flex flex-col items-center justify-center p-0.5">
                  <div className="w-full h-full bg-black/10 flex flex-wrap gap-0.5">
                     <div className="w-1/2 h-1/2 bg-black"></div><div className="w-1/3 h-1/2 bg-black"></div>
                     <div className="w-2/3 h-1/3 bg-black"></div><div className="w-1/3 h-1/2 bg-black"></div>
                  </div>
                </div>
                <p className="text-[6px] text-center text-black font-bold mt-0.5">SCAN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: JOBS */}
        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-full flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-wand-magic-sparkles text-orange-400"></i> Recommended Jobs
              </h3>
              <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-2 py-1 rounded border border-orange-500/30">BERT AI Engine</span>
            </div>
            <p className="text-xs text-slate-400 mb-5">Top personalized matches based on your NCCT certification, skills & district:</p>
            
            <div className="space-y-4 flex-1">
              {/* Job 1 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-emerald-500/50 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">96% Skill Match</span>
                  <span className="text-xs font-bold text-emerald-400">₹18,500/mo</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Computerized PACS ERP Accountant</h4>
                <p className="text-xs text-slate-400 mb-3">Nashik District Central Cooperative Bank (PACS Hub)</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-500"><i className="fa-solid fa-location-dot mr-1"></i> Nashik (12 km) • Verified Cert</span>
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                    1-Click Apply ✓
                  </button>
                </div>
              </div>
              
              {/* Job 2 */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/50 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">91% Skill Match</span>
                  <span className="text-xs font-bold text-white">₹16,000/mo</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Dairy Quality & Billing Supervisor</h4>
                <p className="text-xs text-slate-400 mb-3">Sahyadri Cooperative Milk Union Ltd.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-500"><i className="fa-solid fa-location-dot mr-1"></i> Sinnar, MH • Dairy Tech Module</span>
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                    1-Click Apply
                  </button>
                </div>
              </div>
            </div>
            
            {/* Entrepreneurship Support Box */}
            <div className="mt-4 border border-orange-500/30 bg-orange-900/10 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded uppercase">Entrepreneurship Support</span>
                <span className="text-[9px] font-bold text-slate-400">NCDC Yuva Sahakar / MUDRA</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Start a Micro-Dairy / SHG Processing Cooperative</h4>
              <p className="text-[10px] text-slate-400 mb-3">AI generated your bank-ready Detailed Project Report (DPR) with ₹5 Lakh subsidy linkage.</p>
              <button className="w-full bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold py-2 rounded-lg transition-colors flex justify-center items-center gap-2">
                <i className="fa-solid fa-file-pdf"></i> Download Bank-Ready AI DPR & Apply Loan
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
