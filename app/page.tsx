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
    <main className="flex flex-col min-w-full">
      <header>The Header</header>
      <div className="flex flex-row">
        <Image src="/logo.png" alt="Cricket logo" width={200} height={200} />
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
        <p></p>    
      
      <div className = "w-1/2 h-1/2">The Teams</div>
      <div>Learn About the Game</div>
      <div>Heel Life</div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
      </div>
    </main>
  );
}
