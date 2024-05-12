import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import projects from './Projects.json';
import ProjectCard from './ProjectCard';


const SwiperProfileCards = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Mousewheel]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            mousewheel={true}
            style={{width: '100%', height: '55%', translate: "0% 5%", zIndex: 1}}
        >
            
            <SwiperSlide><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
            <SwiperSlide><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
            <SwiperSlide><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
            <SwiperSlide><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
            <SwiperSlide><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
        </Swiper>
    );
};

export default SwiperProfileCards;