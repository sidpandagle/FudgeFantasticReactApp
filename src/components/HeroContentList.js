
import Subscription from './Subscription';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import HeroContent from './HeroContent';


function HeroContentList() {

  // code
  const numberOfSlides = 4;
  const slides = [];

  const handleSubscribed = (returnKey, isSubscribed) => {
    alert((isSubscribed ? 'Subscribed' : 'Unsubscribed') + ' with key ' + returnKey)
  }

  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <HeroContent data={i} index={i} handleSubscribed={handleSubscribed} />
      </SwiperSlide>
    )
  }

  return (
    <div className="text-white ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false, }}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides}
      </Swiper>
    </div >
  );
}

export default HeroContentList;
