import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = styled.div`
    button::before{
        color: #EA157A;
        font-size: 42px;
    }
`;

const SliderItem = styled.div`
    text-align:center;
    width: 400px;
`;

const Photo = styled.img`
    width: 340px;
    height: 340px;
    border-radius: 50%;
    margin:30px auto;
`;

const Quote = styled.p`
    font-family: 'Roboto Mono', monospace;
    margin: 0 100px 30px;
    font-weight: 200;
    font-size: 24px;
    line-height: 27px;
`;

const PersonName = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
`;

const PersonPosition = styled.p`
    line-height:28px;
`;

const TeamSlider = () => {
    let settings = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1
                }
            }
        ]
    };
    return(
        <SliderSection {...settings}>
            <Slider>
                <SliderItem>
                    <Photo src="/src/assets/person.jpg" alt=""/>
                    <Quote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus enim sit non eu, leo euismod enim. Ornare feugiat metus convallis ut proin gravida. Ac mauris et bibendum pharetra ac rhoncus.”</Quote>
                    <PersonName>Petro Vasylykiv</PersonName>
                    <PersonPosition>(project lead)</PersonPosition>
                </SliderItem>
                <SliderItem>
                    <Photo src="/src/assets/person.jpg" alt=""/>
                    <Quote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus enim sit non eu, leo euismod enim. Ornare feugiat metus convallis ut proin gravida. Ac mauris et bibendum pharetra ac rhoncus.”</Quote>
                    <PersonName>Petro Vasylykiv</PersonName>
                    <PersonPosition>(project lead)</PersonPosition>
                </SliderItem>
                <SliderItem>
                    <Photo src="/src/assets/person.jpg" alt=""/>
                    <Quote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus enim sit non eu, leo euismod enim. Ornare feugiat metus convallis ut proin gravida. Ac mauris et bibendum pharetra ac rhoncus.”</Quote>
                    <PersonName>Petro Vasylykiv</PersonName>
                    <PersonPosition>(project lead)</PersonPosition>
                </SliderItem>
                <SliderItem>
                    <Photo src="/src/assets/person.jpg" alt=""/>
                    <Quote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus enim sit non eu, leo euismod enim. Ornare feugiat metus convallis ut proin gravida. Ac mauris et bibendum pharetra ac rhoncus.”</Quote>
                    <PersonName>Petro Vasylykiv</PersonName>
                    <PersonPosition>(project lead)</PersonPosition>
                </SliderItem>
            </Slider>
        </SliderSection>
   );
};

export default TeamSlider;
