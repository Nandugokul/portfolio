import SingleWork from "./components/SingleWork";
import Data from "../../../../data/Data";
import ReactCurvedText from "react-curved-text";
function Works() {
  return (
    <>
      <section className="max-w-screen-2xl px-10 lg:px-40 m-auto mt-8 md:mt-16">
        <div className="flex">
          <h4 className="mr-4 md:mr-8 text-2xl md:text-[2rem] font-semibold">
            Works
          </h4>
          <div className="flex-grow flex items-center overflow-hidden">
            <div className="h-[1px] w-full border-t-[1px] border-black/40"></div>
          </div>
        </div>
        {/* {Data.map((item) => {
          return (
            <SingleWork
              key={item.demoLink}
              heading={item.heading}
              image={item.image}
              badge1={item.badge1}
              badge1Color={item.badge1Color}
              badge2={item.badge2}
              badge2Color={item.badge2Color}
              description={item.description}
              demoLink={item.demoLink}
              gitHubLink={item.gitHubLink}
            />
          );
        })} */}

        <div className="flex items-center justify-center mt-8">
          <div className="rotatingText w-fit ">
            <ReactCurvedText
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={110}
              ry={110}
              startOffset={50}
              reversed={false}
              text="New projects coming soon !!! 😎"
              textProps={{
                style: { fontSize: 24, letterSpacing: 10, fontWeight: 700 },
              }}
              textPathProps={null}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Works;
