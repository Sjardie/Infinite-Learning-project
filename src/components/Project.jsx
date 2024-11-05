import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
export default function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Wisma Merdeka',
      image: ['poster.jpg', 'perpus1.png', 'perpus2.png', 'perpus3.png'],
    },
    {
      id: 2,
      title: 'Byzquid parfume box',
      image: ['parfum.png'],
    },
    {
      id: 3,
      title: 'Szjardie logotype',
      image: ['shardi.jpg'],
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const displayProjectById = (id) => {
    const foundProject = projects.find((project) => project.id === id);
    setSelectedProject(foundProject);

    setShow(true);
  };
  const hidden = () => {
    setShow(false);
  };
  
  const Open = () => {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className=" w-[90%] h-[90%] sm:max-w-[600px]  rounded-lg bg-white     relative  ">
            <div className="w-full h-full p-5 flex items-center flex-col ">
              <div className="w-full flex justify-end ">
                <IoMdClose
                  onClick={hidden}
                  className="text-[30px] hover:cursor-pointer "
                />
              </div>
              <div className="w-full h-[90%]   max-w-[500px]  mt-2   ">
                <img
                  className="w-full h-full"
                  src={'image/' + selectedProject.image[0]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full mt-9 flex flex-col items-center text-center ">
        <h1 className="teko  text-[35px] lg:text-[45px] xl:text-[55px]">
          My Project
        </h1>
        <p className="kanit w-[90%] lg:max-w-[1000px] lg:text-[20px]">
          These are some of the college assignment project i worked on
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3  w-[95%] md:w-[92%] lg:w-[90%] xl:w-[84%] xl:max-w-[1200px]  mt-9   place-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => displayProjectById(project.id)}
              className=" hover:cursor-pointer  w-full max-w-[400px]   shadow-2xl rounded-b-xl">
              <img
                className="w-full h-[130px] lg:h-[160px]"
                src={'image/' + project.image[0]}
                alt=""
              />
              <p className="kanit py-4">{project.title}</p>
            </div>
          ))}
        </div>
        {show && <Open />}
      </div>
    </>
  );
}
