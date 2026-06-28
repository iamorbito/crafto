import React from 'react';
import Link from 'next/link';

export default function OurStory() {
  return (
    <main className="flex-grow pt-[100px] md:pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      
      {/* Hero Section */}
      <section className="mb-24 md:mb-32 text-center max-w-4xl mx-auto fade-in-up">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-8">A Return to Material Honesty</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Crafto was born from a desire to step back from the noise of mass production. 
          We believe in creating artifacts that ground your space, crafted slowly and with deliberate intent.
        </p>
      </section>

      {/* Section 1: The Founder */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
        <div className="order-2 md:order-1 fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6">The Artisan Behind the Craft</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            Founder Rakshit Bhardwaj began his journey in a small, sunlit studio with a simple question: 
            <em> How can we bring the raw, untouched beauty of nature indoors?</em>
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Disillusioned by the perfection of machine-made decor, Rakshit turned to ancient paper pulp 
            techniques (Lugdi) and raw clay. He spent years mastering the delicate balance between 
            durability and organic texture, eventually founding Crafto to share his vision of wabi-sabi elegance.
          </p>
        </div>
        <div className="order-1 md:order-2 fade-in-up">
          <div className="w-full aspect-[4/5] md:aspect-square bg-surface-container-low overflow-hidden">
            <img src="/founder.png" alt="Founder Rakshit Bhardwaj working in his studio" className="w-full h-full object-cover grayscale-[10%]" />
          </div>
        </div>
      </section>

      {/* Section 2: The Studio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
        <div className="fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="w-full aspect-[4/5] md:aspect-square bg-surface-container-low overflow-hidden">
            <img src="/studio.png" alt="The Crafto Studio workspace" className="w-full h-full object-cover grayscale-[10%]" />
          </div>
        </div>
        <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6">The Slow Process</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            Our studio operates at the speed of nature. Every single product begins as recycled paper or raw earth, 
            which is then soaked, blended, and hand-molded over several days. 
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We do not use molds that enforce identical shapes. Instead, the climate, the humidity of the room, 
            and the pressure of the artisan's hands dictate the final form. This means your Crafto artifact is 
            entirely unique—bearing the literal fingerprints of its creation.
          </p>
        </div>
      </section>

      {/* Section 3: The Artifacts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1 fade-in-up" style={{ transitionDelay: '0.2s' }}>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6">Designed for the Modern Space</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
            Whether it's a rustic bowl catching the morning light or a minimalist paper glass, 
            our artifacts are designed to be tactile. They invite you to touch them, to feel the textured surface, 
            and to appreciate the beauty of imperfection.
          </p>
          <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 mt-4 bg-charcoal text-off-white font-label-caps text-label-caps hover:bg-warm-clay transition-colors duration-300">
            View The Collection
          </Link>
        </div>
        <div className="order-1 md:order-2 fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="w-full aspect-[4/5] md:aspect-square bg-surface-container-low overflow-hidden">
            <img src="/product_photos/Bowl1.jpeg" alt="A beautifully textured Crafto bowl" className="w-full h-full object-cover grayscale-[10%]" />
          </div>
        </div>
      </section>

    </main>
  );
}
