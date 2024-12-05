import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules'
import slideimages1 from "../assets/projects/project-8.png"
import slideimages2 from "../assets/projects/project-2.jpg"
import slideimages3 from "../assets/projects/project-3.jpg"
import slideimages4 from "../assets/projects/project-4.jpg"
import slideimages5 from "../assets/projects/project-5.png"
import slideimages6 from "../assets/projects/project-6.png"
import slideimages7 from "../assets/projects/project-7.jpg"

const Projects = () => {
  return (
    <div className="container">
      <h1 className="my-20 text-center text-3xl font-semibold"> Projects </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slideimages1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimages2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimages3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimages4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimages5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimages6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimages7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Projects