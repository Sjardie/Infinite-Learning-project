import { TypeAnimation } from 'react-type-animation';
export default function About() {
  return (
    <>
      <div className="w-full flex items-center flex-col lg:flex-row lg:justify-around xl:justify-evenly gap-3">
        <div className="w-[93%] lg:w-[44%] lg:order-2 max-w-[300px] h-[300px] lg:max-w-[400px] lg:h-[500px]  bg-cover ">
          <img className="w-full h-full" src="image/dzikri_pict.png" alt="" />
        </div>
        <div className="w-[93%] max-w-[600px] lg:w-[44%] kanit lg:order-1">
          <div>
            <h1 className="text-[18px] lg:text-[22px] ">HI,I'M DZIKRI</h1>
          </div>
          <div>
            <p className=" text-[30px] lg:text-[38px] font-bold">
              I'm a Graphic Designer
            </p>
          </div>
          <div>
            <p className="lg:text-[18px]">
              My full name is Syardi Dzikri Rahmawan, I am a young student who
              is studying in the field of Communication Science of Merdeka
              Malang. I was born on March 26, 2004, and was pursuing my dream of
              becoming a professional graphic designer.
            </p>
          </div>
          <div className="mt-7">
            <a
              href=""
              className="border text-[13px] lg:text-[16px] border-gray-500 rounded-md py-2 px-5">
              VIEW MY PROJECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
