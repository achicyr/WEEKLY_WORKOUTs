import Image from 'next/image'
// import styles from './page.module.css'
import Checkout from "./components/Pages/Checkout"
import Cards,{CardsB5} from "./components/Cards"
import Carousels,{CarouselB5,CarouselB5Headings,CarouselB5Figurettes} from "./components/Carousels"
import Sidebar,{SidebarsCollapsible} from "./components/Sidebars"
import Heroes,{HeroesCenterCropped,HeroesWImage,HeroesVCenter,HeroesWImageShadow} from "./components/Heroes"

export default function Home() {
  return (
    // <main className={styles.main}>
    <main>
      {/* <Sidebars /> */}
      {/* <SidebarsCollapsible /> */}
      <HeroesVCenter /> IL SEMBLE Y AVOIR UN PROBLEME AVEC 'HeroesVCenter'
      {/* <CarouselB5 /> */}
      {/* <CarouselB5Figurettes /> */}
      {/* <CardsB5 /> */}
      <Checkout />
    </main>
  )
}
