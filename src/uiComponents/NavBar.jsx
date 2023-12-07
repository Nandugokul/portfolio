function NavBar() {
  return (
    <>
      <section className="max-w-screen-2xl px-10 lg:px-40 pt-20 m-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-myBlue text-2xl font-bold">{"<"}</span>
            <span className="text-2xl font-bold text-[#303030]">ng</span>
            <span className="text-myBlue text-2xl font-bold">{"/"}</span>
            <span className="text-myBlue text-2xl font-bold">{">"}</span>
          </div>
          <button className="px-7 border-myBlue border-2 border-solid text-myBlue md:border-0 py-4 font-bold md:bg-myBlue md:text-white ">
            Contact me
          </button>
        </div>
      </section>
    </>
  );
}
export default NavBar;
