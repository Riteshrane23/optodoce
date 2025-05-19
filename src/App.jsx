import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ImageGallery } from "./components/ImageGallery";
import {Page1} from "./components/Feature";
import { Gallery } from "./components/Gallery";
import Mission from "./components/Mission";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="bg-black w-full min-h-screen relative font-sans overflow-hidden">
      <Header />
      <main className="pt-8 relative z-10">
        <HeroSection />
        <ImageGallery />
        <Page1 />
        <Gallery />
        <Mission />
        <Vision />
      </main>
    </div>
  );
}


export default App;
