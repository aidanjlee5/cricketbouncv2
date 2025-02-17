


// import Image from "next/image";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
// import { getLayoutOrPageModule } from "next/dist/server/lib/app-dir-module";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// export default function Home() {
//   return (
//     <main className="flex flex-col min-w-full w-screen justify-center bg-divprimary">
//       <div className = "flex flex-row justify-between items-center header sticky top-0 flex flex-row bg-gradient-to-r from-divprimary to-divsecondary p-2 z-10">

//       <div className="flex flex-row items-center gap-2 ">
//         <a href="https://www.facebook.com/profile.php?id=61564215452432"><Image className = "w-10 hover:scale-105" src="/icons/icons8-facebook.svg" width={50} height={50} alt="facebook icon"/></a>
//         <a href="https://www.instagram.com/cricketbounc/"><Image className = "w-8 hover:scale-105" src="/icons/icons8-instagram.svg" width={50} height={50} alt="facebook icon"/></a>
//         <a href="https://www.youtube.com/channel/UCY_pRAyhPu98hcduzQl6fqw"><Image className = "w-10 hover:scale-105" src="/icons/icons8-youtube.svg" width={50} height={50} alt="facebook icon"/></a>
//         <a href="https://www.tiktok.com/@BOUNCE_UNCCH"><Image className = "w-8 hover:scale-105" src="/icons/tiktok-svgrepo-com.svg" width={50} height={50} alt="facebook icon"/></a>
//         <a href="https://x.com/CricketBOUNC"><Image className = "w-8 hover:scale-105" src="/icons/x-social-media-black-icon.svg" width={50} height={50} alt="facebook icon"/></a>
//       </div>

//       <Image src="/logo.png" alt="Cricket logo" width={50} height={50} />

//       {/* links */}
//       <div className ="flex gap-4">
//       <a className ="font-cricketfont">Home</a>
//       <a>About</a>
//       <a>Resources</a>
//       <a>Socials</a>
//       </div>
//      </div>

//       <div className = "flex flex-row flex-wrap justify-center gap-10 w-screen p-1 min-h-[90vh] bg-gradient-to-r from-cyan-500 to-blue-500">
//         {/*Heel Life Div*/}
//         <div className = "relative max-w-[600px] w-[90vh] bg-divtertiary p-1 rounded-lg place-content-center">
//           <Image className = "h-full items-center"src="/background.jpg" alt="Cricket logo" width={1001} height={1353}/>
//           <a href="https://heellife.unc.edu/organization/bounc">
//             <Image className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105"src="/heellife.png" alt="Cricket logo" width={2201} height={1353} />
//           </a>    
//         </div>

//          {/*Learn Cricket Div*/}
//         <div className = "relative max-w-[600px] w-[100vh] bg-divtertiary p-1 rounded-lg place-content-center ">
//           <Image className = "h-full items-center"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
//           <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vmin] text-nowrap font-bold">Learn About Cricket</p>
//         </div>

//         <div className = "relative max-w-[600px] w-[100vw] h-fit block bg-divtertiary p-1 rounded-lg place-content-center">
//           <Image className = "h-full"src="/cricketbackground.webp" alt="Cricket logo" width={2201} height={1353}/>
//           <p className = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-auto w-50% h-50% hover:scale-105 text-[3.5vmin] text-nowrap font-bold">About Us</p>
//         </div>

//         <div className = "relative max-w-[400px] w-[100vh]  max-h[1/2] min-h-[400px] bg-divtertiary p-1 rounded-lg place-content-center">
//           <Image className = "absolute h-2/5 w-2/5 top-0 left-0"src="/teams/6ixerJ0rdans.png" alt="The Teams" width={2201} height={1353}/>
//           <Image className = "absolute h-2/5 w-2/5 bottom-0 right-0"src="/teams/TarHeelTrojans.png" alt="The Teams" width={2201} height={1353}/>
//           <Image className = "absolute h-2/5 w-2/5 bottom-0 left-0"src="/teams/BlazingRamses.png" alt="The Teams" width={2201} height={1353}/>
//           <Image className = "absolute h-2/5 w-2/5  top-0 right-0"src="/teams/NobleFranklinRiders.webp" alt="The Teams" width={2201} height={1353}/>
//           <Image className = "absolute w-2/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"src="/teams/BCLTrophy.png" alt="The Teams" width={2201} height={1353}/>
//           <p className = "absolute left-0 top-1/2 w-2/5 -translate-y-1/2 text-center text-white text-4xl p-3">THE</p>
//           <p className = "absolute right-0 top-1/2 w-2/5 -translate-y-1/2  text-end text-white text-4xl p-2">TEAMS</p>
//         </div>

