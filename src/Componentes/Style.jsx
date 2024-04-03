import { redirect } from "react-router-dom"
import styled from "styled-components"

// style nav bar

export const Navegacao = styled.nav`
background-color:white;
height: 20vh;
`

export const Lista = styled.ul`
display: flex;
justify-content: flex-end;
height: 20vh;
align-items: center;
font-size:1.5rem;
list-style:none;
width: 50%;
margin-left:50vw;

a{
text-decoration:none;
   color: black;
   font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
}

a:hover{
color: #666161;
font-weight: 400;
}

`

export const Item = styled.li`
display: flex;
width: 20%;
justify-content:center;
margin-right:5%;
`

export const Inicio = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
//SOBRE

export const Section = styled.section`
display: flex;
flex-direction:column;
width: 70vw;
font-family: "Poppins", sans-serif;

`
export const Titulo = styled.h2`
display: flex;
font-size: 3rem;
text-decoration: none;
color:#ffffff;
background-color: #C36BF6;
width: 50vw;
`

export const Parte0 = styled.p`
display: flex;
align-items: start;
font-weight: 500;
margin-top: 5%;
`

export const Icones = styled.div`
display: flex;
width: 40vw;
justify-content: space-evenly;
align-items:center;
margin: 2%;
`

export const Redessociais = styled.div`
display: flex;
justify-content: space-between;
`

export const H2 = styled.h2`
display: flex;
justify-content: center;
margin-top: 12%;
font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.3rem;
`


export const Pinicio = styled.p`
 display: flex;
 width: 100%;
 justify-content: center;
`


export const Parte1 = styled.p`
margin-bottom: 2%;
font-weight: 400;

.titulo{
    text-decoration: none;
    font-weight: 800;
    color: black;

}

a:hover{
    color: #C36BF6;
}
`

export const Parte2 = styled.p`
margin-top: 2%;
margin-bottom: 2%;
font-weight: 400;
`

// SOBRE

export const Body = styled.body`
height: 100%;
margin: 5%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 0;

`

export const Quemsou = styled.h2`
background-color:#F5F5F5;
padding: 5%;
margin: 5%;
border-radius: 2rem;
font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
`
export const Introducao = styled.h2`
margin-top: 5%;
margin-left: 5%;
font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1%.4;
  font-weight: 700;
  color: #303030;
`

export const Card1 = styled.div`
display: flex;
flex-direction: column;
width: 26%;
border: solid #C36BF6 2.8px;
border-radius: 1rem 1rem 0 1rem;
margin-top: 5%;
margin-bottom: 5%;
padding: 2%;
font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  color: #C36BF6;

`
export const Imgtext = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
justify-content: space-between;
width: 12vw;
margin-bottom: 5%;
font-size: 1.2rem;
font-weight: 600;
`

export const Descricao = styled.p`
  width: 16vw;
font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #4C565C;

`

// PROJETOS

export const Banner = styled.section`
display: flex;
flex-direction: column;
height: 100%;
margin-left: 10%;
margin-top: 8%;
width: 80%;
align-items: center;

img {
  transition: all 0.3s ease-in-out;
}

a:hover{
opacity: 0.8;
transform: scale(0.98);
box-shadow: 0 0 0 rgba(0, 0, 0, 0.9);
border-radius: 40px;
}

`

export const Imgp = styled.img`
align-items: center ;
margin: 2%;
 `

