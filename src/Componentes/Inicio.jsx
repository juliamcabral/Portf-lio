import React from "react"
import Behance from "./imagens/behance.svg"
import Linkedin from "./imagens/linkedin.svg"
import Gmail from "./imagens/gmail.svg"
import * as S from "./Style.jsx"


function Inicio() {
  return (
    <S.Inicio>

    <S.Section>

      <S.Titulo> Olá, eu sou a Maria Julia!</S.Titulo>
      <S.Parte0>Tudo bem?</S.Parte0>

      <S.Parte1> <a class="titulo" href="https://www.cursospm3.com.br/blog/product-designer-o-que-faz-a-pessoa-de-design-de-produto/">Sou UX/UI - Product Designer</a> e te convido a conhecer um pouco mais sobre mim e do meu trabalho.</S.Parte1>

      <S.H2>Entre em contato</S.H2>
      <S.Pinicio>Não perca a oportunidade de dizer oi! 👋</S.Pinicio>


    </S.Section>

<S.Icones>

<S.Redessociais>
  <a href="https://www.behance.net/juliamcabral" target="_blank">
    <img src={Behance} alt="" />
  </a>
</S.Redessociais>

<S.Redessociais>
  <a href="https://www.linkedin.com/in/mariajuliamcabral/" target="_blank">
    <img src={Linkedin} alt="" />
  </a>
</S.Redessociais>

<S.Redessociais>
  <a href="https://www.google.com/intl/pt-BR/gmail/about/" target="_blanck">
    <img src={Gmail} alt="" />
  </a>
</S.Redessociais>

</S.Icones>

</S.Inicio>

  )
}

export default Inicio