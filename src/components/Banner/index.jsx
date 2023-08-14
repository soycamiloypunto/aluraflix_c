import styled from "styled-components";
import banner from '../../assets/img/banner.png'
import { Boton, ContenidoParcial } from "../UI/Estilos";

const BannerDiv = styled.div`
    background-image: linear-gradient(0deg, ${({theme}) => theme.oscuro} 0%, rgba(0,0,0,0) 100%),
    url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 700px;
    margin-bottom: -6rem;
    @media screen and (max-width: 1024px) {
        height: 350px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding: 5rem 0;
    }
`;

const BannerContenido = styled(ContenidoParcial)`
    height: 300px;

    @media screen and (min-width: 1024px) {
        height: 549px;
        padding: 5rem 0;
        width: 100%;
    }
`;

const BannerDescripcion = styled.div`
    height: 333.58px;
    width: 100%;
    top: 357px;
    position: absolute;
    justify-content: end;
    align-items: center;
    color: ${({theme}) => theme.texto};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    padding: 1rem 0;
    box-sizing: border-box;
    text-align: center;
    @media screen and (min-width: 1024px) {
        width: 40%;
        text-align: left;
        align-items: flex-start;
    }
`;

const BannerTextos = styled.div`
    position: absolute;
    width: 664px;
    height: 305px;
    left: 28px;
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        left: 0;
    }
`;


const TituloBanner = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 54px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 332px;
    height: 54px;
    left: 28px;
    align-items: center;
    padding-top: 1rem;
    @media screen and (min-width: 768px) {
        /* display: initial;
        margin-bottom: 1rem; */
    }
    @media screen and (max-width: 1024px) {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        position: absolute;
        left: 0;
        font-weight: 300;
    }
`;

const BannerParrafo = styled.p`
        position: absolute;
        width: 661px;
        height: 110px;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
    @media screen and (min-width: 768px) {
        display: initial;
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

const BannerSubtitulo = styled.p`
        display: none;
        /* height: 110px;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
    @media screen and (min-width: 768px) {
        display: initial;
        margin-bottom: 1rem;
    } */
    @media screen and (max-width: 1024px) {
        position: absolute;
        font-size: 18px;
        display: block;
        top: 12.5rem;
        left: 1rem;
    }
`;

const BannerEnlace = styled.a`
    display: none;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        display: initial;
        width: calc(40% - 1rem);
        height: auto;
        align-self: flex-end;
    }
`;

const BannerImagen = styled.img`
    box-sizing: border-box;
    position: absolute;
    width: 500px;
    left: 800px;
    top: 300px;
    border: 4px solid #6BD1FF;
    border-radius: 10px;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {

    }
`;

const BannerBoton = styled(Boton)`
    text-decoration: none;
    width: 180.12px;
    height: 54px;
    width: 180.12px;
    height: 54px;
    color: #fff;
    font-size: 1.8rem;
    line-height: 34px;
    text-align: center;
    padding: .4rem 0;
    margin-left: 0;
    @media screen and (max-width: 1024px) {
        position: absolute;
        top: 18rem;
        left: 1rem;
        width: 5rem;
        height: 2rem;
        font-size: 18px;
        padding: 4px 0 0;
    }
`;

export function Banner() {

    return (
        <BannerDiv>
            <BannerContenido>
                <BannerDescripcion>
                    <BannerTextos>
                        <BannerBoton tipo='completo' color='#6BD1FF' href="#">Front End</BannerBoton>
                        <TituloBanner>Challenge React</TituloBanner>
                        <BannerParrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</BannerParrafo>
                        <BannerSubtitulo>Formación Front End de Alura LATAM</BannerSubtitulo>
                    </BannerTextos>
                </BannerDescripcion>
                <BannerEnlace href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="__blank">
                    <BannerImagen src='https://ik.imagekit.io/noj6wnuqy/AluraFLix/tr:f-webp/video.2d556f83d1075ca96dc0.png?updatedAt=1683685012733' />
                </BannerEnlace>
            </BannerContenido>
        </BannerDiv>
    );
}