'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    role: 'TRAINEE'
  });
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 relative overflow-hidden py-12">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-xl w-full relative z-10">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Create Account</h2>
            <p className="text-indigo-200/80 font-medium text-sm">Join the SAHAKAR-SETU Digital Ecosystem</p>
          </div>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl mb-6 text-sm text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-exclamation"></i> {error}
            </div>
          )}
          
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                    <i className="fa-regular fa-id-badge"></i>
                  </div>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition-all text-white placeholder-indigo-300/50 font-medium"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <input 
                    type="text" 
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition-all text-white placeholder-indigo-300/50 font-medium"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Email (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition-all text-white placeholder-indigo-300/50 font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition-all text-white placeholder-indigo-300/50 font-medium"
                    placeholder="Create a password"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-indigo-100 mb-1.5 ml-1">Your Role</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-300">
                    <i className="fa-solid fa-user-tag"></i>
                  </div>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 outline-none transition-all text-white font-medium appearance-none"
                  >
                    <option value="TRAINEE" className="text-slate-900">Trainee / Youth</option>
                    <option value="TRAINER" className="text-slate-900">Trainer</option>
                    <option value="EMPLOYER" className="text-slate-900">Cooperative Employer</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-indigo-300">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-400 hover:to-indigo-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] transform hover:-translate-y-0.5 mt-4"
            >
              Create Account <i className="fa-solid fa-user-plus ml-2 opacity-80"></i>
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-indigo-200/60 text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-bold hover:underline transition-colors">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
