import ResultsDashboard from "./components/ResultsDashboard";
import { Hero } from "./components/Hero";
import { CardStack } from "./components/ScrollCards";
import { ScrollableCards } from "./components/ScrollableCards";
import { ProductFeatures } from "./components/ProductFeatures";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black relative transition-colors">
      {/* Grid Pattern Background - Orange dots with fade on left/right sides */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,107,53,0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0',
          WebkitMaskImage: `
            linear-gradient(to right, 
              transparent 0%, 
              rgba(0,0,0,0.2) 8%, 
              rgba(0,0,0,0.6) 12%, 
              rgba(0,0,0,1) 16%, 
              rgba(0,0,0,1) 84%, 
              rgba(0,0,0,0.6) 88%, 
              rgba(0,0,0,0.2) 92%, 
              transparent 100%
            ),
            radial-gradient(ellipse 120% 85% at 50% 50%, 
              rgba(0,0,0,1) 42%, 
              rgba(0,0,0,0.9) 48%, 
              rgba(0,0,0,0.6) 55%, 
              rgba(0,0,0,0.2) 70%, 
              transparent 85%
            )
          `,
          maskImage: `
            linear-gradient(to right, 
              transparent 0%, 
              rgba(0,0,0,0.2) 8%, 
              rgba(0,0,0,0.6) 12%, 
              rgba(0,0,0,1) 16%, 
              rgba(0,0,0,1) 84%, 
              rgba(0,0,0,0.6) 88%, 
              rgba(0,0,0,0.2) 92%, 
              transparent 100%
            ),
            radial-gradient(ellipse 120% 85% at 50% 50%, 
              rgba(0,0,0,1) 42%, 
              rgba(0,0,0,0.9) 48%, 
              rgba(0,0,0,0.6) 55%, 
              rgba(0,0,0,0.2) 70%, 
              transparent 85%
            )
          `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      ></div>
      
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <ResultsDashboard />

      {/* Scrollable Cards Section */}
      <ScrollableCards />

      {/* Product Features Section */}
      <ProductFeatures />
       
    </div>
  );
}
