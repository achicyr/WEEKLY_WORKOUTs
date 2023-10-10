import Image from 'next/image'
import {getAllProfiles} from "../lib/profile"
import Heroes,{HeroesWImageShadow} from "./components/Heroes"
import Features,{FeaturesColWIcons,FeaturesHangWIcons,FeaturesCards,FeaturesGridIcons} from "./components/Features"
import Pricings,{PricingsCTA,PricingsCompares} from "./components/Pricings"
import Sidebars,{SidebarsCollapsible} from "./components/Sidebars"
import {SimpleParallax,ReactScrollParallax} from "./components/__/parallax"
import Hello,{meta} from "../MDX/hello.mdx"


async function getData() {
  const { profiles, error } = await getAllProfiles()
  if (!profiles) {
    console.log("errrror")
    console.log(error);
    // throw new Error('Failed to fetch data')
  }

  return profiles
}


export default async function Home() {
  const profiles = await getData()
  console.log("page") 
  console.log(profiles)

  
  return (<>
    <Sidebars bem="sidebars" />
    {/* <SidebarsCollapsible bem="sidebars" /> */}
    <PricingsCompares bem="pricings" />
    <Features bem="features" />
    {/* <FeaturesCards bem="features" /> */}
    <HeroesWImageShadow />
    <Hello />
    {JSON.stringify(meta)}
    <span>{JSON.stringify(profiles)}</span>
    <ReactScrollParallax />
    <Heroes />
    <Heroes />
  </>
  )
}
