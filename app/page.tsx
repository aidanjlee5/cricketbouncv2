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

      <div className="flex flex-row items-center gap-2 ">
        <a><Image className = "w-10" src="/icons/icons8-facebook.svg" width={50} height={50} alt="facebook icon"/></a>
        <a><Image className = "w-8" src="/icons/icons8-instagram.svg" width={50} height={50} alt="facebook icon"/></a>
        <a><Image className = "w-10" src="/icons/icons8-youtube.svg" width={50} height={50} alt="facebook icon"/></a>
        <a><Image className = "w-8" src="/icons/tiktok-svgrepo-com.svg" width={50} height={50} alt="facebook icon"/></a>
        <a><Image className = "w-8" src="/icons/x-social-media-black-icon.svg" width={50} height={50} alt="facebook icon"/></a>
      </div>

      <Image src="/logo.png" alt="Cricket logo" width={50} height={50} />

      {/* links */}
      <div className ="flex gap-4">
      <a>Home</a>
      <a>About</a>
      <a>Resources</a>
      <a>Socials</a>
      </div>
     </div>

      <div className = "flex flex-row flex-wrap justify-center gap-10 w-screen p-1 min-h-[90vh] bg-gradient-to-r from-cyan-500 to-blue-500">
        {/*Heel Life Div*/}
        <div className = "relative max-w-[500px] w-[90vh] bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "h-full items-center"src="/background.jpg" alt="Cricket logo" width={1001} height={1353}/>
          <a href="https://heellife.unc.edu/organization/bounc">
            <Image className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105"src="/heellife.png" alt="Cricket logo" width={2201} height={1353} />
          </a>    
        </div>

         {/*Learn Cricket Div*/}
        <div className = "relative max-w-[500px] w-[100vh] bg-divtertiary p-1 rounded-lg place-content-center ">
          <Image className = "h-full items-center"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vw] text-nowrap font-bold">Learn About Cricket</p>
        </div>

        <div className = "relative max-w-[500px] w-[100vh] bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "h-full  "src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vw] text-nowrap font-bold">About Us</p>
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
