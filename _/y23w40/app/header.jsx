import Headers,{HeadersDoubleSimple} from "./components/Headers"
import Auth from "./components/_/Auth"
import DarkModeButton from "./components/_/DarkModeButton"
// import header from "./components/Headerbars"

export default function header() {
  return <>
    <HeadersDoubleSimple />
    <DarkModeButton />
    <Auth />
  </>
}
