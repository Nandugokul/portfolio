import reduxIcon from "../../../../public/assets/icons/reduxIcon.svg";
import htmlIcon from "../../../../public/assets/icons/htmlIcon.svg";
import cssIcon from "../../../../public/assets/icons/cssIcon.svg";
import tailWindIcon from "../../../../public/assets/icons/tailwindIcon.svg";
import gaspIcon from "../../../../public/assets/icons/gsapIcon.svg";
import jsIcon from "../../../../public/assets/icons/jsIcon.svg";
import bootstrapIcon from "../../../../public/assets/icons/bootstrapIcon.svg";
import reactIcon from "../../../../public/assets/icons/reactIcon.svg";
import tsIcon from "../../../../public/assets/icons/tsIcon.svg";
import nextJsIcon from "../../../../public/assets/icons/nextJsIcon.svg";
function TechStack() {
  return (
    <>
      <section className="max-w-screen-2xl px-10  lg:px-40 m-auto mt-10 lg:mt-16">
        <div className="flex">
          <h4 className=" mr-4 md:mr-8 text-2xl md:text-[2rem] font-semibold">
            Tech stack
          </h4>
          <div className="flex-grow flex items-center overflow-hidden">
            <div className="h-[1px] w-full border-t-[1px] border-black/40"></div>
          </div>
        </div>
        <div className=" grid grid-cols-4 place-items-center gap-y-8 md:flex justify-between mt-8 md:mt-11">
          <img className="h-10 md:h-16" src={htmlIcon} alt="HTML" />
          <img className="h-10 md:h-16" src={cssIcon} alt="CSS" />
          <img className="h-10 md:h-16" src={jsIcon} alt="JavaScript" />
          <img className="h-10 md:h-16" src={tsIcon} alt="JavaScript" />

          <img className="h-10 md:h-16" src={reactIcon} alt="React" />
          <img className="h-10 md:h-16" src={nextJsIcon} alt="React" />
          <img className="h-10 md:h-16" src={reduxIcon} alt="Redux" />
          <img
            className="h-6 md:h-auto"
            src={tailWindIcon}
            alt="Tailwind Css"
          />
          <img className="h-10 md:h-auto" src={gaspIcon} alt="gsap" />
          <img className="h-8 md:h-auto" src={bootstrapIcon} alt="bootstrap" />
        </div>
      </section>
    </>
  );
}
export default TechStack;
