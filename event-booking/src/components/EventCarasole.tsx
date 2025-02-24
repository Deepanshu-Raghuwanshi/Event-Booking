import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/aranxa-esteve-S5DEUg2yUVU-unsplash.jpg";
import image2 from "../assets/britt-gaiser-hSAlu33padA-unsplash.jpg";
import image3 from "../assets/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg";
import image4 from "../assets/rachel-coyne-U7HLzMO4SIY-unsplash.jpg";
import image5 from "../assets/stem-list-EVgsAbL51Rk-unsplash.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const eventImages = [image1, image2, image3, image4, image5];

const EventCarousel: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-6 z-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="rounded-lg shadow-md"
      >
        {eventImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Event ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
