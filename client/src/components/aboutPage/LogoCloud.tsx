import React from "react";

const LogoCloud = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h1 className="text-lg font-medium leading-6 text-black within 500 fortune companies">
            Built With
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6 pt-20">
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
