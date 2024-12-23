import NavBar from "@/components/navBar/NavBar";
import "./globals.css"
import type { Metadata } from "next";
import Footer from "@/components/footer/fotter";



export const metadata: Metadata = {
  title: "Christian Rugna",
  description: "Generated by Christian Rugna",
  icons: "LogoPortfolio.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen flex flex-col">
        <header className="fixed top-0 w-full z-10">
          <NavBar />
        </header>
        <main className="pt-14 sm:pt-16 md:pt-20 flex-1">
          {/* Componente AboutMe ajustado para pantallas más pequeñas */}

          {/* El contenido hijo también será responsivo */}
          <div className="px-4 sm:px-6 md:px-8">{children}</div>
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
