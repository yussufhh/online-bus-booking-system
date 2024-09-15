import React from 'react';
import first from './images/member1.png';
import second from './images/member2.png';
import third from './images/member3.png';
import fourth from './images/member4.png';
import fifth from './images/member5.png';

const Team = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Meet the brains
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3"
              src={first}
              alt="Mr Abdifatah Ibrahim"
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">Mr Abdifatah Ibrahim</p>
            <p className="mt-1 text-base leading-tight text-gray-600">Technical Mentor</p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-8"
              src={second}
              alt="Adan Jelle"
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">Adan Jelle</p>
            <p className="mt-1 text-base leading-tight text-gray-600">Project Manager</p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-1"
              src={third}
              alt="Moon Lover"
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">Moon Lover</p>
            <p className="mt-1 text-base leading-tight text-gray-600">UI/UX Designer</p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3"
              src={fourth}
              alt="Mr Mohamed Hanif"
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">Mr Mohamed Hanif</p>
            <p className="mt-1 text-base leading-tight text-gray-600">Senior Developer</p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3"
              src={fifth}
              alt="Binti Dekz"
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">Binti Dekz</p>
            <p className="mt-1 text-base leading-tight text-gray-600">Quality Assurance (QA) Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
