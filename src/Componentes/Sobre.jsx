import React from "react"
import * as S from "./Style.jsx"
import Lupa from "./Imgsobre/lupa.png"
import Teste from "./Imgsobre/teste.png"
import Prototipo from "./Imgsobre/prototipo.png"
import Estrutura from "./Imgsobre/estrutura.png"
import Metodos from "./Imgsobre/metodos.png"


function Sobre() {
  return (
<>
      <S.Quemsou>Sou formada em Design de Produtos pela Universidade Federal Fluminense, onde tive meu primeiro     contato com o universo da usabilidade, que posteriormente se tornou o meu dia a dia de trabalho.
        Atuo em diversas frentes do UX, mas focada em usabilidade e experiência do usuário. Tenho experiência em realizar testes com usuários, pesquisas.
      </S.Quemsou>

      <S.Introducao>
        O que eu faço...
      </S.Introducao>

      <S.Body>

        <S.Card1>
          <S.Imgtext>
            {/* <img src={Lupa} alt="" /> */}
            <p>🔎 Pesquisas</p>
          </S.Imgtext>

          <S.Descricao>
            Pesquisas Exploratórias;
            Benchmarking.
          </S.Descricao>

        </S.Card1>

        <S.Card1>
          <S.Imgtext>
            {/* <img src={Teste} alt="" /> */}
            <p>📊 Testes</p>
          </S.Imgtext>

          <S.Descricao>
            Teste de usabilidade; Desenvolvimento e análise de teste A/B.
          </S.Descricao>

        </S.Card1>

        <S.Card1>
          <S.Imgtext>
            {/* <img src={Prototipo} alt="" /> */}
            <p>✏️ Protótipo</p>
          </S.Imgtext>

          <S.Descricao>
            Wireframes; Prototipação em baixa e alta fidelidade; Protótipos navegáveis; Projetos de UI
          </S.Descricao>

        </S.Card1>

        <S.Card1>
          <S.Imgtext>
            {/* <img src={Estrutura} alt="" /> */}
            <p>📱Estruturação</p>
          </S.Imgtext>

          <S.Descricao>
            Arquitetura de Informação; Jornada do usuário; Fluxogramas; Site Map
          </S.Descricao>

        </S.Card1>

        <S.Card1>
          <S.Imgtext>
            {/* <img src={Metodos} alt="" /> */}
            <p>💡Metodologia</p>
          </S.Imgtext>

          <S.Descricao>
            Design thinking; Design Sprint; Kanban; Metodologias ágeis; Scrum;
          </S.Descricao>

        </S.Card1>

      </S.Body>
      </>
  )
}

export default Sobre