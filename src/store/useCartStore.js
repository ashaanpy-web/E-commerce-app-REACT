import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],

    // 1. Add Product to Cart Logic
    addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);
        if (existingItem) {
            // Agar item pehle se hai to quantity barha do
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        // Agar naya item hai to list mein add karo with quantity 1
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

    // 2. Decrease Quantity Logic
    decreaseQuantity: (productId) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === productId);
        if (existingItem && existingItem.quantity > 1) {
            return {
                cart: state.cart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        } else if (existingItem && existingItem.quantity === 1) {
             return {
                 cart: state.cart.filter((item) => item.id !== productId),
             };
        }
        return state;
    }),

    // 3. Remove Product Logic
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
    })),

    // 3. Clear Cart Logic
    clearCart: () => set({ cart: [] }),

    // 4. Total Items Counter (Navbar ke liye)
    getTotalItems: () => {
        // State directly store se nikalenge component ke andar helper function se
    }
}));