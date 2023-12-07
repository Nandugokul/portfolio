import reduxIcon from "../../../../public/assets/icons/reduxIcon.svg";
import htmlIcon from "../../../../public/assets/icons/htmlIcon.svg";
import cssIcon from "../../../../public/assets/icons/cssIcon.svg";
import tailWindIcon from "../../../../public/assets/icons/tailwindIcon.svg";
import gaspIcon from "../../../../public/assets/icons/gsapIcon.svg";
import jsIcon from "../../../../public/assets/icons/jsIcon.svg";
import bootstrapIcon from "../../../../public/assets/icons/bootstrapIcon.svg";
import reactIcon from "../../../../public/assets/icons/reactIcon.svg";
function TechStack() {
  return (
    <>
      <section className="max-w-screen-2xl px-40 m-auto mt-16">
        <div className="flex">
          <h4 className="mr-8 text-[2rem] font-semibold">Tech stack</h4>
          <div className="flex-grow flex items-center overflow-hidden">
            <div className="h-[1px] w-full border-t-[1px] border-black"></div>
          </div>
        </div>
        <div className="flex justify-between mt-11">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={reactIcon} alt="React" />
          <img src={reduxIcon} alt="Redux" />
          <img src={tailWindIcon} alt="Tailwind Css" />
          <img src={gaspIcon} alt="gsap" />
          <img src={bootstrapIcon} alt="bootstrap" />
        </div>
      </section>
    </>
  );
}
export default TechStack;