//       </div>

//       <div className="flex flex-row">
//         <p>About</p>
//         {/* Dropdown */}
//         <p>Council</p>
//         <p>Motives</p>
//         <p>Constitution</p>
//         <p>BCL</p>
//         {/* Dropdown */}
//         <p>teams</p>
//         <p>Matches</p>
//         <p>sign in</p>
//         <p>Video</p>    
      
//       <div className = "w-1/2 h-1/2">The Teams</div>
//       <div>Learn About the Game</div>
//       <div>Heel Life</div>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//       </footer>
//       </div>
//     </main>
//   );
// }


// app/page.tsx
"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import background from '@/public/background.webp'
import NobleFranklinRiders from '@/public/teams/NobleFranklinRiders.webp'
import BlazingRamses from '@/public/teams/BlazingRamses.webp'
import TarHeelTrojans from '@/public/teams/TarHeelTrojans.webp'
import SixerJ0rdans from '@/public/teams/6ixerJ0rdans.webp'
import BCLTrophy from '@/public/teams/BCLTrophy.webp'
import sign from '@/public/sign.webp'
import heellifepagebackground from '@/public/heellifepagebackground.webp'
import heellifeIcon from '@/public/heellife.webp'
import cricketbackground from '@/public/cricketbackground.webp'
import lIcon from '@/public/l.webp'
import fIcon from '@/public/f.webp'
import eIcon from '@/public/e.webp'
import cIcon from '@/public/c.webp'
import socials from '@/public/socials.webp'
import tiktokIcon from '@/public/icons/tiktok-svgrepo-com.svg'
import instagramIcon from '@/public/icons/icons8-instagram.svg'
import youtubeIcon from '@/public/icons/icons8-youtube.svg'
import facebookIcon from '@/public/icons/icons8-facebook.svg'
import xIcon from '@/public/icons/x-social-media-black-icon.svg'
export default function Page() {
  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<any>(null)
  const [teamIcon, setTeamIcon] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUserData(parsedUser)
        setIsLoggedIn(true)
      } catch (error) {
        console.error('Error parsing user data:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (userData?.team) {
      switch (userData.team) {
        case 'NobleFranklinRiders':
          setTeamIcon('/NobleFranklinRiders.webp')
          break
        case 'BlazingRamses':
          setTeamIcon('/BlazingRamses.webp')
          break
        case 'TarHeelTrojans':
          setTeamIcon('/TarHeelTrojans.webp')
          break
        case 'SixerJ0rdans':
          setTeamIcon('/6ixerJ0rdans.webp')
          break
        default:
          setTeamIcon(null)
          break
      }
    }
  }, [userData])

  const handleTeamsClick = (team: string) => {
    router.push(`/bcl/teams?team=${team}`)
  }

  const handleSignClick = () => {
    router.push('/bcl/signup')
  }

  const handleBCLHomeClick = () => {
    router.push('/bcl')
  }

  const handleHeelLifeClick = () => {
    window.open('https://heellife.unc.edu/organization/bounc', '_blank')
  }

  const handleLClick = () => {
    router.push('/burger-menu/rules')
  }

  const handleFClick = () => {
    window.open('https://www.icc-cricket.com/fixtures-results', '_blank')
  }

  const handleEClick = () => {
    window.open(
      'https://www.youtube.com/watch?v=95Ia6yBcnXI&list=PLHKIZtgW3Stx7FBBV1fU5EziT_2HCGciV',
      '_blank'
    )
  }

  const handleCClick = () => {
    window.open('https://www.icc-cricket.com/tournaments/t20cricketworldcup', '_blank')
  }

  return (
    <main className="p-4">
      <div className="home-container">
        <h2 className="text-2xl font-bold mb-4">Welcome to BOUNC!</h2>

        {isLoggedIn && userData ? (
          <div className="content p-4 bg-gray-100 rounded shadow-md mb-4">
            <div className="team-info flex items-center space-x-4">
              <div className="team-icon">
                {teamIcon && (
                  <Image
                    src={teamIcon}
                    alt={userData.team}
                    width={64}
                    height={64}
                    className="rounded"
                  />
                )}
              </div>
              <div className="stats">
                <p>Runs: {userData.runs}</p>
                <p>Wickets: {userData.wickets}</p>
                <p>Games: {userData.games}</p>
                <p>Sixes: {userData.sixes}</p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="background-image bg-cover bg-center mb-4"
            style={{ backgroundImage: `url('/background.webp')` }}
          >
            <div className="flex flex-wrap justify-center space-x-4 p-4">
              <Image
                src={NobleFranklinRiders}
                alt="Noble Franklin Riders"
                width={64}
                height={64}
                className="icon cursor-pointer hover:opacity-80"
                onClick={() => handleTeamsClick('T1B')}
              />
              <Image
                src={BlazingRamses}
                alt="Blazing Ramses"
                width={64}
                height={64}
                className="icon cursor-pointer hover:opacity-80"
                onClick={() => handleTeamsClick('T2B')}
              />
              <Image
                src={BCLTrophy}
                alt="BCL Trophy"
                width={64}
                height={64}
                className="icon cursor-pointer hover:opacity-80"
                onClick={handleBCLHomeClick}
              />
              <Image
                src={TarHeelTrojans}
                alt="Tar Heel Trojans"
                width={64}
                height={64}
                className="icon cursor-pointer hover:opacity-80"
                onClick={() => handleTeamsClick('T3B')}
              />
              <Image
                src={SixerJ0rdans}
                alt="6ixer Jordans"
                width={64}
                height={64}
                className="icon cursor-pointer hover:opacity-80"
                onClick={() => handleTeamsClick('T4B')}
              />
              <Image
                src={sign}
                alt="Sign"
                width={64}
                height={64}
                className="icon cursor-pointer hover:opacity-80"
                onClick={handleSignClick}
              />
            </div>
          </div>
        )}

        <div className="heel-life-container mb-4 cursor-pointer" onClick={handleHeelLifeClick}>
          <div className="relative">
            <Image
              src={heellifepagebackground}
              alt="Heel Life Page Background"
              className="w-full h-auto object-cover rounded"
            />
            <Image
              src={heellifeIcon}
              alt="Heel Life Icon"
              width={48}
              height={48}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="cricket-background-container mb-4 relative">
          <Image
            src={cricketbackground}
            alt="Cricket Background"
            className="w-full h-auto object-cover rounded"
          />
          <div className="cricket-icons absolute inset-0 flex items-center justify-center space-x-4">
            <Image
              src={lIcon}
              alt="L Icon"
              width={40}
              height={40}
              className="cursor-pointer hover:opacity-80"
              onClick={handleLClick}
            />
            <Image
              src={fIcon}
              alt="F Icon"
              width={40}
              height={40}
              className="cursor-pointer hover:opacity-80"
              onClick={handleFClick}
            />
            <Image
              src={eIcon}
              alt="E Icon"
              width={40}
              height={40}
              className="cursor-pointer hover:opacity-80"
              onClick={handleEClick}
            />
            <Image
              src={cIcon}
              alt="C Icon"
              width={40}
              height={40}
              className="cursor-pointer hover:opacity-80"
              onClick={handleCClick}
            />
          </div>
        </div>

        <div className="socials-background-container mb-4 relative">
          <Image
            src={socials}
            alt="Social Media Background"
            className="w-full h-auto object-cover rounded"
          />
          <div className="social-icons absolute inset-0 flex items-center justify-center space-x-4">
            <Image
              src={tiktokIcon}
              alt="TikTok Icon"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80"
              onClick={() => window.open('https://www.tiktok.com/@BOUNCE_UNCCH', '_blank')}
            />
            <Image
              src={instagramIcon}
              alt="Instagram Icon"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80"
              onClick={() => window.open('https://www.instagram.com/cricketbounc/', '_blank')}
            />
            <Image
              src={youtubeIcon}
              alt="YouTube Icon"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80"
              onClick={() =>
                window.open('https://www.youtube.com/channel/UCY_pRAyhPu98hcduzQl6fqw', '_blank')
              }
            />
            <Image
              src={facebookIcon}
              alt="Facebook Icon"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80"
              onClick={() =>
                window.open('https://www.facebook.com/profile.php?id=61564215452432', '_blank')
              }
            />
            <Image
              src={xIcon}
              alt="X Icon"
              width={32}
              height={32}
              className="cursor-pointer hover:opacity-80"
              onClick={() => window.open('https://x.com/CricketBOUNC', '_blank')}
            />
          </div>
        </div>

        {isLoggedIn && (
          <div className="content p-4 bg-green-100 rounded shadow-md">
            <p>Welcome back!</p>
            <p>Explore more content...</p>
          </div>
        )}
      </div>
    </main>
  )
}