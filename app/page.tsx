"use client"
import Footer from "@/components/Footer";
import GhanaBabe from "@/components/GhanaBabe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import SecondHero from "@/components/SecondHero";
import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";


export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    
    if (searchParams.size) {
      localStorage.clear();
      console.log('localStorage cleared');

      window.location.href = "/";
    }
  }, [searchParams]);

  return (
    <main>
      <Navbar/>
      <Hero/>
      <GhanaBabe/>
      <SecondHero/>
      <NewArrivals/>
      <Footer/>
    </main>
  );
}
