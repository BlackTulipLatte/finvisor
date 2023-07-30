import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="w-full mx-auto text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
              <div className="flex flex-col m-auto md:order-first">
                <div className="max-w-xl">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      FinVisor is...
                    </p>
                  </div>
                </div>
                <div className="mt-6 lg:max-w-7xl">
                  <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:gap-6">
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Developer experience
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Designers go-to app
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Easy onboarding
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Customer support
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <img
                  className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto"
                  alt="hero"
                  src="https://d33wubrfki0l68.cloudfront.net/5c3717929ffba80beaa3af41a006cea525c8d504/83e1f/images/placeholders/square3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
