"use client";

import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Dropdown from "@/components/ui/Dropdown";
import Image from "next/image";

const constitutionPDF = "/constitution/constitution.pdf";
const rulesPDF = "/constitution/gamerules.pdf";
const bg = "/constitution/constitution_bg.webp";

export default function Constitution() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="p-5 text-center mt-20">
        <h1 className="text-5xl text-black transition-transform duration-300 ease-in-out hover:scale-105 hover:text-yellow-300 mb-4">
          <a href={constitutionPDF} target="_blank" rel="noopener noreferrer">
            Constitution
          </a>
        </h1>
        <h1 className="text-5xl text-black transition-transform duration-300 ease-in-out hover:scale-105 hover:text-yellow-300">
          <a href={rulesPDF} target="_blank" rel="noopener noreferrer">
            BCL League Rules
          </a>
        </h1>
      </div>

      <div className="p-5 text-center">
        <Dropdown />
      </div>

      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={bg}
          alt="Constitution Background"
          fill
          className="object-contain"
        />
      </div>

      <Footer />
    </div>
  );
}
