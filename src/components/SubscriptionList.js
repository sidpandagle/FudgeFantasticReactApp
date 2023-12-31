
import Subscription from './Subscription';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SubscriptionList() {

  // code
  const numberOfSlides = 4;
  const slides = [];

  const handleSubscribed = (returnKey, isSubscribed) => {
    alert((isSubscribed ? 'Subscribed' : 'Unsubscribed') + ' with key ' + returnKey)
  }

  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <Subscription data={i} handleSubscribed={handleSubscribed} />
      </SwiperSlide>
    )
  }

  return (
    <div className="px-4 py-8 text-white md:px-32 md:py-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default SubscriptionList;
