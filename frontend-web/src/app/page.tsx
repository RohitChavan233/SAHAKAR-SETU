"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }
      
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
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
        <div className="p-10 flex flex-col justify-center bg-slate-50/50">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-3 py-1.5 rounded-full">
              Welcome to NCCT Portal
            </span>
            <select className="text-xs border border-slate-300 rounded-lg px-3 py-1.5 bg-white font-medium outline-none shadow-sm hover:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all">
              <option defaultValue="en">🌐 English</option>
              <option>🌐 हिंदी / Hindi</option>
              <option>🌐 मराठी / Marathi</option>
              <option>🌐 ગુજરાતી / Gujarati</option>
            </select>
          </div>

          <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Sign In to Sahakar-Setu</h3>
          <p className="text-sm text-slate-500 mb-8">Select your stakeholder role or tap your NCCT RFID Smart Card</p>

          {/* Role Selector Pills */}
          <div className="grid grid-cols-3 gap-3 mb-8 text-xs font-bold text-center">
            <div className="p-3 rounded-xl bg-indigo-600 text-white shadow-md cursor-pointer hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5">
              <i className="fa-solid fa-user-graduate block mb-1.5 text-lg"></i> Rural Youth / SHG
            </div>
            <div className="p-3 rounded-xl bg-white text-slate-600 border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:text-indigo-600 transition-all transform hover:-translate-y-0.5">
              <i className="fa-solid fa-building-columns block mb-1.5 text-lg"></i> VAMNICOM / ICM
            </div>
            <div className="p-3 rounded-xl bg-white text-slate-600 border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:text-indigo-600 transition-all transform hover:-translate-y-0.5">
              <i className="fa-solid fa-handshake block mb-1.5 text-lg"></i> Coop Employer
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 mb-6">
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">Email or Mobile Number</label>
              <input 
                type="text" 
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                placeholder="Enter email or mobile"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                placeholder="Enter your password"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-sm font-semibold bg-red-50 p-3 rounded-lg">{error}</p>}

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 text-sm">
              Sign In to Dashboard <i className="fa-solid fa-arrow-right ml-1.5"></i>
            </button>
          </form>
          
          <div className="text-center mb-6">
            <a href="/register" className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm font-bold transition-colors">New User? Create an Account</a>
          </div>

          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs text-slate-400 font-bold uppercase tracking-widest">Or Hardware Classroom Login</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="mt-2 border-2 border-dashed border-emerald-400 bg-emerald-50 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-emerald-100 hover:border-emerald-500 transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-id-card-clip"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-900 mb-0.5">Tap NFC Smart Card + R307 Fingerprint</p>
                <p className="text-xs text-emerald-700 font-medium">Sahakar-BioPass Node #04 • Verified Attendance</p>
              </div>
            </div>
            <span className="text-xs font-extrabold bg-emerald-600 text-white px-3 py-1.5 rounded-lg shadow-sm">Verified ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
