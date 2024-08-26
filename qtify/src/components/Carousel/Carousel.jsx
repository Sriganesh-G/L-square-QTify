import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper's Navigation component styles
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/leftButton.png"; // Adjust path as necessary
import RightArrow from "../../assets/rightButton.png";
import styles from "./Carousel.module.css";
import SongsCard from "../SongsCard/SongsCard";

const Carousel = ({ newAlbums = [] }) => {
  //  const { title, image, follows } = newAlbums;
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        className={styles.singleCard}
        slidesPerView={7}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.nextArrow}`,
          prevEl: `.${styles.prevArrow}`,
        }}
      >
        {newAlbums.map((item) => (
          <SwiperSlide className={styles.singleCard} key={item.id}>
            <SongsCard
              title={item.title}
              image={item.image}
              follows={item.follows}
            />
          </SwiperSlide>
        ))}
        <div className={styles.prevArrow}>
          <img src={RightArrow} alt="Previous" />
        </div>
        <div className={styles.nextArrow}>
          <img src={LeftArrow} alt="Next" />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
