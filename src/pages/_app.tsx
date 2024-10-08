import { AppProps } from "next/app"

import { globalStyles } from "../styles/global"

import Image from 'next/image'

import { Container, Header } from "../styles/pages/app";

import logoImg from '../assets/logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const { src, alt, width, height } = logoImg

  return (
    <Container>
      <Header>
        <Image 
          src={ src } 
          height={ height } 
          width={ width } 
          alt={ alt } 
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
