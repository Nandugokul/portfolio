function NavBar() {
  const handleScrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="max-w-screen-2xl px-10 lg:px-40 pt-10 lg:pt-20 m-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-myBlue text-2xl font-bold">{"<"}</span>
            <span className="text-2xl font-bold text-[#303030]">ng</span>
            <span className="md:text-myBlue text-2xl font-bold">{"/"}</span>
            <span className="text-myBlue text-2xl font-bold">{">"}</span>
          </div>
          <button
            onClick={handleScrollToFooter}
            className="px-5 py-3 md:px-7 border-myBlue border-2 border-solid text-myBlue md:border-0 md:py-4 font-bold md:bg-myBlue md:text-white "
          >
            Contact me
          </button>
        </div>
      </section>
    </>
  );
}
export default NavBar;
