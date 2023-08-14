import styled from "styled-components";
import { Carrusel } from "../Carrusel";
import { Boton, ContenidoParcial } from "../UI/Estilos";

const CategoriaGrupo = styled.section`
`;

const Contenido = styled(ContenidoParcial)`
    padding: 2rem 0;
`;

const Cabecera = styled.div`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.texto};
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const Descripcion = styled.p`
    margin-top: -8rem;
    margin-bottom: -2rem;
    font-weight: 300;
    font-size: 18px;
    @media screen and (max-width: 1024px) {
        margin: 0;
        margin-left: 1rem;
        margin-top: -3rem;
        /* top: 0; */
    }
`;

export function Categoria({categoria}) {
    const {nombre, descripcion, color, id} = categoria
    
    if(categoria.nombre === 'Front End'){
        return (
            <CategoriaGrupo>
                <Contenido>
                    <Carrusel categoria_id={id} color={color} />
                </Contenido>
            </CategoriaGrupo>
        );
    } else {
        return (
            <CategoriaGrupo>
                <Contenido>
                    <Cabecera>
                        <Boton color={color} >{nombre}</Boton>
                        <Descripcion>{descripcion}</Descripcion>
                    </Cabecera>
                    <Carrusel categoria_id={id} color={color} />
                </Contenido>
            </CategoriaGrupo>
        );
    }
}