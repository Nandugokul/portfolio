import gitIcon from "../../../../public/assets/icons/gitIcon.svg";
import linkedInIcon from "../../../../public/assets/icons/linkedInIcon.svg";
import bitmoJiIcon from "../../../../public/assets/bitmoji/bitmoJi.svg";
import resume from "../../../../public/resume/Nandugokul_React_Resume.pdf";

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
            <a
              href="https://github.com/Nandugokul"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img src={gitIcon} alt="git hub" className="mr-7 w-11" />
            </a>
            <a
              href="https://www.linkedin.com/in/nandugokulkn/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img className="w-11" src={linkedInIcon} alt="LinkedIn" />
            </a>
          </div>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
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
