import React from "react";

import desktopHero from "../assets/images/image-web-3-desktop.jpg";
import mobileHero from "../assets/images/image-web-3-mobile.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import retro from "../assets/images/image-retro-pcs.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

const PopularArticles = () => {
  return (
    <>
      <div className="container mx-auto mt-10 px-4 lg:px-0 ">
        <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row auto-rows-max gap-8">
          <div className="lg:col-span-2 col-span-1">
            <div className="grid lg:grid-cols-4 lg:grid-rows-1 gap-8">
              <div className="col-span-full">
                <img
                  src={desktopHero}
                  className="w-full hidden lg:block"
                  alt=""
                />
                <img
                  src={mobileHero}
                  className="w-full block lg:hidden"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:row-start-2 lg:row-end-[-1] placeholder:py-0 pr-2">
                <h2 className="lg:text-7xl text-4xl text-[#00001A] font-bold">
                  The Bright Future of Web 3.0?
                </h2>
              </div>

              <div className="lg:col-span-2 lg:row-start-2 lg:row-end-[-1] pb-8">
                <p className="lg:text-xl text-dark-grayish-blue lg:pb-12 pb-6 font-medium">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="text-white bg-[#F15E50] hover:bg-[#00001A] uppercase text-sm lg:text-lg lg:py-4 lg:px-6 py-3 px-5 tracking-[0.3rem] font-semibold">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 lg:p-8 p-4 bg-[#00001A]">
            <div className="row-span-1">
              <h3 className="text-[#E9AB53] lg:text-5xl text-3xl font-bold lg:pb-8 lg:pt-3 pb-8">
                New
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <a
                    href=""
                    className="text-white hover:text-[#E9AB53] lg:text-2xl text-xl font-bold"
                  >
                    Hydrogen VS Electric Cars
                  </a>
                  <a href="" className="text-[#C5C6CE] lg:text-xl text-md">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </a>
                  <span className="w-full border border-dark-grayish-blue lg:my-7 my-3"></span>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href=""
                    className="text-white hover:text-[#E9AB53] lg:text-2xl text-xl font-bold"
                  >
                    The Downsides of AI Artistry
                  </a>
                  <a href="" className="text-[#C5C6CE] lg:text-xl text-md">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </a>
                  <span className="w-full border border-dark-grayish-blue lg:my-7 my-3"></span>
                </div>
                <div className="flex flex-col gap-4 lg:pb-7 pb-2">
                  <a
                    href=""
                    className="text-white hover:text-[#E9AB53] lg:text-2xl text-xl font-bold"
                  >
                    Is VC Funding Drying Up?
                  </a>
                  <a href="" className="text-[#C5C6CE] lg:text-xl text-md">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row auto-rows-max gap-8 py-10">
          <div className="flex flex-row">
            <img src={retro} className="w-32 h-fit pr-6" alt="" />
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-300 pb-2">01</h2>
              <a className="cursor-pointer text-xl font-bold text-[#00001A] hover:text-[#F15E50] pb-2">
                Reviving Retro PCs
              </a>
              <p className="text-dark-grayish-blue font-medium">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <img src={laptop} className="w-32 h-fit pr-6" alt="" />
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-300 pb-2">02</h2>
              <a className="cursor-pointer text-xl font-bold text-[#00001A] hover:text-[#F15E50] pb-2">
                Top 10 Laptops of 2022
              </a>
              <p className="text-dark-grayish-blue font-medium">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <img src={gaming} className="w-32 h-fit pr-6" alt="" />
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-300 pb-2">03</h2>
              <a className="cursor-pointer text-xl font-bold text-[#00001A] hover:text-[#F15E50] pb-2">
                The Growth of Gaming
              </a>
              <p className="text-dark-grayish-blue font-medium">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularArticles;
