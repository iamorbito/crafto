'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartSlideOver() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-surface-container-low shadow-xl z-50 flex flex-col transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-warm-clay/10">
          <h2 className="font-headline-md text-headline-md text-charcoal">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-on-surface-variant hover:text-charcoal transition-colors p-2"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-50">shopping_cart</span>
              <p className="font-body-md">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 text-charcoal underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4">
                <div className="w-20 h-24 flex-shrink-0 bg-surface-variant relative overflow-hidden">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-body-md text-[14px] text-charcoal font-medium">{product.name}</h3>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">{product.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-warm-clay/20 bg-surface">
                      <button 
                        onClick={() => {
                          if (quantity === 1) removeItem(product.id);
                          else updateQuantity(product.id, -1);
                        }}
                        className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-warm-clay/10 transition-colors"
                      >
                        {quantity === 1 ? <span className="material-symbols-outlined text-[16px]">delete</span> : '-'}
                      </button>
                      <span className="w-8 text-center font-body-sm text-[14px] text-charcoal">{quantity}</span>
                      <button 
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-charcoal hover:bg-warm-clay/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-body-md text-charcoal font-medium">₹{product.price * quantity}</span>
                      {product.originalPrice && (
                        <span className="font-body-sm text-[12px] text-on-surface-variant line-through">₹{product.originalPrice * quantity}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-warm-clay/10 bg-surface">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body-lg text-on-surface-variant">Subtotal</span>
              <span className="font-headline-md text-charcoal">₹{cartTotal.toFixed(2)}</span>
            </div>
            <Link 
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full flex justify-center py-4 bg-charcoal text-off-white font-label-caps hover:bg-warm-clay transition-colors duration-300"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
