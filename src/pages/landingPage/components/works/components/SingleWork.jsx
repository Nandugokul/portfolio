import gitBlueIcon from "../../../../../../public/assets/icons/gitBlue.svg";
import eCommerceImg from "../../../../../../public/assets/works/eCommerce.jpg";
import liveDemoIcon from "../../../../../../public/assets/icons/liveDemo.svg";
import gitIconWhite from "../../../../../../public/assets/icons/gitHubFooterIcon.svg";
import liveDemoWhite from "../../../../../../public/assets/icons/liveDemoWhiteIcon.svg";
function SingleWork() {
  return (
    <>
      <section className=" md:flex mt-8 md:mt-14">
        <div className="w-full md:w-1/2 h-full">
          <img
            src={eCommerceImg}
            alt="E Commerce"
            className="max-h-[500px] w-full object-cover object-center-top drop-shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h4 className="text-[2rem] mt-6 md:mt-0 font-semibold ">
            Simple E-commerce web app
          </h4>
          <div>
            <div className="my-6 space-x-4">
              <span className="bg-[#00D8FF]/10 font-semibold text-[#00D8FF] px-5 py-2 ">
                React.js
              </span>
              <span className="bg-[#F4DA1E]/10 font-semibold text-[#F4DA1E] px-5 py-2 ]">
                Tailwind CSS
              </span>
            </div>
            <p className="font-medium tracking-wider">
              A concise eCommerce platform using React and Tailwind CSS,
              showcasing my strong proficiency in React development.
            </p>
            <div className="flex space-x-3">
              <div className="cursor-pointer flex px-5 py-3 border-2 border-myBlue border-solid w-fit mt-8 group hover:bg-myBlue transition-all duration-300">
                <h4 className="text-lg font-bold text-myBlue group-hover:text-white">
                  Live demo
                </h4>
                <img
                  className="ml-4 group-hover:hidden w-6"
                  src={liveDemoIcon}
                  alt="Live demo"
                />
                <img
                  src={liveDemoWhite}
                  alt="Live Demo"
                  className="ml-4 hidden group-hover:block w-6"
                />
              </div>
              <div className="cursor-pointer flex px-5 py-3 border-2 border-myBlue border-solid w-fit mt-8 group hover:bg-myBlue transition-all duration-300">
                <h4 className="text-lg font-bold text-myBlue group-hover:text-white">
                  View code
                </h4>
                <img
                  className="ml-4  group-hover:hidden"
                  src={gitBlueIcon}
                  alt="View Code"
                />
                <img
                  src={gitIconWhite}
                  alt="Git Hub"
                  className="ml-4 hidden group-hover:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SingleWork;
