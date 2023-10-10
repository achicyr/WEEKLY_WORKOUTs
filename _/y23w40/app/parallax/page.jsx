'use client'
import { ParallaxProvider } from 'react-scroll-parallax';
import {Parallax} from 'react-scroll-parallax';

export default () =>    <ParallaxProvider>
    <Parallax translateX={[-20, 10]} translateY={[-20, 100]} speed={-10}>
        <img src="next.svg" />
    </Parallax>
</ParallaxProvider> 