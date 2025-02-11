import Image from "next/image";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
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
      <Header/>
      <div className = "flex flex-col items-center justify-center gap-10 w-screen p-1 min-h-[90vh] bg-black ">
        {/*Heel Life Div*/}
        <div className = "relative bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "h-full items-center"src="/background.jpg" alt="Cricket logo" width={1001} height={1353}/>
          <a href="https://heellife.unc.edu/organization/bounc">
            <Image className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105"src="/heellife.png" alt="Cricket logo" width={2201} height={1353} />
          </a>    
        </div>

         {/*Learn Cricket Div*/}
        <div className = "relative bg-divtertiary p-1 rounded-lg place-content-center ">
          <Image className = "h-full items-center"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vmin] text-nowrap font-bold">Learn About Cricket</p>
        </div>

        <div className = "relative block bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "h-full"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
          <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vmin] text-nowrap font-bold">About Us</p>
        </div>

        <div className = "relative max-w-full w-[100vh] aspect-square bg-divtertiary p-1 rounded-lg place-content-center">
          <Image className = "absolute h-2/5 w-2/5 top-0 left-0"src="/teams/6ixerJ0rdans.png" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute h-2/5 w-2/5 bottom-0 right-0"src="/teams/TarHeelTrojans.png" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute h-2/5 w-2/5 bottom-0 left-0"src="/teams/BlazingRamses.png" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute h-2/5 w-2/5  top-0 right-0"src="/teams/NobleFranklinRiders.webp" alt="The Teams" width={2201} height={1353}/>
          <Image className = "absolute w-2/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"src="/teams/BCLTrophy.png" alt="The Teams" width={2201} height={1353}/>
          <p className = "absolute left-0 top-1/2 w-2/5 -translate-y-1/2 text-center text-white text-4xl p-3">THE</p>
          <p className = "absolute right-0 top-1/2 w-2/5 -translate-y-1/2  text-center text-white text-4xl p-2">TEAMS</p>
        </div>

      </div>

    <Footer/>
    </main>
  );
}
