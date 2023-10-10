import Auth from "./components/auth"
import HeaderNavbar from "./components/HeaderNavbar"
import HeaderCarousel from "./components/HeaderCarousel"
import DarkModeButton from "./components/DarkModeButton"

export default () => {
  
  return <header id="slider-area">
    <HeaderNavbar />
    <HeaderCarousel />
    <Auth />
    <DarkModeButton />
    

  </header>
}
