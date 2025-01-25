"use client"
import Footer from "@/components/Footer";
import GhanaBabe from "@/components/GhanaBabe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import SecondHero from "@/components/SecondHero";
import { Suspense } from "react";


export default function Home() {
  

  

  return (
   
    <main>
      <Navbar/>
      <Hero/>
      <Suspense>
      <GhanaBabe/>
      </Suspense>
      <SecondHero/>
      <NewArrivals/>
      <Footer/>
    </main>
    
  );
}
