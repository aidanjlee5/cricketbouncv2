import Image from "next/image";
import { getLayoutOrPageModule } from "next/dist/server/lib/app-dir-module";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function Home() {
  return (
    <main className="flex flex-col min-w-full w-screen justify-center bg-divprimary">
      <div className = "flex flex-row justify-between items-center header sticky top-0 flex flex-row bg-gradient-to-r from-divprimary to-divsecondary p-2 z-10">

      <div className="flex flex-row items-center gap-2 basis-1 grow">
        <a href="https://www.facebook.com/profile.php?id=61564215452432"><Image className = "w-10 hover:scale-105" src="/icons/icons8-facebook.svg" width={50} height={50} alt="facebook icon"/></a>
        <a href="https://www.instagram.com/cricketbounc/"><Image className = "w-8 hover:scale-105" src="/icons/icons8-instagram.svg" width={50} height={50} alt="facebook icon"/></a>
        <a href="https://www.youtube.com/channel/UCY_pRAyhPu98hcduzQl6fqw"><Image className = "w-10 hover:scale-105" src="/icons/icons8-youtube.svg" width={50} height={50} alt="facebook icon"/></a>
        <a href="https://www.tiktok.com/@BOUNCE_UNCCH"><Image className = "w-8 hover:scale-105" src="/icons/tiktok-svgrepo-com.svg" width={50} height={50} alt="facebook icon"/></a>
        <a href="https://x.com/CricketBOUNC"><Image className = "w-8 hover:scale-105" src="/icons/x-social-media-black-icon.svg" width={50} height={50} alt="facebook icon"/></a>
      </div>

      <Image src="/logo.png" alt="Cricket logo" width={50} height={50} />

      {/* links */}
      <div className ="flex gap-4 basis-1 grow justify-end">
      <a className ="font-cricketfont">Home</a>
      <a>About</a>
      <a>Resources</a>
      <a>Socials</a>
      </div>
     </div>

      <div className = "flex flex-row flex-wrap justify-center gap-10 w-screen p-1 min-h-[90vh] bg-gradient-to-r from-cyan-500 to-blue-500">
        {/*Heel Life Div*/}
        <div className = "relative max-w-[600px] w-[90vh] bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "h-full items-center"src="/background.jpg" alt="Cricket logo" width={1001} height={1353}/>
          <a href="https://heellife.unc.edu/organization/bounc">
            <Image className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105"src="/heellife.png" alt="Cricket logo" width={2201} height={1353} />
          </a>    
        </div>

         {/*Learn Cricket Div*/}
        <div className = "relative max-w-[600px] w-[100vh] bg-divtertiary p-1 rounded-lg place-content-center ">
          <Image className = "h-full items-center"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vmin] text-nowrap font-bold">Learn About Cricket</p>
        </div>

        <div className = "relative max-w-[600px] w-[100vw] h-fit block bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "h-full"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vmin] text-nowrap font-bold">About Us</p>
        </div>

        <div className = "relative max-w-[400px] w-[100vh]  max-h[1/2] min-h-[400px] bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "absolute h-2/5 w-2/5 top-0 left-0"src="/teams/6ixerJ0rdans.png" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute h-2/5 w-2/5 bottom-0 right-0"src="/teams/TarHeelTrojans.png" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute h-2/5 w-2/5 bottom-0 left-0"src="/teams/BlazingRamses.png" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute h-2/5 w-2/5  top-0 right-0"src="/teams/NobleFranklinRiders.webp" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute w-2/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"src="/teams/BCLTrophy.png" alt="The Teams" width={2201} height={1353}/>
          <p className = "absolute left-0 top-1/2 w-2/5 -translate-y-1/2 text-center text-white text-4xl p-3">THE</p>
          <p className = "absolute right-0 top-1/2 w-2/5 -translate-y-1/2  text-end text-white text-4xl p-2">TEAMS</p>
        </div>

      </div>

      <div className="flex flex-row">
        <p>About</p>
        {/* Dropdown */}
        <p>Council</p>
        <p>Motives</p>
        <p>Constitution</p>
        <p>BCL</p>
        {/* Dropdown */}
        <p>teams</p>
        <p>Matches</p>
        <p>sign in</p>
        <p>Video</p>    
      
      <div className = "w-1/2 h-1/2">The Teams</div>
      <div>Learn About the Game</div>
      <div>Heel Life</div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
      </div>
    </main>
  );
}
