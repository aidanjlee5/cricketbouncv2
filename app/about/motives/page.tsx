import Footer from '@/components/ui/Footer';

function Motives() {
    return (
        <main className = "motives-main">
            <div className="Motives">
                <h2 className="motives-title">Our Motives</h2>
                <div className="motives-images">
                {/* <Image src={motive} alt="Aim" className="motives-image" /> */}
                <a href={require('../images/BCP2024.pdf')} target="_blank" rel="noopener noreferrer">
                    {/* <Image src={bcpb} alt="BCPB" className="motives-image bcpb-image" /> */}
                </a>
                </div>
            
            </div>
      {/* <Footer/> */}
    </main>
    );
}

export default Motives;