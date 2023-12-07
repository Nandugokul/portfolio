import gitIcon from "../../../../public/assets/icons/gitIcon.svg";
import linkedInIcon from "../../../../public/assets/icons/linkedInIcon.svg";
import bitmoJiIcon from "../../../../public/assets/bitmoji/bitmoJi.svg";

function Hero() {
  return (
    <>
      <section className="max-w-screen-2xl px-10 m-auto lg:px-40 sm:flex mt-10 md:mt-20 h-auto">
        <div className="w-full sm:w-1/2 flex justify-center sm:order-2 overflow-x-hidden">
          <img src={bitmoJiIcon} alt="Image" className=" w-52 md:w-96 " />
        </div>
        <div className=" w-full md:w-1/2">
          <p className=" text-base md:text-2xl font-medium mb-4">
            👋Hi there, I{"'"}m <span className="font-bold">Nandugokul</span>
          </p>
          <p className="text-4xl md:text-6xl font-semibold">
            I am a
            <span className="text-myBlue text-4xl md:text-6xl  font-semibold">
              {" "}
              frontend
            </span>
          </p>
          <p className="text-4xl md:text-6xl font-semibold">developer</p>
          <div className="flex my-6 md:my-12">
            <img src={gitIcon} alt="git hub" className="mr-7 w-11" />
            <img className="w-11" src={linkedInIcon} alt="LinkedIn" />
          </div>
          <a
            href="../../../../public/resume/Nandugokul_MEC_Resume.pdf"
            target="_blank"
            className="text-white bg-myBlue px-5 py-4 font-bold inline-block"
          >
            View resume
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
