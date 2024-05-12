import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import projects from './Projects.json';
import ProjectCard from './ProjectCard';


const SwiperProfileCards = () => {

    const slideStyle = {
        display: "flex"
    }

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Mousewheel]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            mousewheel={true}
            style={{width: '100%', height: `calc(max(min(70vw, 68%), 55%)`, zIndex: 1}}
        >
            
            <SwiperSlide style={slideStyle}><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
            <SwiperSlide style={slideStyle}><ProjectCard repo={projects[0].repo} text={projects[0].text} play={false} /></SwiperSlide>
            <SwiperSlide style={slideStyle}><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
            <SwiperSlide style={slideStyle}><ProjectCard repo={projects[0].repo} text={projects[0].text} play={false} /></SwiperSlide>
            <SwiperSlide style={slideStyle}><ProjectCard repo={projects[0].repo} text={projects[0].text} play={true} /></SwiperSlide>
        </Swiper>
    );
};

export default SwiperProfileCards;