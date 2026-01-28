import React from "react";
import Coder from "../assets/coder.svg"

const AboutMe = () => {
  const skills = [
    "#JavaScript",
    "#React Js",
    "#Html5",
    "#CSS3",
    "#Bootstrap",
    "#Tailwind Css",
    "#GSAP",
    "#Git",
    "#Git Hub",
  ];

  return (
    <div className="bg-black w-full min-h-screen text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          {/* Left side - Content */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 overflow-y-hidden" >ABOUT ME</h2>

            <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-300">
              I am a motivated and hardworking Frontend Developer with a strong
              foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS. I have
              hands-on experience through projects and an internship, where I worked
              on building responsive user interfaces and improving website
              performance. I am a quick learner, adaptable, and always eager to
              enhance my skills. I am looking for an opportunity where I can grow as
              a developer and contribute positively to the team.
            </p>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Skills</h3>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="border border-white/30 rounded-full px-4 py-2 text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-[45%] z-40 flex items-center justify-center order-1 lg:order-2">
  <img
  className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-full h-auto"
  src={Coder}
  alt="Coder Image"
/>
</div>

          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;