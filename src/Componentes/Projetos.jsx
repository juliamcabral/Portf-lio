import React from "react"
import * as S from "./Style.jsx"
import Alimentese from "./ImgProjetos/alimentese.svg"
import Gym from "./ImgProjetos/gym.svg"
import Smart from "./ImgProjetos/smart.svg"

function Projetos (){
return (
  <>

  <S.Introducao>
    MEUS TRABALHOS RECENTES
  </S.Introducao>

  
  <S.Banner>

    <a href="https://alimentese.app/" target="_blanck"> <S.Imgp src={Alimentese} alt="" /> </a>

    <a href="https://gymwp.app/" target="_blanck"> <S.Imgp src={Gym} alt="" /> </a>

    <a href="https://www.figma.com/proto/eloe31m5ZY9CSJvyfXrlBI/Teste_t%C3%A9cnico_Maria_Julia?type=design&node-id=34-8217&t=q7Y75zzntU1nU3Ws-0&scaling=scale-down&page-id=19%3A3295&starting-point-node-id=34%3A8217" target="_blanck"> <S.Imgp src={Smart} alt="" /> </a>

    </S.Banner>

  </>
)
  
}

export default Projetos
