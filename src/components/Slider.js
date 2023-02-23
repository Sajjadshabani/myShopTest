import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider1 from "../assets/images/slider1.webp" ; 

import { Box } from '@mui/joy';

const swiperStyle = {
    marginTop: "30px" , 
    width:"80%" ,
    borderRadius : "20px" ,
} ;


export default () => {
  return (
    <Box
        display="flex" 
        justifyContent="center"
    
    >
        <Swiper style={swiperStyle} 
        // install Swiper modules
        pagination={{
            dynamicBullets: true,
          }}
        modules={[Pagination]}
        className="mySwiper"
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
            <img src={slider1} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider1} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider1} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider1} width="100%" height="100%" />
        </SwiperSlide>
        
        
        ...
        </Swiper>
    </Box>
  );
};