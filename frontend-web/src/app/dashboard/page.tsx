export default function Dashboard() {
  return (
    <div className="p-4 lg:p-6 max-w-[1440px] mx-auto min-h-screen">
      
      {/* Top Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-indigo-700 text-white flex items-center justify-center text-xl font-bold shadow">
            <i className="fa-solid fa-network-wired"></i>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-extrabold text-slate-900">SAHAKAR-SETU: NCCT Integrated ERP, AI-LMS & Employment Exchange</h1>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-300">
                <i className="fa-solid fa-circle-check mr-1"></i>De-Duplication Active
              </span>
            </div>
            <p className="text-xs text-slate-500">
              National Council for Cooperative Training (VAMNICOM • 5 RICMs • 14 ICMs) | Trainee: <strong>Kiran Patil (NCCT-2026-MH-00492)</strong> | Role: <strong>Rural Youth / PACS Operator</strong>
            </p>
          </div>
        </div>

        {/* Hardware & Multilingual Status Pills */}
        <div className="flex items-center gap-2.5 text-xs">
          <div className="bg-amber-50 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-lg flex items-center gap-2 font-semibold">
            <i className="fa-solid fa-microphone-lines text-orange-600"></i>
            <span>Bhashini Voice AI: <strong>Marathi / हिंदी</strong></span>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 text-indigo-900 px-3 py-1.5 rounded-lg flex items-center gap-2 font-semibold">
            <i className="fa-solid fa-server text-indigo-600"></i>
            <span>RPi-5 Edge Box: <strong>Synced (38 Trainees)</strong></span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 px-3 py-1.5 rounded-lg flex items-center gap-2 font-semibold">
            <i className="fa-solid fa-fingerprint text-emerald-600"></i>
            <span>BioPass RFID: <strong>92% Attendance</strong></span>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Cards (ERP, LMS, Analytics, Placement) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">NCCT ERP Institutes</p>
            <p className="text-2xl font-extrabold text-slate-800 mt-0.5">20 Connected</p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">
              <i className="fa-solid fa-shield-halved mr-1"></i>0 Duplicate Enrollments
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
            <i className="fa-solid fa-building-columns"></i>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">AI-LMS Skill Progress</p>
            <p className="text-2xl font-extrabold text-slate-800 mt-0.5">86% Completed</p>
            <p className="text-[11px] text-indigo-600 font-semibold mt-1">
              <i className="fa-solid fa-chart-line mr-1"></i>Pre-Test: 38% → Post-Test: 88%
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">Skill Certificate Status</p>
            <p className="text-2xl font-extrabold text-emerald-700 mt-0.5">QR Verified</p>
            <p className="text-[11px] text-slate-600 font-semibold mt-1">
              <i className="fa-solid fa-qrcode mr-1"></i>ID: CERT-VAM-2026-8841
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
            <i className="fa-solid fa-award"></i>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">AI Cooperative Job Matches</p>
            <p className="text-2xl font-extrabold text-orange-600 mt-0.5">4 Top Roles</p>
            <p className="text-[11px] text-orange-700 font-semibold mt-1">
              <i className="fa-solid fa-bolt mr-1"></i>96% BERT Skill Match Score
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl">
            <i className="fa-solid fa-briefcase"></i>
          </div>
        </div>
      </div>

      {/* MAIN 3-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* LEFT COLUMN (4 Cols): NCCT ERP & LMS Modules + Voice AI */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Active LMS Courses & Digital Literacy */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">
                <i className="fa-solid fa-book-open-reader text-indigo-600 mr-1.5"></i>Multilingual AI-LMS Courses
              </h2>
              <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-semibold">Offline Cached ✓</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>1. Computerized PACS ERP & Tally GST</span>
                  <span className="text-emerald-600">92%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[92%]"></div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">VAMNICOM Pune • Certified Module • Audio: Marathi/Hindi</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>2. Dairy Cooperative Quality & Cold-Chain</span>
                  <span className="text-indigo-600">84%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[84%]"></div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">ICM Nashik • Practical Lab Verified via BioPass RFID</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>3. Rural Digital Literacy, Cyber Hygiene & CSC</span>
                  <span className="text-amber-600">78%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[78%]"></div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">SHG & Youth Track • AI Adaptive Quiz Passed</p>
              </div>
            </div>
          </div>

          {/* Bhashini Voice AI Tutor & ERP Anti-Duplication Box */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                <i className="fa-solid fa-robot mr-1"></i>Sahakar Voice AI Didi (Bhashini)
              </span>
              <span className="text-[10px] bg-white/15 px-2 py-0.5 rounded">Live RAG Assistant</span>
            </div>
            <div className="bg-white/10 rounded-lg p-2.5 text-xs mb-2.5">
              <p className="text-amber-200 font-semibold mb-1">🎤 Trainee Question (Marathi/Hindi):</p>
              <p className="italic text-slate-100">&quot;PACS society mein khad (fertilizer) stock entry aur NCDC loan form kaise bharein?&quot;</p>
            </div>
            <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-lg p-2.5 text-xs">
              <p className="text-emerald-300 font-semibold mb-1">🔊 AI Answer + Auto-Generated DPR:</p>
              <p className="text-slate-200">Step-by-step voice guide played. 5-Question Quiz & Bank Project Report (DPR) PDF unlocked.</p>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN (4 Cols): Learning Analytics Graphs (For Low Digital Literacy) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">
                <i className="fa-solid fa-chart-column text-emerald-600 mr-1.5"></i>Visual Learning Analytics
              </h2>
              <span className="text-[11px] text-slate-500 font-medium">Pre vs. Post Skill Gain</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Simple visual graphs to help rural learners & NCCT trainers track skill growth:
            </p>

            {/* Visual Bar Chart (Pure CSS for crisp screenshot) */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-3">
              <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-2">
                <span><span className="inline-block w-2.5 h-2.5 bg-slate-400 rounded-sm mr-1"></span>Before Training (Pre-Test)</span>
                <span><span className="inline-block w-2.5 h-2.5 bg-indigo-600 rounded-sm mr-1"></span>After Training (Post-Test)</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between font-semibold mb-0.5">
                    <span>PACS ERP Accounting</span>
                    <span className="text-indigo-700 font-bold">35% → 92% (+57%)</span>
                  </div>
                  <div className="flex gap-1 h-3">
                    <div className="bg-slate-400 rounded-l w-[35%]"></div>
                    <div className="bg-indigo-600 rounded-r w-[57%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-0.5">
                    <span>Digital Literacy & UPI</span>
                    <span className="text-emerald-700 font-bold">40% → 90% (+50%)</span>
                  </div>
                  <div className="flex gap-1 h-3">
                    <div className="bg-slate-400 rounded-l w-[40%]"></div>
                    <div className="bg-emerald-600 rounded-r w-[50%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-0.5">
                    <span>Dairy Quality & FSSAI</span>
                    <span className="text-orange-600 font-bold">30% → 84% (+54%)</span>
                  </div>
                  <div className="flex gap-1 h-3">
                    <div className="bg-slate-400 rounded-l w-[30%]"></div>
                    <div className="bg-orange-500 rounded-r w-[54%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-0.5">
                    <span>Cooperative Law & Audit</span>
                    <span className="text-blue-700 font-bold">28% → 80% (+52%)</span>
                  </div>
                  <div className="flex gap-1 h-3">
                    <div className="bg-slate-400 rounded-l w-[28%]"></div>
                    <div className="bg-blue-600 rounded-r w-[52%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Classroom Box Status & QR Certificate Card */}
            <div className="border border-emerald-300 bg-emerald-50/60 rounded-xl p-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase bg-emerald-600 text-white px-2 py-0.5 rounded">
                  Publicly Visible Certification
                </span>
                <h3 className="text-xs font-extrabold text-slate-800 mt-1">NCCT Verified Skill Certificate</h3>
                <p className="text-[11px] text-slate-600">Skills: Tally ERP • PACS Audit • Dairy Ops</p>
                <p className="text-[10px] text-emerald-800 font-semibold mt-0.5">✓ Linked to DigiLocker & Employer Directory</p>
              </div>
              <div className="w-16 h-16 bg-white border-2 border-slate-800 rounded-lg flex flex-col items-center justify-center p-1 shadow-sm">
                <i className="fa-solid fa-qrcode text-3xl text-slate-900"></i>
                <span className="text-[8px] font-bold text-slate-600">SCAN VERIFY</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (4 Cols): AI-Powered Profile Matching & Job/Startup Recommendations */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">
                <i className="fa-solid fa-wand-magic-sparkles text-orange-500 mr-1.5"></i>Recommended Cooperative Jobs
              </h2>
              <span className="text-[11px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-bold">BERT AI Engine</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Top personalized matches based on your NCCT certification, skills & district:
            </p>

            <div className="space-y-2.5 text-xs">
              {/* Job Card 1 */}
              <div className="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50/40 hover:shadow transition">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">96% Skill Match</span>
                    <h3 className="font-extrabold text-slate-900 text-sm mt-1">Computerized PACS ERP Accountant</h3>
                    <p className="text-[11px] text-slate-600 font-medium">Nashik District Central Cooperative Bank (PACS Hub)</p>
                  </div>
                  <span className="font-extrabold text-emerald-700">₹18,500/mo</span>
                </div>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-emerald-200">
                  <span className="text-[11px] text-slate-500"><i className="fa-solid fa-location-dot mr-1 text-emerald-600"></i>Nashik (12 km) • Verified Cert</span>
                  <button className="bg-emerald-600 text-white font-bold px-3 py-1 rounded-md text-[11px]">1-Click Apply ✓</button>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:shadow transition">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full">91% Skill Match</span>
                    <h3 className="font-extrabold text-slate-900 text-sm mt-1">Dairy Cooperative Quality & Billing Supervisor</h3>
                    <p className="text-[11px] text-slate-600 font-medium">Sahyadri Cooperative Milk Union Ltd.</p>
                  </div>
                  <span className="font-extrabold text-slate-700">₹16,000/mo</span>
                </div>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-200">
                  <span className="text-[11px] text-slate-500"><i className="fa-solid fa-location-dot mr-1 text-indigo-600"></i>Sinnar, MH • Dairy Tech Module</span>
                  <button className="bg-indigo-600 text-white font-bold px-3 py-1 rounded-md text-[11px]">1-Click Apply</button>
                </div>
              </div>

              {/* Entrepreneurship Support Card */}
              <div className="p-3 rounded-xl border border-amber-300 bg-amber-50/70">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-extrabold uppercase bg-amber-600 text-white px-2 py-0.5 rounded">
                    Entrepreneurship Support
                  </span>
                  <span className="text-[11px] font-bold text-amber-900">NCDC Yuva Sahakar / MUDRA</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-xs mt-1">Start a Micro-Dairy / SHG Processing Cooperative</h3>
                <p className="text-[11px] text-slate-600 mt-0.5 mb-2">
                  AI generated your bank-ready Detailed Project Report (DPR) with ₹5 Lakh subsidy linkage.
                </p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-1.5 rounded-md text-[11px]">
                  <i className="fa-solid fa-file-pdf mr-1"></i>Download Bank-Ready AI DPR & Apply Loan
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
