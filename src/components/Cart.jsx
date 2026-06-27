import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, addToCart, decreaseQuantity, clearCart } = useCartStore();

  const totalPrice = cart.reduce((total, item) => {
    // Assuming price format is "$299" or similar
    const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return total + (priceNum * item.quantity);
  }, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*New Order from NEXUS3D*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${item.price}\n\n`;
    });

    message += `*Total Amount: $${totalPrice.toFixed(2)}*\n\n`;
    message += `Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "03067288008"; // Placeholder phone number
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
          />

          {/* Centered Modal */}
          <div className="fixed inset-0 pt-24 flex items-center justify-center z-[70] pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glassmorphism relative w-full max-w-2xl max-h-[80vh] flex flex-col rounded-2xl overflow-hidden pointer-events-auto shadow-[0_0_50px_rgba(0,240,255,0.2)] border border-white/20 bg-slate-950"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-all hover:scale-110 rounded-full hover:bg-white/10 p-2 z-10 bg-black/20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="flex items-center p-6 border-b border-white/10 pr-16">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-brand-cyan w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white tracking-tight">Your Cart</h2>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                    <ShoppingBag className="w-12 h-12 mb-4 opacity-50" />
                    <p className="text-lg">Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl group hover:bg-white/10 transition-colors">
                      <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md flex-shrink-0" />

                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-sm sm:text-base font-semibold line-clamp-1 group-hover:text-brand-cyan transition-colors">{item.name}</h3>
                        <p className="text-brand-cyan font-bold text-xs sm:text-base">{item.price}</p>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-3 bg-slate-950/50 rounded-full px-2 sm:px-3 py-1 border border-white/5 flex-shrink-0">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-slate-400 hover:text-white transition-colors p-1"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="text-white font-medium w-4 text-center text-sm sm:text-base">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="text-slate-400 hover:text-white transition-colors p-1"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors p-2 rounded-full hover:bg-red-400/10 sm:ml-2 flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-slate-950/50">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-300 text-lg">Total</span>
                    <span className="text-3xl font-bold text-white">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={clearCart}
                      className="flex-1 py-3 px-4 rounded-xl font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Clear Cart
                    </button>
                    <button
                      onClick={handleWhatsAppCheckout}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-950 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:bg-green-400 transition-all text-sm sm:text-base"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
