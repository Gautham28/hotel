import Navbar from '@/components/Navbar/Navbar';
import Stats from '@/components/stats/Stats';
import Villas from '@/components/Villas/Villas';
import Offerings from '@/components/Offerings/Offerings';
import Reviews from '@/components/Reviews/Reviews';
import FAQ from '@/components/FAQ/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div 
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1758776426509-ce8772f42bbe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Navbar Component */}
        <Navbar />
        
        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-white text-6xl font-bold mb-6">
            Luxury getaways<br />
            you deserve
          </h1>
          <p className="text-white text-xl mb-8">
            Inspire Luxury Goa offers premium villa rentals in North Goa
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold">
            Explore villas
          </button>
        </div>
      </div>

      <Stats />
      <Villas />
      <Offerings />
      <Reviews />
      <FAQ />
    </main>
  );
}