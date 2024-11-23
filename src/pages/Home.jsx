const Home = () => {
  return (
    <section className="h-screen flex justify-start items-start w-full pl-[4%]  z-50 relative md:items-center">
      <article className="flex flex-col justify-start items-start  gap-3  lg:w-[55%] mt-12 md:mt-0">
        <h1 className="font-title font-normal text-black text-[5rem] leading-[4rem] md:text-[8rem] md:leading-[6.2rem] 2xl:text-[14rem] 2xl:leading-[10.5rem]">
          DOT <br /> DAGER
        </h1>
        <p className="mt-3 font-title font-medium text-stone-600 md:mt-3 text-balance md:pl-35 md:text-xl md:pl-3 xl:text-xl 2xl:text-3xl 2xl:pl-6 2xl:mt-4 ">
          The fucking best programmer ever & serial shit joke teller
          <br />
        </p>
      </article>
    </section>
  );
};

export default Home;
