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
    <main className="flex flex-col min-w-full w-screen">
      <div className = "header">
      <Image src="/logo.png" alt="Cricket logo" width={50} height={50} />
      </div>

      <div className = "flex flex-row flex-wrap justify-center gap-10 w-screen">
        {/*Heel Life Div*/}
        <div className = "relative max-w-[500px] w-[90vh] bg-divprimary p-2 rounded-lg place-content-center">
          <Image className = "h-full items-center"src="/background.jpg" alt="Cricket logo" width={1001} height={1353}/>
          <a href="https://heellife.unc.edu/organization/bounc">
            <Image className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105"src="/heellife.png" alt="Cricket logo" width={2201} height={1353} />
          </a>    
        </div>

         {/*Learn Cricket Div*/}
        <div className = "relative max-w-[500px] w-[100vh] bg-divprimary p-2 rounded-lg place-content-center">
          <Image className = "h-full items-center"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vw] text-nowrap font-bold">Learn About Cricket</p>
        </div>

        <div className = "relative max-w-[500px] w-[100vh] bg-divprimary p-2 rounded-lg place-content-center">
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
