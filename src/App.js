import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-[100vh] bg-[#131321] flex flex-col justify-between">
      <div className=" text-white px-32 py-8 flex justify-between items-center">
        <div className="text-3xl font-semibold">FudgeFantastic</div>
        <div className="flex justify-between items-center gap-10">
          <div className="text-lg">Button</div>
          <div className="text-lg">Button</div>
          <div className="text-lg">Button</div>
          <button
            className="font-semibold bg-[#FE5163] hover:bg-white hover:text-[#131321] text-lg rounded-full px-8 py-2">Button</button>
        </div>
      </div>
      <div className="text-white px-32 py-8">
        <div className="bg-[#1F1F36] rounded-lg p-16 flex items-center justify-between">
          <div className="left">
            <div className="text-5xl font-semibold mb-4">
              Subscribe to our newsletter
            </div>
            <div className="w-3/4">
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
      </div>
      <div className=" text-white px-32 py-8 flex justify-between items-center">
        <div className="">
          <div className="text-3xl font-semibold mb-2">
            FudgeFantastic
          </div>
          <div className="text-slate-500">
            Study, Chill, Sleep and Repeat…
          </div>
        </div>
        <div className="text-right flex flex-col gap-4">
          <div className="!text-[#FE5163] text-3xl">Contact</div>
          <div className="text-slate-500">You can contact us at this page Join the friendliest community on all platforms</div>
          <div className="flex gap-1 justify-end">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp"
                width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path
                  d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube"
                width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
                width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter"
                width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord"
                width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                <path
                  d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3" />
                <path d="M7 16.5c3.5 1 6.5 1 10 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
