import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import Cart from './Cart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 glassmorphism"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Cpu className="h-8 w-8 text-brand-cyan" />
            <span className="text-2xl font-bold tracking-tighter text-white">
              NEXUS<span className="text-brand-cyan text-glow">3D</span>
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-slate-300 hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium hover:text-glow">Home</Link>
              <Link to="/explore" className="text-slate-300 hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium hover:text-glow">Products</Link>
              <a href="#" className="text-slate-300 hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium hover:text-glow">Features</a>
              <a href="#" className="text-slate-300 hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium hover:text-glow">Support</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <motion.button 
              onClick={() => setIsCartOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-300 hover:text-brand-cyan transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-purple text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-cyan text-slate-950 px-6 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-shadow"
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={() => setIsCartOpen(true)} className="text-slate-300 relative hover:text-brand-cyan transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-purple text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-cyan block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/explore" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-cyan block px-3 py-2 rounded-md text-base font-medium">Products</Link>
              <a href="#" className="text-slate-300 hover:text-brand-cyan block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#" className="text-slate-300 hover:text-brand-cyan block px-3 py-2 rounded-md text-base font-medium">Support</a>
              <div className="px-3 py-4 border-t border-white/10 mt-4">
                <button className="w-full bg-brand-cyan text-slate-950 px-6 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
