import styled from "styled-components";
import { ContenidoParcial, BotonLink, Logo } from "../UI/Estilos";
import logo from '../../assets/img/logo.svg'
import { Link, useLocation } from "react-router-dom";

const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 5px ${({ theme }) => theme.primero};
    text-align: center;
    background: #000000;
    box-sizing: border-box;
    position: absolute;
    height: 94px;
    width: 100%;
    left: 0px;
    top: 0px;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid #2A7AE4;
`;

const HeaderContenido = styled(ContenidoParcial)`
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;

const HeaderLink = styled(Link)`
    display: flex;
    margin-left: 1rem;
    margin-top: .3rem;
    @media screen and (max-width: 1024px) {
        justify-content: center;
        width: 100%;
        }
`;

const BotonCabecera = styled.div`
    display: flex;
    margin-left: 1rem;
    @media screen and (max-width: 1024px) {
        top: 100%;
        display: fixed;
        position: absolute;
        width: 100%;
        background-color: #2A7AE4;
        left: 0;
        right: 0;
        margin: 0 auto;
        justify-content: center;
    }
`;

const DivBotonCabecera = styled.div`
    @media screen and (max-width: 1024px) {
        display: flex;
    }
`;

export function Cabecera() {
    const url = useLocation()

    return (
        <Header className="header">
            <HeaderContenido>
                <HeaderLink to='/'>
                    <Logo src={logo} alt="" />
                </HeaderLink>
                <DivBotonCabecera>
                    <BotonCabecera>
                        {url.pathname === '/' && <BotonLink tipo='lineas' color="#fff" to='/video'>Nuevo Video</BotonLink>}
                    </BotonCabecera>
                </DivBotonCabecera>
            </HeaderContenido>
            <div className="line-header"></div>
        </Header>
    );
}