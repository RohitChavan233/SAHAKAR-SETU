"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  
  // Auth States
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("TRAINEE");
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const endpoint = isLogin ? "login" : "register";
      const payload = isLogin 
        ? { identifier, password }
        : { fullName, mobileNumber, email, password, role };

      const res = await fetch(`http://localhost:5000/api/v1/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }
      
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-950 via-indigo-900 to-teal-900">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-slate-200">
        
        {/* Left Branding Panel */}
        <div className="bg-gradient-to-b from-orange-500 via-amber-600 to-emerald-700 text-white p-10 flex flex-col justify-between hidden md:flex">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                <i className="fa-solid fa-wheat-awn"></i>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-wide">SAHAKAR-SETU</h1>
                <p className="text-sm text-orange-100 font-medium">Ministry of Cooperation • NCCT</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-4">
              AI & LMS-Enabled Cooperative Capacity Building Portal
            </h2>
            <p className="text-sm text-orange-50 leading-relaxed mb-8 opacity-90">
              Connecting VAMNICOM, 5 RICMs & 14 ICMs on a single platform for PACS members, SHGs, Dairy Cooperatives, Farmers & Rural Youth.
            </p>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3 bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <i className="fa-solid fa-fingerprint text-emerald-300 text-xl w-6 text-center"></i>
                <span><strong>Zero Duplication ERP:</strong> Unique Learner ID & Biometrics</span>
              </div>
              <div className="flex items-center gap-3 bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <i className="fa-solid fa-language text-amber-300 text-xl w-6 text-center"></i>
                <span><strong>Multilingual AI-LMS:</strong> Voice Tutor in 12+ Languages</span>
              </div>
              <div className="flex items-center gap-3 bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                <i className="fa-solid fa-briefcase text-sky-300 text-xl w-6 text-center"></i>
                <span><strong>AI Employment Exchange:</strong> Direct Job Matching</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-xs font-medium">
            <span><i className="fa-solid fa-microchip mr-2"></i> Sahakar-Edge Box: <strong className="text-emerald-300">Connected</strong></span>
            <span className="bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 px-3 py-1 rounded-lg font-bold">SIH26087</span>
          </div>
        </div>

        {/* Right Auth Panel */}
        <div className="p-10 flex flex-col justify-center bg-slate-50 relative">
          
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-3 py-1.5 rounded-full">
              NCCT Portal
            </span>
            <select className="text-xs border border-slate-300 rounded-lg px-3 py-1.5 bg-white font-medium outline-none shadow-sm hover:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer">
              <option defaultValue="en">🌐 English</option>
              <option>🌐 हिंदी / Hindi</option>
              <option>🌐 मराठी / Marathi</option>
            </select>
          </div>

          <h3 className="text-3xl font-extrabold text-slate-800 mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h3>
          <p className="text-sm text-slate-500 mb-8">
            {isLogin ? "Sign in to access your SAHAKAR-SETU dashboard." : "Join the SAHAKAR-SETU digital ecosystem today."}
          </p>

          <form onSubmit={handleAuth} className="space-y-4">
            
            {!isLogin && (
              <>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                    placeholder="Enter full name"
                    required={!isLogin}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">Mobile Number</label>
                    <input 
                      type="text" 
                      value={mobileNumber}
                      onChange={e => setMobileNumber(e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                      placeholder="+91 9876543210"
                      required={!isLogin}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 block mb-1.5">Role</label>
                    <select 
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm cursor-pointer" 
                    >
                      <option value="TRAINEE">Trainee / Youth</option>
                      <option value="TRAINER">Trainer</option>
                      <option value="EMPLOYER">Coop Employer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1.5">Email (Optional)</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                    placeholder="Enter email address"
                  />
                </div>
              </>
            )}

            {isLogin && (
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Email or Mobile Number</label>
                <input 
                  type="text" 
                  value={identifier}
                  onChange={e => setIdentifier(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                  placeholder="Enter email or mobile"
                  required={isLogin}
                />
              </div>
            )}
            
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-1.5">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl bg-white font-medium outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm" 
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-sm font-semibold bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}

            <button disabled={loading} type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 text-sm mt-4 disabled:opacity-70 disabled:hover:translate-y-0">
              {loading ? 'Processing...' : (isLogin ? "Sign In to Dashboard" : "Create Account")} <i className={`fa-solid ${isLogin ? 'fa-arrow-right' : 'fa-user-plus'} ml-1.5`}></i>
            </button>
          </form>
          
          <div className="text-center mt-6">
            <button 
              type="button"
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm font-bold transition-colors"
            >
              {isLogin ? "New User? Create an Account" : "Already have an account? Sign In"}
            </button>
          </div>

          {isLogin && (
            <>
              <div className="relative flex py-6 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-xs text-slate-400 font-bold uppercase tracking-widest">Or Hardware Login</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <div className="border-2 border-dashed border-emerald-400 bg-emerald-50/50 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-emerald-50 hover:border-emerald-500 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-id-card-clip"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-900 mb-0.5">Tap NFC Smart Card</p>
                    <p className="text-xs text-emerald-700 font-medium">Verified Attendance</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
