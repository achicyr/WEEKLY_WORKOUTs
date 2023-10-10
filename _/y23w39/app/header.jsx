'use client'
import { useState, useEffect, useRef, useContext } from 'react'
// import GlobalContext from "./globalContext"
// import { styled } from 'styled-components'
import Headerbars from "./components/Headerbars"
import Headers,{HeadersDoubleSimple,HeadersDoubleIcons,HeadersGrid,HeadersNth} from "./components/Headers"

// const headerStyled = styled.section`
// `

// export default () => <Headerbars bem="header" expand="lg" align="center fixed" />
export default () => <HeadersDoubleIcons  />