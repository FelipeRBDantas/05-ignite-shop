import { AppProps } from "next/app"

import { globalStyles } from "../styles/global"

import { Container, Header } from "../styles/pages";

import logoImg from '../assets/logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const { src, alt, width, height } = logoImg

  return (
    <Container>
      <Header>
        <img 
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
