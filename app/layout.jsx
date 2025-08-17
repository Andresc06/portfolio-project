import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio Andres Contreras",
  keywords: "Portfolio, Andres Contreras, Software Developer, Web Development",
  authors: [{ name: "Andres Contreras", url: "https://github.com/andresc06" }],
  creator: "Andres Contreras",
  description: "A personal portfolio showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairsTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
