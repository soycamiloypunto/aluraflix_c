import styled from "styled-components";
import { ContenidoParcial } from "../UI/Estilos";
import imagen from "../../Aluraflix.png"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';


const Footer = styled.footer`
    background-color: ${({ theme }) => theme.oscuro};
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme.primero};
    /* @media screen and (max-width: 1024px) {
        font-size: 20px;
    } */
`;
const LinkExterno = styled.a`
    text-decoration: none;
    font-weight: 700;
    font-family: roboto;
    color: white;
`;


const FooterContenido = styled(ContenidoParcial)`
    text-align: center;
    color: ${({ theme }) => theme.texto};
`;

const FooterDiv = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    
`;

const ContenedorFoto = styled.div`
    width: 100%;
`;

const ImagenLogo = styled.img`
    width: 10%;
    @media screen and (max-width: 1024px) {
        width: 20%;
    }
`;

const ContenedorTextoFooter = styled.div`
    width: 100%;
    font-family: roboto;
    font-size: 24px;
    @media screen and (max-width: 1024px) {
        font-size: 14px;
    }
`;

export function PieDePagina() {
    return (
        <Footer>
            <FooterContenido>
                <FooterDiv>
                    <ContenedorFoto>
                        <ImagenLogo src={ imagen } alt="Logo Aluraflix" />
                    </ContenedorFoto>
                    <ContenedorTextoFooter>
                    Desarrollado por <LinkExterno href="https://soycamiloypunto.github.io/Portafolio/" target="__blank">Cristian Camilo Tabares Villanueva <FavoriteBorderOutlinedIcon sx={{ color: 'yellow' }}/></LinkExterno>
                    </ContenedorTextoFooter>
                </FooterDiv>
            </FooterContenido>
        </Footer>
    );
}