import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import HeroBanner from "../assets/images/herobanner.png"

const Home: React.FC = () => {
  return (
    <section className="relative flex items-center w-full bg-white">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  FinVisor
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  We believe that financial knowledge is power. Our platform is
                  not just for experts or professionals; it's for everyone.
                  Whether you're a seasoned investor or a financial novice, our
                  goal is to empower you to take control of your financial
                  decisions.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <Link to="/signin">
                    <button className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                      Get started
                    </button>
                  </Link>
                  <Link to="#">
                    <p className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                      Learn more &nbsp; →
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img
                src={HeroBanner}
                alt="hero"
                width={500}
                height={500}
                className="w-full h-full mx-auto bg-black lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
