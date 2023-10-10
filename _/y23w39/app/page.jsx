import Image from 'next/image'
// import styles from './page.module.css'
import Heroes,{HeroesCenterCropped,HeroesWImage,HeroesVCenter,HeroesWImageShadow} from "./components/Heroes"

export default function Home() {
  return (
    <main id="home">
      <HeroesCenterCropped />
    </main>
  )
}
