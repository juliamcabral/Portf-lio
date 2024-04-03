import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function Navegacao() {
  return (
    <BrowserRouter>

      <S.Navegacao>
        <S.Lista>
          <S.Item> <Link to="/"> INÍCIO</Link> </S.Item>
          <S.Item> <Link to="/Sobre"> SOBRE </Link></S.Item>
          <S.Item> <Link to="/Projetos">PROJETOS</Link></S.Item>
        </S.Lista>
      </S.Navegacao>

      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="/Projetos" element={<Projetos/>} />

      </Routes>

    </BrowserRouter>

  )
}

export default Navegacao