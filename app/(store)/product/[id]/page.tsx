'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const { addItem, items, updateQuantity, removeItem } = useCart();
  
  const product = products.find(p => p.id === id);
  if (!product) {
    notFound();
  }

  const cartItem = items.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <main className="flex-grow pt-[80px] md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-10 min-h-screen relative">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/shop')}
          className="absolute top-[120px] left-4 md:top-12 md:left-8 z-20 w-12 h-12 rounded-sm bg-surface-container-low/80 border border-warm-clay/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors duration-300"
        >
          <span className="material-symbols-outlined text-charcoal">arrow_back</span>
        </button>

        {/* Left: Image (60%) */}
        <div className="md:col-span-6 bg-surface-container-low relative h-[60vh] md:h-auto">
          <img className="w-full h-full object-cover" src={product.imageUrl} alt={product.name} />
        </div>
        
        {/* Right: Details (40%) */}
        <div className="md:col-span-4 px-margin-mobile md:px-[10%] py-12 md:py-32 flex flex-col justify-center bg-surface">
          <div className="mb-8">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-8">
              <p className="font-headline-md text-headline-md text-charcoal">₹{product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="font-body-lg text-on-surface-variant line-through">₹{product.originalPrice.toFixed(2)}</p>
              )}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {product.description}. Formed entirely by hand from reclaimed materials. No two vessels or artifacts are identical. The textured surface bears the marks of the maker, designed to hold light items or stand alone as a sculptural element.
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-3">Dimensions</span>
              <p className="font-body-md text-body-md text-charcoal">Approx. 12" ⌀ × 5" H</p>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-3">Material</span>
              <p className="font-body-md text-body-md text-charcoal">100% Recycled Cotton Paper, Natural Binder</p>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant block mb-3">Care</span>
              <p className="font-body-md text-body-md text-charcoal">Keep away from direct moisture. Dust with a soft, dry brush.</p>
            </div>
          </div>
          
          <div className="mt-auto md:mt-0">
            {quantity === 0 ? (
              <button 
                onClick={() => addItem(product)}
                className="w-full block text-center bg-charcoal text-off-white font-label-caps text-label-caps py-5 hover:bg-warm-clay transition-colors duration-300 mb-4"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between border border-charcoal bg-surface py-2 px-4 mb-4">
                <button 
                  onClick={() => {
                    if (quantity === 1) removeItem(product.id);
                    else updateQuantity(product.id, -1);
                  }}
                  className="w-12 h-12 flex items-center justify-center text-charcoal hover:bg-warm-clay/10 transition-colors"
                >
                  {quantity === 1 ? <span className="material-symbols-outlined text-[18px]">delete</span> : <span className="text-[20px]">-</span>}
                </button>
                <span className="font-body-lg text-charcoal">{quantity} in Cart</span>
                <button 
                  onClick={() => updateQuantity(product.id, 1)}
                  className="w-12 h-12 flex items-center justify-center text-charcoal text-[20px] hover:bg-warm-clay/10 transition-colors"
                >
                  +
                </button>
              </div>
            )}
            <p className="font-body-sm text-[12px] text-on-surface-variant text-center">Ships within 3-5 business days. Complimentary shipping on orders over $200.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
