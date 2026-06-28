'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-cover bg-center w-full h-full" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtYEGLqYKar1KnDbcngp3yxUOhs05PlVbfhLhlFvbMEjrHDrdsFzkHPmmIbYHWetOen98TF1yFi6jk_zfDodTfShlsw0HILqBYxOhPbfvzfUaYVzF732GNaQBdn8Y1anHo6wJPQ3cYijwZR51ABB7O1yX4TJiMNAxTfpu6-EuWEDc4c1AwH321r741rM6yQKSCuAi6bUshMGGiqE0BuIY8cVI893pCCLCzRKpwqhK6WG20McM_ygxvyCE3LML8Q_fL8CNpY1KF5uk')" }}
          ></div>
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 fade-in-up">Artisanal Paper Crafto Decor.</h1>
          <p className="font-headline-md text-headline-md text-on-surface-variant mb-10 max-w-2xl fade-in-up" style={{ transitionDelay: '0.1s' }}>Handcrafted for the Modern Space.</p>
          <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-off-white font-label-caps text-label-caps hover:bg-warm-clay transition-colors duration-300 fade-in-up" style={{ transitionDelay: '0.2s' }}>
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="explore" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20 fade-in-up">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Curated Forms</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Objects of quiet intention.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Premium Bowls */}
          <Link href="/shop?category=Bowls" className="md:col-span-7 group cursor-pointer fade-in-up block">
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-surface-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXiLJLwzNjW3N28jwfVqt51VZF2EvDidNq31E3TAAqyEQ_4MX0l9e-jEXu5IJ2l0GwienB4fjwGO-5-IlIl5df503O7eMyOJ9ViNeMXr9xrE3TdoshtyekTjWv2Fj5vdomqjh9lro38o6dGoYM_jsFom6LUX03yzsxevTD4AfZ5DHIO-oC-W6GxAfXoE0qs1gh_jybT81Oyqkaxhe_5fj-rhdJw7XUoen880WQBn8EJE0By2K6iH4AJ9hutpYXb630R9wd2PY2ulo" alt="Premium Bowls" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-warm-clay transition-colors">Premium Bowls</h3>
                <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors">Shop Now</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:block md:col-span-1"></div>

          {/* Artisanal Glasses */}
          <Link href="/shop?category=Glasses" className="md:col-span-4 group cursor-pointer fade-in-up md:mt-32 block" style={{ transitionDelay: '0.1s' }}>
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-surface-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuATONt5-bAnacB-BjuXgKHnAq11bOpsU2YAQLLFidcZgtv8kyDy1xcPeHtFN0oSnpqHwUPg9kzNFj1VCRHiu-IwUjZMr-jAjeHtpSfLgkE0k36t8AwM0poWqYhu3yYJmZTsCOoKmROZn2Ng4HHqAfeBGy9rDmtRo1JSGQZ_0EFRcSzySXmYz2TYYW4LU2wCHCdAapB25WCRKo31FOYHKdFz7RD8-98aa09GwYDWbZPn9QUwcaCrryWr6gl416LGmqNQYImnCmcpPKE" alt="Artisanal Glasses" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-warm-clay transition-colors">Artisanal Glasses</h3>
                <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors">Shop Now</span>
              </div>
            </div>
          </Link>

          {/* Piggy Banks */}
          <Link href="/shop?category=Piggy+Banks" className="md:col-span-12 group cursor-pointer fade-in-up mt-12 md:mt-24 block" style={{ transitionDelay: '0.2s' }}>
            <div className="relative w-full aspect-[21/9] overflow-hidden mb-6 bg-surface-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbcyesz6Ekryxm-yn9q4XZrP2aznNUZoFnCZ5U4Gxiuq8lI2CX9AXukI3QUZLwLgS-x4KI7-0AYPq93QYM5VmBVoObwFSf-UMz2zjW0dp_r_IaYpVQ3BKkvr8bQslC8dfRMTWCeo4FiCpc3tN9IuBD3rgk431DoE6rLzfUBRtlCjTQVdjNb5vjEmB1jm7SA_3KVqEGzjdOW5cEh7Ph4UzbcKOcsvHqTqdxfsNPWG6H8hras6XG0NRGLSdhX2XtP7rxwVQg_lYnG0E" alt="Piggy Banks" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-warm-clay transition-colors">Piggy Banks</h3>
                <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors">Shop Now</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Signal / Philosophy Section */}
      <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 fade-in-up">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">Crafted by hand, with intent.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              We believe in material honesty. Every piece is meticulously shaped from sustainable, upcycled paper lugdi, honoring traditional techniques while embracing a minimalist, modern aesthetic.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 border border-warm-clay/20 px-4 py-2">
                <span className="material-symbols-outlined text-warm-clay" style={{ fontSize: '18px' }}>eco</span>
                <span className="font-label-caps text-label-caps text-on-surface">Sustainable</span>
              </div>
              <div className="flex items-center gap-2 border border-warm-clay/20 px-4 py-2">
                <span className="material-symbols-outlined text-warm-clay" style={{ fontSize: '18px' }}>handshake</span>
                <span className="font-label-caps text-label-caps text-on-surface">Hand-Crafted</span>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 w-full fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="bg-cover bg-center w-full aspect-square rounded-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqt-LAciRax00BKdyqlLi5nxQqf7k6hN0dRKycLVbJ6i3WBUqgyguJ6gGmeAmzpF3dzfEXBQtOko32Z4Q_nvAFHkFjd6xgDMdhUyX_sJBcZAn6oixrYyK3ZwKc2UuuiucX363_r8w1zGrdaLlI58TseWldn96Q7xDvX4K-Wir-YZAB7Pq9htA0_pHts17nhUs1QRpSOfZIoE47IJb5wIXE8xKLP7H2uubKVXHciN9eZRL0SGKz7oX_Ef2z1L8eVLp2fRMrmVUScaU')" }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
