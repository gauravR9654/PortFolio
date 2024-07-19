'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ data }) => {
return (
    <>
    <section className="w-full">
      <div className="h-[500px] w-full">
        <ul className="">
          <Swiper
            navigation  
            watchSlidesVisibility={true}
            pagination={{ type: 'bullets', clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="bg-white h-[500px]"
          >
            {data.map(({ id, image, tagline, title }) => (
                
              <SwiperSlide key={id}>
                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                      {title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
 
    </>
)
}
export default Slider;