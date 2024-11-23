import iconCat from "/cat.png";
import iconPickle from "/pickle.png";
import iconGuitar from "/guitar.png";

const About = () => {
  return (
    <>
      <Pickles />
      <Cats />
      <Guitars />
      <Contact />
    </>
  );
};

export default About;

const Pickles = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-[120vh] relative flex justify-end items-start z-50 "
      >
        <figure className="absolute top-0 right-2 2xl:right-[5%] w-[100px] lg:w-[150px] 2xl:w-[200px] self-end">
          <img src={iconPickle} alt="icon-cat" />
        </figure>

        <article className="relative text-balance flex flex-col h-full justify-center gap-6 items-center md:items-start z-50 lg:w-[55%] xl:w-[50%] 2xl:gap-12">
          <h5 className="text-2xl font-title2 text-[#c4c4c4] font-medium text-center text-balance  md:text-start md:pr-4 xl:text-4xl  2xl:text-6xl  ">
            ¿Alguna vez un pepino te cambió la vida?
          </h5>

          <p className="font-title  flex flex-col justify-center items-center  text-center font-normal  text-base text-stone-500 max-w-[800px]  md:items-start md:justify-start md:text-start px-2 md:px-0 xl:pr-6  2xl:text-xl   ">
            Aquí exploramos las razones por las que este vegetal merece un
            altar. Desde su rol como villano número uno en los comidas de niños
            hasta su título no oficial de 'Caviar de las ensaladas', el
            pepinillo es más que un simple encurtido: es un estilo de vida.{" "}
            <button
              id="box-glass2"
              className="border-[2px] border-cyan-500 mt-3 flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:mt-4 xl:w-[260px] text-base   2xl:text-lg 2xl:mt-6 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-300  group"
            >
              Pickles Society{" "}
              <i className="bx bxs-pyramid text-cyan-500 text-3xl border-l-[2px] border-cyan-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500"></i>
            </button>
          </p>
        </article>
      </section>
    </>
  );
};
const Cats = () => {
  return (
    <>
      <section
        id="third_section"
        className="w-full h-screen relative flex justify-end items-start"
      >
        <figure className="absolute top-0 right-2 2xl:right-[5%] w-[100px] lg:w-[150px] 2xl:w-[200px] self-end">
          <img src={iconCat} alt="icon-cat" />
        </figure>

        <article className="relative text-balance flex flex-col h-full justify-center gap-6 items-center md:items-start z-50 lg:w-[55%] xl:w-[50%] 2xl:gap-12">
          <h5 className="text-2xl font-title2 text-[#c4c4c4] font-medium text-center  md:text-start md:pr-4 xl:text-4xl 2xl:text-5xl ">
            No te preocupes, están aquí para juzgarte, pero con amor.
          </h5>

          <p className="font-title  flex flex-col justify-center items-center  text-center font-normal  text-base text-stone-500 max-w-[800px]  md:items-start md:justify-start md:text-start px-2 md:px-0 xl:pr-6  2xl:text-xl  ">
            Desde posar como si entendieran el concepto de impuestos hasta
            expertos en juicios silenciosos desde la repisa, estos peluditos lo
            tienen todo. ¿Tienes un gato? Felicidades, ahora eres el empleado
            del mes... de tu gato.
            <button
              id="box-glass2"
              className="border-[2px] border-cyan-500 mt-3 flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:mt-4  xl:w-[260px] text-base 2xl:mt-6  2xl:text-lg 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-300  group"
            >
              Cat-astrophic Club
              <i className="bx bxs-pyramid text-cyan-500 text-3xl border-l-[2px] border-cyan-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500"></i>
            </button>
          </p>
        </article>
      </section>
    </>
  );
};

