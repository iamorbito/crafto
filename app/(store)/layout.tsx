import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import CartSlideOver from "@/components/CartSlideOver";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      <CartSlideOver />
      {children}
      <Footer />
    </>
  );
}
