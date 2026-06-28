import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest border-t border-warm-clay/10 w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="md:col-span-4 flex flex-col justify-between h-full">
          <Link href="/" className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-8 md:mb-0">Crafto</Link>
          <p className="font-body-md text-body-md text-on-surface-variant mt-auto">© 2024 Crafto Artisanal. Crafted by hand, with intent.</p>
        </div>
        <div className="md:col-span-8 flex flex-col md:flex-row gap-12 md:gap-24 md:justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-on-surface mb-2">Explore</h4>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-warm-clay hover:underline transition-all duration-300">Sustainability Commitment</Link>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-warm-clay hover:underline transition-all duration-300">Journal</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-on-surface mb-2">Support</h4>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-warm-clay hover:underline transition-all duration-300">Contact</Link>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-warm-clay hover:underline transition-all duration-300">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
