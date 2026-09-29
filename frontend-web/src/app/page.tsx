"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-45px)] flex items-center justify-center p-6 bg-gradient-to-br from-blue-950 via-indigo-900 to-teal-900">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-slate-200">
        
        {/* Left Branding Panel */}
        <div className="bg-gradient-to-b from-orange-500 via-amber-600 to-emerald-700 text-white p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-bold">
                <i className="fa-solid fa-wheat-awn"></i>
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-wide">SAHAKAR-SETU</h1>
                <p className="text-xs text-orange-100">Ministry of Cooperation • NCCT Digital Ecosystem</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold leading-snug mb-3">
              AI & LMS-Enabled Cooperative Capacity Building, ERP & Employment Portal
            </h2>
            <p className="text-xs text-orange-50 leading-relaxed mb-6">
              Connecting VAMNICOM, 5 RICMs & 14 ICMs on a single platform for PACS members, SHGs, Dairy Cooperatives, Farmers & Rural Youth.
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 bg-black/20 p-2.5 rounded-lg">
                <i className="fa-solid fa-fingerprint text-emerald-300 text-base w-5 text-center"></i>
                <span><strong>Zero Duplication ERP:</strong> Unique Cooperative Learner ID & Biometric Tracking</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 p-2.5 rounded-lg">
                <i className="fa-solid fa-language text-amber-300 text-base w-5 text-center"></i>
                <span><strong>Multilingual AI-LMS:</strong> Bhashini Voice Tutor in 12+ Regional Languages</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 p-2.5 rounded-lg">
                <i className="fa-solid fa-briefcase text-sky-300 text-base w-5 text-center"></i>
                <span><strong>AI Employment Exchange:</strong> Direct PACS, Dairy & Coop Bank Job Matching</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-[11px]">
            <span><i className="fa-solid fa-microchip mr-1"></i> Sahakar-Edge Box: <strong>Connected (Local Wi-Fi)</strong></span>
            <span className="bg-emerald-500 px-2 py-0.5 rounded font-bold">SIH26087</span>
          </div>
        </div>

        {/* Right Login Panel */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              Welcome to NCCT Portal
            </span>
            <select className="text-xs border border-slate-300 rounded-lg px-2 py-1 bg-slate-50 font-medium outline-none">
              <option>🌐 हिंदी / Hindi</option>
              <option>🌐 मराठी / Marathi</option>
              <option defaultValue="en">🌐 English</option>
              <option>🌐 ગુજરાતી / Gujarati</option>
            </select>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-800 mb-1">Sign In to Sahakar-Setu</h3>
          <p className="text-xs text-slate-500 mb-5">Select your stakeholder role or tap your NCCT RFID Smart Card</p>

          {/* Role Selector Pills */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs font-semibold text-center">
            <div className="p-2 rounded-lg bg-indigo-600 text-white shadow cursor-pointer">
              <i className="fa-solid fa-user-graduate block mb-1"></i> Rural Youth / SHG
            </div>
            <div className="p-2 rounded-lg bg-slate-100 text-slate-600 border border-slate-200 cursor-pointer hover:bg-slate-200 transition">
              <i className="fa-solid fa-building-columns block mb-1"></i> VAMNICOM / ICM
            </div>
            <div className="p-2 rounded-lg bg-slate-100 text-slate-600 border border-slate-200 cursor-pointer hover:bg-slate-200 transition">
              <i className="fa-solid fa-handshake block mb-1"></i> Coop Employer
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Unique Cooperative Learner ID / Mobile</label>
              <input type="text" defaultValue="NCCT-2026-MH-00492 (Kiran Patil)" className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 font-medium outline-none focus:border-indigo-500" readOnly />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Select Institute / Training Center</label>
              <input type="text" defaultValue="VAMNICOM Pune / ICM Nashik Outreach Center" className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-slate-50 font-medium outline-none focus:border-indigo-500" readOnly />
            </div>
          </div>

          <button onClick={handleLogin} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg shadow-md transition mb-3 text-sm">
            Sign In with Aadhaar OTP / DigiLocker <i className="fa-solid fa-arrow-right ml-1"></i>
          </button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-[11px] text-slate-400 font-semibold uppercase">Or Hardware Classroom Login</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div onClick={handleLogin} className="mt-2 border-2 border-dashed border-emerald-500 bg-emerald-50/70 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-emerald-100 transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-lg">
                <i className="fa-solid fa-id-card-clip"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-900">Tap NFC Smart Card + R307 Fingerprint</p>
                <p className="text-[11px] text-emerald-700">Sahakar-BioPass Node #04 • Verified Attendance</p>
              </div>
            </div>
            <span className="text-xs font-bold bg-emerald-600 text-white px-2.5 py-1 rounded-md">Verified ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
