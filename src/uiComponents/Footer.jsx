import gitIcon from "../../public/assets/icons/gitHubFooterIcon.svg";
import phoneIcon from "../../public/assets/icons/phoneIcon.svg";
import mailIcon from "../../public/assets/icons/mailIcon.svg";
import linkedInIcon from "../../public/assets/icons/linkedInFotterIcon.svg";
function Footer() {
  return (
    <>
      <section className="bg-myBlue mt-16 py-40">
        <div className="max-w-screen-2xl px-10 md:px-40 m-auto flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold">
            Say hello.
          </h1>
          <div className="space-y-2 mt-8 md:mt-10  lg:mt-0 md:ml-8">
            <a
              href="https://github.com/Nandugokul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer"
            >
              <img src={gitIcon} alt="Git hub" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white ml-4">
                Git Hub
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/nandugokulkn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white ml-4">
                LinkedIn
              </p>
            </a>
            <a
              href="mailto:nandugokul.mec@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer"
            >
              <img src={mailIcon} alt="Mail" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white ml-4">
                nandugokul.mec@gmail.com
              </p>
            </a>
            <a href="tel:+918547360968" className="flex">
              <img src={phoneIcon} alt="Phone icon" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white ml-4">
                +91 854 7360 968
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
