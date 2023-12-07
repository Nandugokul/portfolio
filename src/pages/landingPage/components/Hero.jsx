import gitIcon from "../../../../public/assets/icons/gitIcon.svg";
import linkedInIcon from "../../../../public/assets/icons/linkedInIcon.svg";
import bitmoJiIcon from "../../../../public/assets/bitmoji/bitmoJi.svg";

function Hero() {
  return (
    <>
      <section className="max-w-screen-2xl px-10 m-auto md:px-40 md:flex mt-20">
        <div className="w-full md:w-1/2 flex justify-center md:order-2">
          <img src={bitmoJiIcon} alt="Image" className="w-96" />
        </div>
        <div className="w-1/2">
          <p className="text-2xl font-medium mb-4">
            👋Hi there, I{"'"}m <span className="font-bold">Nandugokul</span>
          </p>
          <p className="text-6xl font-semibold">
            I am a
            <span className="text-myBlue text-6xl font-semibold">
              {" "}
              frontend
            </span>
          </p>
          <p className="text-6xl font-semibold">developer</p>
          <div className="flex my-12">
            <img src={gitIcon} alt="git hub" className="mr-7" />
            <img src={linkedInIcon} alt="LinkedIn" />
          </div>
          <button className="text-white bg-myBlue px-5 py-4 font-bold">
            View resume
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
