import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cls from './slider.module.scss';
import './slider.scss';

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Опции для настройки слайдера
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };

    // Обработчики для кнопок влево и вправо
    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slider-container' >
            <Slider {...sliderSettings} >
                {/* Ваши слайды здесь */}
                <div className={cls.slide}>
                    <h3 >Помощь в реализации ваших поисков торговых роботов для трейдинга.</h3>
                </div>
                <div className={cls.slide}>
                    <h3 >Возможность стать опытным трейдером с полными знаниями о торговле.</h3>
                </div>
                <div className={cls.slide}>
                    <h3 >Общение с трейдером высокого уровня, торгующим с 2008 года.</h3>
                </div>
                <div className={cls.slide}>
                    <h3 >Получение большого объема знаний и технических торговых инструментов.</h3>
                </div>
                <div className={cls.slide}>
                    <h3 >Огромная выгода на дистанции при меньших потерях, инвестициях и вложениях.</h3>
                </div>
            </Slider>

            {/* Кнопки влево и вправо */}
            <button onClick={prevSlide}></button>
            <button onClick={nextSlide}></button>
        </div>
    );
};

export default SliderComponent;
