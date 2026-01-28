import React from 'react'
import Project from "../Componnent/Project/Project.png"
import Project1 from "../Componnent/Project/Project1.png"
import Project3 from "../Componnent/Project/Project3.png"

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Ochi",
      subtitle: "(Presentation Design Agency)",
      description: "A responsive clone of the Ochi agency website built using React.js and Tailwind CSS, focusing on clean UI, smooth animations, and modern design principles",
      image: Project,
      tags: ["#react.js", "#Tailwind CSS", "#javascript"],
      align: "left",
      link: "https://ochi-website-clone-theta.vercel.app/"
    },
    {
      id: 2,
      title: "Weather detect",
      subtitle: "(Weather detect)",
      description: "Created a WeatherDetect application using JavaScript and a public weather API to fetch and display live weather data. Implemented search functionality, error handling, and responsive design for better user experience.",
      image: Project1,
      tags: ["#html5", "#CSS3", "#Js"],
      align: "right",
      link: "https://weather-detect-seven.vercel.app/"
    },
    {
      id: 3,
      title: "SANSERA",
      subtitle: "(Clone Website)",
      description: "A responsive Sansera company website clone built using Html5, CSS3 and Js, focusing on clean UI and professional layout.",
      image: Project3,
      tags: ["#Html5", "#CSS3", "#Js"],
      align: "left",
      link: "https://sansera-engineering-website-clone.vercel.app/"
    }
  ];

  return (
    <div className='h-full py-16 bg-[#ffff] overflow-y-hidden'>
       <div className='relative flex items-center justify-center md:shrink-0'>
        <div className='flex items-center justify-center border-2 border-[#1788AE] w-[300px] text-[#1788AE] text-3xl md:text-4xl lg:text-[45px] font-medium py-2' id='latest-works'>
          Latest Works
        </div>
      </div>

      {/* Projects Container */}
      <div className=' flex items-center flex-col max-w-7xl mt-6 mx-auto space-y-32 md:space-y-40 px-4'>
        {projects.map((project) => (
          <div key={project.id} className='relative w-full'>
            <div className={`flex flex-col ${project.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
              
              {/* Project Image - Clickable */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-full lg:w-1/2 relative group cursor-pointer'
              >
                <div className='relative overflow-hidden rounded-lg '>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className='w-full h-auto transform transition-all duration-500 group-hover:scale-110'
                  />
                  
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center '>
                    <div className='text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                      <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="black" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <p className='text-md font-semibold text-black'>View Live Site</p>
                    </div>
                  </div>
                  
                  {/* Laptop Frame Effect */}
                  <div className='absolute -inset-4 bg-gray-900 rounded-lg -z-10 '></div>
                </div>
              </a>

              {/* Project Details */}
              <div className='w-full lg:w-1/2 relative flex items-center'>
                {/* Connecting Line */}
                <div className={`hidden lg:block absolute top-1/2 ${project.align === 'left' ? 'right-full' : 'left-full'} w-20 h-0.5 bg-[#1788AE]`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 ${project.align === 'left' ? 'right-0' : 'left-0'} w-3 h-3 bg-[#1788AE] rounded-full`}></div>
                </div>

                <div className='w-full'>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#6E026F] mb-2 text-center lg:text-left overflow-y-hidden'>
                    {project.title}
                  </h2>
                  <p className='text-xl md:text-2xl text-[#FF6B6B] mb-6 text-center lg:text-left'>
                    {project.subtitle}
                  </p>
                  
                  <p className='text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-center lg:text-left'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 justify-center lg:justify-start mb-6'>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300 hover:bg-gray-200 transition-colors cursor-default'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className='flex justify-center lg:justify-start overflow-y-hidden px-3'>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='inline-flex items-center gap-2 px-6 py-3 bg-[#1788AE] text-white font-semibold rounded-lg hover:bg-[#136a87] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
                    >
                      <span>View Project</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectSection