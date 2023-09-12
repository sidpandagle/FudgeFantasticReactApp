function Subscription() {
    return (

        <div className="bg-[#1F1F36] rounded-lg p-14 md:p-16 flex-col  gap-10 text-center md:text-left md:flex-row md:gap-0 flex items-center justify-between">
            <div className="left">
                <div className="mb-4 mb-10 text-4xl font-semibold md:text-5xl md:mb-0">
                    Subscribe to our newsletter
                </div>
                <div className="md:w-3/4">
                    Subscribe to our newsletter to be the first to hear about important announcements, exciting
                    giveaways/contests, new compilations, and more!
                </div>
            </div>
            <div className="flex items-center gap-4">
                {/* <input placeholder="Email" className=" text-lg bg-[#131321] w-64 rounded-sm px-4 py-2"> */}
                <button
                    className="font-semibold bg-[#FE5163] hover:bg-white hover:text-[#131321] text-lg rounded-full px-8 py-2">Subscribe</button>
            </div>
        </div>
    );
}

export default Subscription;
