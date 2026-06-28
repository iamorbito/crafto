'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [filter, setFilter] = useState(initialCategory);
  const [sort, setSort] = useState('Featured');
  
  // Update filter if URL changes
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilter(category);
    }
  }, [searchParams]);
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  let displayedProducts = [...products];
  
  if (filter !== 'All') {
    displayedProducts = displayedProducts.filter(p => p.category === filter);
  }
  
  if (sort === 'Price: Low to High') {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'Price: High to Low') {
    displayedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'Newest') {
    // Reverse array to simulate newest
    displayedProducts.reverse();
  }

  return (
    <main className="flex-grow pt-[100px] md:pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <div className="mb-24 md:mb-32 text-center md:text-left max-w-3xl">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6">The Collection</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Hand-pulled paper artifacts, crafted with intent. Each piece is a study in material honesty, designed to anchor your space in quiet luxury.</p>
      </div>
      
      {/* Filter/Sorting Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-4 border-b border-warm-clay/20 gap-6">
        <div className="flex flex-wrap gap-6 items-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-label-caps text-label-caps transition-colors duration-300 ${filter === cat ? 'text-charcoal border-b border-charcoal' : 'text-on-surface-variant hover:text-warm-clay'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div>
          <span className="font-label-caps text-label-caps text-on-surface-variant mr-2">Sort by</span>
          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="font-label-caps text-label-caps text-charcoal bg-transparent border-none p-0 focus:ring-0 cursor-pointer appearance-none hover:text-warm-clay transition-colors duration-300"
          >
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <span className="material-symbols-outlined text-[16px] align-middle -ml-1 text-charcoal pointer-events-none">expand_more</span>
        </div>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter gap-y-16">
        {displayedProducts.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
            <div className="relative w-full aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src={product.imageUrl} alt={product.name} />
              <div className="absolute top-4 left-4 border border-warm-clay/30 px-3 py-1 bg-off-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-label-caps text-label-caps text-charcoal">View Details</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-charcoal mb-1 group-hover:text-warm-clay transition-colors duration-300">{product.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{product.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body-md text-body-md text-charcoal font-medium">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="font-body-sm text-[12px] text-on-surface-variant line-through">₹{product.originalPrice}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen"></div>}>
      <ShopContent />
    </Suspense>
  );
}
