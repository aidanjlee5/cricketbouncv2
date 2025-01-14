import React from 'react';
import Image from 'next/image';
// import Footer from '../components/Footer';
const ishan_bio = "/council_bio/ij.webp";
const salman_bio = "/council_bio/sk.webp";
const rishi_bio = "/council_bio/rs.webp";

export default function Home() {
    return (
        <div className = "flex w-screen h-screen">
            <div className = "flex flex-col w-full justify-center items-center">
                    <h2>The Council</h2>
                    <p >Meet the council members running the show behind the curtains!</p>
                    
                    <div>
                        <Image src={ishan_bio} alt="Bio for Council Member Ishan" width={500} height={500}/>
                        <Image src={salman_bio} alt="Bio for Council Member Salman" width={500} height={500} />
                        <Image src={rishi_bio} alt="Bio for Council Member Rishi" width={500} height={500} />
                    </div>
            
                    <p>And you too! There is no BOUNC without our players and members.</p>
                    <p>Thank you for being here!</p>
            
                    {/* <Footer /> Add the Footer component here */}
            </div>
        </div>
    );
}