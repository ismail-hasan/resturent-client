import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// image section 
import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"


const Catagory = () => {
    return (
        <div className='my-10'>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                   
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-center text-3xl -mt-20'>BANANA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-center text-3xl -mt-20'>BANANA</h1>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-center text-3xl -mt-20'>BANANA</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                 
                    <h1 className='text-center text-3xl -mt-20'>BANANA</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Catagory;