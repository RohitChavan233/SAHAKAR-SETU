'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500"></div>
          
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-inner">
              <i className="fa-solid fa-wheat-awn text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-teal-400"></i>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-indigo-200/80 font-medium text-sm">Sign in to your SAHAKAR-SETU account</p>
          </div>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl mb-6 text-sm text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-exclamation"></i> {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Email or Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input 
                  type="text" 
                  value={identifier}
                  onChange={e => setIdentifier(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all text-white placeholder-indigo-300/50 font-medium"
                  placeholder="Enter your email or mobile"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all text-white placeholder-indigo-300/50 font-medium"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-400 hover:to-teal-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transform hover:-translate-y-0.5 mt-2"
            >
              Sign In <i className="fa-solid fa-arrow-right ml-2 opacity-80"></i>
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-indigo-200/60 text-sm">
              Don't have an account?{' '}
              <a href="/register" className="text-teal-400 hover:text-teal-300 font-bold hover:underline transition-colors">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