const Guitars = () => {
  return (
    <>
      <section
        id="four_section"
        className="w-full h-screen relative flex justify-start items-start "
      >
        <figure className="absolute top-0 left-2 2xl:left-[5%] w-[100px] lg:w-[190px] 2xl:w-[200px] self-end">
          <img src={iconGuitar} alt="icon-cat" />
        </figure>

        <article className="relative text-balance flex flex-col h-full justify-center gap-6 items-center md:items-start z-50 md:pl-[4%] 2xl:pl-[6%]  lg:w-[55%] xl:pr-9 2xl:w-[50%] 2xl:gap-12">
          <h5 className="text-3xl font-title2 text-[#c4c4c4] font-medium text-center  md:text-start  xl:text-5xl 2xl:text-7xl ">
            El Templo del Guitar Hero
          </h5>

          <p className="font-title  flex flex-col justify-center items-center  text-center font-normal px-2 text-base text-stone-500 max-w-[800px] md:px-0 md:items-start md:justify-start md:text-start xl:max-w-[800px]   2xl:text-xl  ">
            Celebramos los solos épicos que nunca se parecieron al original pero
            que igual emocionaron a la abuela, los acordes desafinados y esos
            momentos mágicos en los que un rasgueo accidental resulta ser la
            mejor canción que jamás hayas compuesto (aunque solo dure 3
            segundos).
            <button
              id="box-glass2"
              className="border-[2px] border-cyan-500 mt-3 flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:w-[260px] text-base xl:text-base xl:mt-4 2xl:mt-6 2xl:text-lg 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-300  group"
            >
              The pick of destiny
              <i className="bx bxs-pyramid text-cyan-500 text-3xl border-l-[2px] border-cyan-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500"></i>
            </button>
          </p>
        </article>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section
        id="five_section"
        className="w-full h-screen relative flex justify-start items-start pt-[2%]  z-50"
      >
        <article className="relative  flex flex-col  justify-start items-start py-6  w-[96%] pl-[4%] md:w-[700px]  xl:w-[800px] xl:pl-12 xl:py-12  2xl:pl-24 2xl:py-20 2xl:w-[1200px] rounded-r-lg ">
          <h5 className="text-5xl text-black font-title2 font-medium text-start xl:text-7xl 2xl:text-8xl  ">
            CONTACTO
          </h5>
          <p className="text-start text-balance text-stone-500 font-title text-sm lg:text-lg 2xl:text-xl  mt-6 xl:w-[70%] xl:mt-9">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className="text-cyan-500 font-medium">Quia consequatur quibusdam </span> totam corrupti deserunt eius harum officia voluptates vitae doloremque.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-stone-600 xl:text-base font-title2 mt-6 xl:gap-3 xl:mt-7 2xl:mt-9 2xl:text-xl ">
            <a target="_blank" href="https://www.instagram.com/dager.32/">
              <li className="flex justify-start items-center gap-2 lg:gap-3">
                <i className="bx bxl-instagram text-2xl text-cyan-500 xl:text-3xl 2xl:text-4xl"></i>
                https://www.instagram.com/dager.32
              </li>
            </a>
            <a target="_blank" href="https://github.com/MarianoVilla/DotDager">
              <li className="flex justify-start items-center gap-2 lg:gap-3">
                <i className="bx bxl-github text-2xl text-cyan-500 xl:text-3xl 2xl:text-4xl"></i>
                https://github.com/MarianoVilla/DotDager
              </li>
            </a>
            <a
              target="_blank"
              href="https://ar.linkedin.com/in/mariano-luis-villa/es"
            >
              <li className="flex justify-start items-center gap-2 lg:gap-3">
                <i className="bx bxl-linkedin text-2xl -mt-[1px] text-cyan-500 xl:text-3xl 2xl:text-4xl"></i>
                https://ar.linkedin.com/in/mariano-luis-villa/es
              </li>
            </a>
          </ul>
        </article>
       
        <div className="hidden lg:flex w-[50%] h-[2px] bg-cyan-500 absolute lg:bottom-12 left-0 z-50 2xl:bottom-20"></div>
      </section>
    </>
  );
};
