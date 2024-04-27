import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <Swiper className='rounded-3xl mt-6'
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            autoHeight={true}
            pagination={{ clickable: true }}
            effect="fade"
            data-aos="fade-right" data-aos-duration="3000"
        >
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/9wsV1LF/art-banner2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/303vwfD/art-banner3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/9qvwt4Y/art-banner4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="https://i.ibb.co/0tN5Fv7/art-banner1.jpg" alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;