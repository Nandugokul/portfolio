import gitBlueIcon from "../../../../../../public/assets/icons/gitBlue.svg";
import eCommerceImg from "../../../../../../public/assets/works/eCommerce.jpg";
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
            <div className="flex px-5 py-3 border-2 border-myBlue border-solid w-fit mt-8">
              <h4 className="text-2xl font-bold text-myBlue">View code</h4>
              <img className="ml-4" src={gitBlueIcon} alt="View Code" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SingleWork;
