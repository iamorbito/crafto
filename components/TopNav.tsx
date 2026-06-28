'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const { items, setIsCartOpen } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex-1 md:flex hidden gap-8">
          <Link href="/shop" className="font-label-caps text-label-caps text-on-surface hover:text-warm-clay transition-colors duration-300">Shop</Link>
          <Link href="/our-story" className="font-label-caps text-label-caps text-on-surface-variant hover:text-warm-clay transition-colors duration-300">Our Story</Link>
        </div>
        <div className="flex-1 text-center">
          <Link href="/" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">Crafto</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart" 
            className="text-on-surface hover:text-warm-clay transition-colors duration-300 relative"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-charcoal text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
