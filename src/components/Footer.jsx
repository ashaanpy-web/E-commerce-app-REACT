import React from 'react';
import { Cpu, Mail } from 'lucide-react'; // Sirf reliable icons ko rakha

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-lg relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                NEXUS<span className="text-cyan-400 text-glow">3D</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pioneering the future of e-commerce with immersive 3D experiences. Explore technology like never before.
            </p>
            {/* Pure SVG Social Icons - 100% Error Free & Fast */}
            <div className="flex gap-4">
              {/* Twitter / X */}
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {['Audio', 'Wearables', 'Computing', 'Photography', 'Accessories'].map((item) => (
                <li key={item}><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map((item) => (
                <li key={item}><a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest updates on new products and upcoming sales.</p>
            <div className="flex bg-slate-900 rounded-full border border-white/10 p-1">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent border-none outline-none text-white px-4 w-full text-sm placeholder:text-slate-500"
              />
              <button className="bg-cyan-400 text-slate-950 p-2 rounded-full hover:bg-white transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nexus3D Store. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;