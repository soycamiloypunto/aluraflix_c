import { Imagen } from "../UI/Estilos";
import styled from "styled-components";

const CardVideoLink = styled.a`
    position: relative;
`;

const CarruselImagen = styled(Imagen)`
    border: 4px solid ${({color}) => color };
    border-radius: 4px;
    /* box-sizing: border-box; */
    width: 432px;
    height: auto;
    margin-left: 1rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 1024px) {
        width: 80vw;
    }
    /* @media screen and (min-width: 800px) and (max-width: 1024px) {
        width: 40vw;
    } */
`;

export function CardVideo({link, src, color}) {
    return (
            <CardVideoLink href={link} target="__blank" >
            <CarruselImagen src={src} color={color} ></CarruselImagen>
            </CardVideoLink>

    );    
}