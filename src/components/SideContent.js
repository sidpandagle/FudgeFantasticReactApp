import React from 'react';
import bg3 from '../assets/bg3.png';

function SideContent() {
  return (
    <div className="pt-20 pb-10 text-white ">
      <div className='flex items-center h-full px-4 pb-8 md:px-32 md:pb-1'>
        <div className='flex flex-col justify-center gap-6 '>
          <div className="text-6xl font-bold text-center md:text-left">
            Lorem ipsum dolor
          </div>
          <div className="pb-4 text-xl text-center md:w-2/3 md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio assumenda nulla esse nihil dolor consectetur, perspiciatis consequatur quaerat ipsum corporis architecto quae, mollitia reiciendis.
          </div>
          <div className='text-center md:text-left'>
            <button className="font-semibold w-[200px] bg-[#FE5163] hover:bg-white hover:text-[#131321] text-lg rounded-full px-8 py-2">Button</button>
          </div>
        </div>
        <img src={bg3} className='hidden rounded-lg h-96 cover md:block' alt="backg" />
      </div>
    </div>
  );
}


export default SideContent;
