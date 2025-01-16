import React from 'react';
import Image from 'next/image';
import Footer from '@/components/ui/footer';
const ishan_bio = "/council_bio/ij.webp";
const salman_bio = "/council_bio/sk.webp";
const rishi_bio = "/council_bio/rs.webp";

export default function Council() {
    return (
        <div className = "flex w-screen">
            <div className = "flex flex-col w-full justify-center items-center">
                    <h2>The Council</h2>
                    <p >Meet the council members running the show behind the curtains!</p>
                    
                    <div>
                        <img src={ishan_bio} className="w-full" alt="Bio for Council Member Ishan"/>
                        <img src={salman_bio} alt="Bio for Council Member Salman" />
                        <img src={rishi_bio} alt="Bio for Council Member Rishi"/>
                    </div>
            
                    <p>And you too! There is no BOUNC without our players and members.</p>
                    <p>Thank you for being here!</p>
            
                    <Footer />
            </div>
        </div>
    );
}