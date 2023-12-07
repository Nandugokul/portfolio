import gitIcon from "../../public/assets/icons/gitHubFooterIcon.svg";
import phoneIcon from "../../public/assets/icons/phoneIcon.svg";
import mailIcon from "../../public/assets/icons/mailIcon.svg";
import linkedInIcon from "../../public/assets/icons/linkedInFotterIcon.svg";
function Footer() {
  return (
    <>
      <section className="bg-myBlue mt-16 py-40">
        <div className="max-w-screen-2xl px-40 m-auto flex items-center justify-between">
          <h1 className="text-white text-8xl font-extrabold">Say hello.</h1>
          <div className="space-y-2">
            <div className="flex ">
              <img src={gitIcon} alt="Git hub" />
              <p className="text-2xl font-semibold text-white ml-4">Git Hub</p>
            </div>
            <div className="flex ">
              <img src={linkedInIcon} alt="LinkedIn" />
              <p className="text-2xl font-semibold text-white ml-4">LinkedIn</p>
            </div>
            <div className="flex ">
              <img src={mailIcon} alt="Mail" />
              <p className="text-2xl font-semibold text-white ml-4">
                nandugokul.mec@gmail.com
              </p>
            </div>
            <div className="flex ">
              <img src={phoneIcon} alt="Phone icon" />
              <p className="text-2xl font-semibold text-white ml-4">
                +91 854 7360 968
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
