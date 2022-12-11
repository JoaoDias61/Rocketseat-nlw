
// JSX - JavaScript + XML (HTML)
// TSX - TypeScript + JSX

// interface HomeProps {
//   count: number;
// }

import Image from "next/image"
import logoImg from "../assets/logo.svg"
import appPreviewImg from "../assets/nlw_copa_preview.png"
import usersAvatarExampleImg from "../assets/avatares.png"
import iconCheckImg from "../assets/icon-check.svg"


export default function Home() {

  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW_copa" />
        <h1>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div>
          <Image src={usersAvatarExampleImg} alt="avatar example" />
          <strong>
            <span>
              +12.592
            </span>
            pessoas já estão usando
          </strong>
          <form>
            <input type="text" required placeholder="Qual nomo do seu bolão?" />
            <button type="submit">Criar meu bolão</button>
          </form>
          <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.</p>
          <div>
            <div>
              <Image src={iconCheckImg} alt="" />
              <div>
                <span>+345</span>
                <span>Bolões criados</span>
              </div>
            </div>
            <div>
              <Image src={iconCheckImg} alt="" />
              <div>
                <span>+345</span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </div>
        </div>
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
