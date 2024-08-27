/* import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/leftButton.png";
import RightArrow from "../../assets/rightButton.png";
import styles from "./Carousel.module.css";
import SongsCard from "../SongsCard/SongsCard";

const Carousel = ({ newAlbums = [], songs = [] }) => {
  const items = newAlbums.length > 0 ? newAlbums : songs;
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        className={styles.swiper}
        slidesPerView={7}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.nextArrow}`,
          prevEl: `.${styles.prevArrow}`,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
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
 */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/leftButton.png";
import RightArrow from "../../assets/rightButton.png";
import styles from "./Carousel.module.css";
import SongsCard from "../SongsCard/SongsCard";

const Carousel = ({ newAlbums = [], songs = [] }) => {
  const items = newAlbums.length > 0 ? newAlbums : songs;
  const isSongs = songs.length > 0;

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        className={styles.swiper}
        slidesPerView={7}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.nextArrow}`,
          prevEl: `.${styles.prevArrow}`,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <SongsCard
              title={item.title}
              image={item.image}
              follows={item.follows}
              likes={item.likes}
              isSongs={isSongs}
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
