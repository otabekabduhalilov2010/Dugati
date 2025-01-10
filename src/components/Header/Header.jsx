import React, { useState, useRef, useEffect } from 'react';
import s from './Header.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [prevSlideImage, setPrevSlideImage] = useState('/moto-2.png'); // Начальное изображение

  const swiperRef = useRef(null);

  const slides = [
    { id: 1, title: 'DUГATI', img: '/moto-1.png', details: '215 CV, 300 km/h, NPX 25/30' },
    { id: 2, title: 'DUГATI', img: '/moto-2.png', details: '168 CV, 274 km/h, Twin Pulse' },
  ];


  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  const onInputFocus = (e) => {
    e.stopPropagation();
    setIsActive(true);
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  const updatePrevSlideImage = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const activeIndex = swiper.realIndex; // Получить индекс текущего слайда
      const prevIndex = (activeIndex - 1 + slides.length) % slides.length; // Индекс предыдущего слайда
      setPrevSlideImage(slides[prevIndex].img);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      swiper.on('slideChange', updatePrevSlideImage);
      updatePrevSlideImage(); // Обновить изображение при первом рендере
    }
  }, []);


  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <a className={s.logo} href="">DUCATI</a>

          <div className={s.menu}>
            <a href="">HOME</a>
            <a href="">CATALOGUE</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
          </div>

          <div className={`${s.search} ${isActive ? s.active : null}`} onClick={toggleSearch}>
            <img src="/search.svg" alt="" />
            <input onClick={onInputFocus} type="text" placeholder="Search..." />
          </div>
        </nav>

        <div className={s.wrap}>
          <Swiper
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className={s.card}>
                <button className={s.next} onClick={handleNext}>
                  <img src="/arrow.svg" alt="" />
                </button>

                <div className={s.box}>
                  <h1 className={s.title}>
                    DUГATI
                    <img src="/moto-1.png" alt="moto" />
                  </h1>
                  <button>Read more</button>
                </div>

                <div className={s.inner}>
                  <div>
                    <p>215 CV</p>
                  </div>
                  <div>
                    <p>300 <br /> km/h</p>
                  </div>
                  <div>
                    <p>NPX 25/30</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={s.card}>
                <button className={s.next} onClick={handleNext}>
                  <img src="/arrow.svg" alt="" />
                </button>

                <div className={s.box}>
                  <h1 className={s.title}>
                    DUГATI
                    <img src="/moto-2.png" alt="moto" />
                  </h1>
                  <button>Read more</button>
                </div>

                <div className={s.inner}>
                  <div>
                    <p>168 CV</p>
                  </div>
                  <div>
                    <p>274 <br /> km/h</p>
                  </div>
                  <div>
                    <p>Twin Pulse</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={s.after_card} onClick={handlePrev}>
          <p>Nova Diavel V4 Ducati</p>
          <img src={prevSlideImage} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
