export default function Skill() {
  return (
    <>
      <div className="w-full mt-9 text-center flex flex-col items-center">
        <h1 className="teko  text-[35px] lg:text-[45px] xl:text-[55px]">
          What i do
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 text-center w-[95%] xl:w-[85%] xl:max-w-[1270px] place-items-center ">
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/ai.jpeg" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-blue-400 rounded-full px-5 py-2 inline-block">
                  Adobe Ilustrator
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/ps.jpeg" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-orange-500 rounded-full px-5 py-2 inline-block">
                  Adobe Photoshop
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/canva.jpeg" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-blue-500 rounded-full px-5 py-2 inline-block">
                  Canva
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/figma.jpeg" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-yellow-500 rounded-full px-5 py-2 inline-block">
                  Figma
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/Pr.jpeg" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-slate-500 rounded-full px-5 py-2 inline-block">
                  Adobe Premiere Pro
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/capcut.jpeg" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-blue-600 rounded-full px-5 py-2 inline-block">
                  Capcut
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
