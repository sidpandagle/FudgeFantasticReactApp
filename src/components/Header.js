function Header() {
    return (
       
      <div className=" z-10 flex flex-col items-center justify-between py-8 text-white md:px-32 md:py-8 md:flex-row sticky top-0 bg-[#131321]  bg-opacity-60 backdrop-blur-sm">
      <div className="py-2 text-2xl font-semibold md:py-0">FudgeFantastic</div>
      <div className="flex flex-col items-center justify-between gap-6 md:gap-10 md:flex-row">
        <button className="text-lg hover:text-[#FE5163]">Button</button>
        <button className="text-lg hover:text-[#FE5163]">Button</button>
        <button className="text-lg hover:text-[#FE5163]">Button</button>
        <button
          className="font-semibold bg-[#FE5163] hover:bg-white hover:text-[#131321] text-lg rounded-full px-8 py-2">Button</button>
      </div>
    </div>
    );
}

export default Header;
