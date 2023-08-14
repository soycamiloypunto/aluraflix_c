import { CardVideo } from '../CardVideo';
import { useContext } from 'react';
import { Contexto } from '../../Contexto';
import './Slider.css'
import React from "react";
import Slider from "react-slick";


export function Carrusel({categoria_id, color}) {
    const datos = useContext(Contexto);
    const videos = datos.videos.filter((dato) => dato.categoria+'' === ''+categoria_id );
    const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <Slider {...config}
        
            // spaceBetween={10}
            // slidesPerView={1}
            // breakpoints={{
            //     768: {
            //         slidesPerView: 2,
            //         spaceBetween:0,
            //     },
            //     1024: {
            //         slidesPerView: 4,
            //         spaceBetween:350,
            //     },
            // }}
            // loop={true}
            // pagination={{
            //     clickable: true,
            //     arrows: true,
            // }}
            // navigation={true}
            // modules={[Pagination, Navigation]}
        >
            {
                videos.map((video, indice) => {
                    return (
                        <Slider key={indice} >
                            <CardVideo link={video.link_video} src={video.link_imagen} color={color} />
                        </Slider>
                    );
                })
            }
        </Slider>
    );
}