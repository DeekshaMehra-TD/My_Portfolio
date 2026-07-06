import { motion } from 'framer-motion';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const carouselCss = `
  .picnic-swiper {
    width: 100%;
    height: 520px;
    padding-bottom: 52px !important;
  }
  .picnic-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
  }
  .picnic-swiper .swiper-pagination-bullet {
    background-color: #6478A5 !important;
    opacity: 0.4;
  }
  .picnic-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.3);
  }
`;

export const PicnicCarousel = ({ images }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: 0.2 }}
    style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}
  >
    <style>{carouselCss}</style>
    <Swiper
      spaceBetween={0}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      effect="creative"
      grabCursor
      slidesPerView="auto"
      centeredSlides
      loop
      pagination={{ clickable: true }}
      className="picnic-swiper"
      creativeEffect={{
        prev: { shadow: true, translate: [0, 0, -400] },
        next: { translate: ['100%', 0, 0] },
      }}
      modules={[EffectCreative, Pagination, Autoplay]}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            className="picnic-slide-img"
            src={img.src}
            alt={img.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);
