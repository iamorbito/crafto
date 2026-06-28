'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Checkout() {
  const { items, cartTotal, updateQuantity, removeItem } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();
    if (code === 'CRAFTO10') {
      setDiscountPercent(10);
    } else if (code === 'CRAFTO50') {
      setDiscountPercent(50);
    } else {
      setDiscountPercent(0);
      alert('Invalid or expired discount code.');
    }
  };

  const discountAmount = cartTotal * (discountPercent / 100);
  const finalTotal = cartTotal - discountAmount;

  const handlePaid = () => {
    if (!phone) {
      alert('Please enter a WhatsApp phone number.');
      return;
    }
    
    const now = new Date();
    // format date as DD MMMM YYYY e.g. 29 June 2026
    const dateOpts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = now.toLocaleDateString('en-GB', dateOpts); // outputs "29 June 2026"
    
    // format time
    const timeOpts: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    const timeStr = now.toLocaleTimeString([], timeOpts);

    // Create bill ID: format DDMMYYYYname
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const cleanName = customerName ? customerName.replace(/[^a-zA-Z]/g, '').toLowerCase() : 'guest';
    const billId = `${day}${month}${year}${cleanName}`;

    const numItems = items.reduce((sum, item) => sum + item.quantity, 0);

    let productDescriptions = '';
    items.forEach(item => {
      productDescriptions += `• ${item.product.name} x ${item.quantity}\n  ₹${(item.product.price * item.quantity).toFixed(2)}\n`;
    });

    if (discountPercent > 0) {
      productDescriptions += `\nDiscount (${discountPercent}%): -₹${discountAmount.toFixed(2)}`;
    }

    const text = `\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e
          \ud83e\uddfe CRAFTO E-BILL
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f

Hello, ${customerName || 'Friend'}! \ud83d\udc4b

\ud83d\udcf1 Phone : ${phone}
\u2709\ufe0f Email : ${email || 'Not provided'}

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

\ud83d\uded2 ORDER SUMMARY

\ud83d\udce6 Items Purchased : ${numItems}
\ud83d\udcb0 Total Paid      : \u20b9${finalTotal.toFixed(2)}

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

\ud83d\udecd\ufe0f PRODUCTS

${productDescriptions}

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

\ud83c\udf31 ECO IMPACT

\ud83c\udf43 By choosing a digital receipt,
you helped save approximately

        \ud83c\udf0d 20g CO\u2082e

Every small step makes a difference.
Thank you for choosing a greener future. \ud83d\udc9a

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

\ud83d\udcc4 Receipt ID : #${billId}
\ud83d\udcc5 Date       : ${dateStr}
\ud83d\udd52 Time       : ${timeStr}

\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

\u2728 Thank you for shopping with Crafto!

Need any help?
Simply reply to this message.

\ud83d\udc9a Team Crafto`;

    const encodedText = encodeURIComponent(text);
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    // Use api.whatsapp.com which handles the redirect to the desktop app safely
    // and avoids the "This link couldn't be opened" error on macOS.
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-warm-clay/30 selection:text-on-background">
      {/* Minimal Header */}
      <header className="w-full px-margin-mobile md:px-margin-desktop py-8 flex justify-center items-center border-b border-warm-clay/10 bg-background sticky top-0 z-50">
        <Link className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight" href="/">Crafto</Link>
        <Link className="absolute left-margin-mobile md:left-margin-desktop flex items-center gap-2 text-on-surface-variant hover:text-warm-clay transition-colors duration-300" href="/shop">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          <span className="font-label-caps text-label-caps hidden md:inline-block">Return to Store</span>
        </Link>
      </header>
      
      {/* Main Checkout Canvas */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-gutter">
          
          {/* Left Side: Checkout Form */}
          <div className="lg:col-span-7 pr-0 lg:pr-12">
            <form className="space-y-16" onSubmit={e => e.preventDefault()}>
              <section className="space-y-8">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Stall Checkout</h2>
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="customerName">Customer Name</label>
                    <input 
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="font-body-md text-body-md text-on-surface w-full bg-transparent border-0 border-b border-charcoal focus:ring-0 focus:border-b-2 px-0 py-2 transition-all duration-200" 
                      id="customerName" placeholder="Enter name" type="text" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="whatsapp">Phone Number (WhatsApp)</label>
                    <input 
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="font-body-md text-body-md text-on-surface w-full bg-transparent border-0 border-b border-charcoal focus:ring-0 focus:border-b-2 px-0 py-2 transition-all duration-200" 
                      id="whatsapp" placeholder="Enter phone number" type="tel" 
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2" htmlFor="email">Email Address</label>
                    <input 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="font-body-md text-body-md text-on-surface w-full bg-transparent border-0 border-b border-charcoal focus:ring-0 focus:border-b-2 px-0 py-2 transition-all duration-200" 
                      id="email" placeholder="Enter email address" type="email"
                    />
                  </div>
                </div>
              </section>
              
              <section className="space-y-8 pt-8 border-t border-warm-clay/10">
                <div className="text-center space-y-6">
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant">Scan to Pay</h3>
                  <div className="mx-auto flex justify-center">
                    <img src="/payqr.jpeg" alt="QR Code for payment" className="w-64 h-64 object-contain border border-warm-clay/20 bg-white" />
                  </div>
                  <div className="py-4">
                    <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Amount Due</p>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Total: ₹{finalTotal.toFixed(2)}</h2>
                  </div>
                </div>
              </section>
              
              <div className="pt-8 flex flex-col gap-4">
                <button 
                  onClick={handlePaid}
                  className="w-full bg-warm-clay text-on-primary font-label-caps text-label-caps py-5 tracking-widest hover:bg-charcoal transition-colors duration-300 flex items-center justify-center gap-3" 
                  type="button"
                >
                  <span>PAID</span>
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Right Side: Order Summary */}
          <div className="lg:col-span-4 lg:col-start-9 relative">
            <div className="sticky top-32 bg-surface-container-low p-8 border border-warm-clay/10 flex flex-col h-[calc(100vh-200px)] max-h-[800px]">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8 border-b border-warm-clay/10 pb-4">Order Summary</h3>
              
              <div className="flex-grow overflow-y-auto pr-2 space-y-6 mb-8 scroll-smooth">
                {items.length === 0 ? (
                  <p className="font-body-md text-on-surface-variant text-center py-8">Your cart is empty.</p>
                ) : (
                  items.map(item => (
                    <div key={item.product.id} className="flex gap-4 group">
                      <div className="w-20 h-24 flex-shrink-0 relative bg-surface-variant">
                        <img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src={item.product.imageUrl} alt={item.product.name} />
                      </div>
                      <div className="flex flex-col justify-between flex-grow">
                        <div>
                          <h4 className="font-headline-md text-[14px] leading-snug text-on-surface mb-1">{item.product.name}</h4>
                          <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2">{item.product.category}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-warm-clay/20 bg-surface">
                            <button 
                              onClick={() => {
                                if (item.quantity === 1) removeItem(item.product.id);
                                else updateQuantity(item.product.id, -1);
                              }}
                              className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-warm-clay/10 transition-colors"
                            >
                              {item.quantity === 1 ? <span className="material-symbols-outlined text-[14px]">delete</span> : '-'}
                            </button>
                            <span className="w-7 text-center font-body-sm text-[12px] text-charcoal">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-warm-clay/10 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex flex-col items-end">
                            <p className="font-body-md text-body-md text-on-surface font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                            {item.product.originalPrice && (
                              <p className="font-body-sm text-[12px] text-on-surface-variant line-through">₹{(item.product.originalPrice * item.quantity).toFixed(2)}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              {/* Discount Code */}
              <div className="flex gap-4 mb-8">
                <input 
                  value={discountCode}
                  onChange={e => setDiscountCode(e.target.value)}
                  className="font-body-md text-body-md text-on-surface flex-grow bg-transparent border-0 border-b border-charcoal focus:ring-0 focus:border-b-2 px-0 py-2 transition-all duration-200 uppercase" 
                  placeholder="Have a coupon code?" 
                  type="text" 
                />
                <button 
                  onClick={applyDiscount}
                  className="bg-transparent border border-charcoal text-on-surface font-label-caps text-label-caps px-6 py-2 hover:bg-warm-clay hover:border-warm-clay hover:text-on-primary transition-all duration-300" 
                  type="button"
                >
                  Apply
                </button>
              </div>
              
              {/* Totals */}
              <div className="border-t border-warm-clay/10 pt-6 space-y-4">
                <div className="flex justify-between font-body-md text-body-md text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="text-on-surface">₹{cartTotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between font-body-md text-body-md text-warm-clay">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-end pt-4 border-t border-warm-clay/10 mt-2">
                  <span className="font-body-md text-body-lg text-on-surface">Total</span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    <span className="font-body-md text-[14px] text-on-surface-variant mr-1">INR</span>
                    ₹{finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      {/* Minimal Footer */}
      <footer className="w-full bg-surface-container-low dark:bg-surface-container-lowest border-t border-warm-clay/10 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
          <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-headline-md text-headline-md text-on-surface">Crafto</span>
            <div className="flex gap-6">
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-warm-clay transition-colors duration-300 hover:underline" href="#">Sustainability Commitment</Link>
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-warm-clay transition-colors duration-300 hover:underline" href="#">Returns</Link>
            </div>
            <p className="font-body-md text-[12px] text-on-surface-variant">© 2024 Crafto Artisanal. Crafted by hand, with intent.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
