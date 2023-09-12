import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Subscription from './Subscription';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return (
    <div className="min-h-[100vh] bg-[#131321] flex flex-col justify-between">
      <div className="flex flex-col items-center justify-between py-2 text-white md:px-32 md:py-8 md:flex-row">
        <div className="py-10 text-3xl font-semibold md:py-0">FudgeFantastic</div>
        <div className="flex flex-col items-center justify-between gap-6 md:gap-10 md:flex-row">
          <div className="text-lg">Button</div>
          <div className="text-lg">Button</div>
          <div className="text-lg">Button</div>
          <button
            className="font-semibold bg-[#FE5163] hover:bg-white hover:text-[#131321] text-lg rounded-full px-8 py-2">Button</button>
        </div>
      </div>
      <div className="px-4 py-8 text-white pt -8 md:px-32 md:py-8">

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Subscription></Subscription>
          </SwiperSlide>
          <SwiperSlide>
            <Subscription></Subscription>
          </SwiperSlide>
          <SwiperSlide>
            <Subscription></Subscription>
          </SwiperSlide>
          <SwiperSlide>
            <Subscription></Subscription>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
