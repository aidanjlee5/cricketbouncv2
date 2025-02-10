import Image from "next/image";
import { getLayoutOrPageModule } from "next/dist/server/lib/app-dir-module";

export default function Header(){
  return (
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
      <a href="./about/council">About</a>
      <a>Resources</a>
      <a>Socials</a>
      </div>
     </div>)
}