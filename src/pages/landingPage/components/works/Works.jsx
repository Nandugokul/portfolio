import SingleWork from "./components/SingleWork";

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
        <SingleWork />
      </section>
    </>
  );
}
export default Works;
