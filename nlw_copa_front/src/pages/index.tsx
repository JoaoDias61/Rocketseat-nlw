
// JSX - JavaScript + XML (HTML)
// TSX - TypeScript + JSX

// interface HomeProps {
//   count: number;
// }

import Image from "next/image"
import logoImg from "../assets/logo.svg"
import appPreviewImg from "../assets/nlw_copa_preview.png"

export default function Home() {

  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW_copa" />
        <h1>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
      </main>
      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo um preview da aplicação nlw"
        quality={100}
      />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:2222/pools/count")
//   const data = await response.json()

//   return {
//     props: {
//       count: data.pools
//     }
//   }
// }
