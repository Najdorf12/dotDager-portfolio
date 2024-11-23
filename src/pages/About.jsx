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
        className="w-full h-[120vh] relative flex justify-end items-start"
      >
        <figure className="absolute top-0 right-2 2xl:right-[5%] w-[100px] lg:w-[150px] 2xl:w-[200px] self-end">
          <img src={iconPickle} alt="icon-cat" />
        </figure>

        <article className="relative flex flex-col h-full justify-center gap-6 items-center z-50 lg:w-[55%]  2xl:px-12 2xl:gap-20 ">
          <h5 className="text-2xl font-title2 font-medium text-center text-balance xl:text-4xl 2xl:text-7xl  ">
            ¿Alguna vez un pepinillo te cambió la vida?
          </h5>

          <p className="font-title flex flex-col justify-center items-center  text-center font-normal  text-base text-stone-500 max-w-[800px] 2xl:text-3xl 2xl:gap-9 ">
            Aquí exploramos las razones por las que este vegetal merece un
            altar. Desde su rol como villano número uno en los comidas de niños
            hasta su título no oficial de 'Caviar de las ensaladas', el
            pepinillo es más que un simple encurtido: es un estilo de vida.{" "}
            <button className="border-[2px] border-stone-500  flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:w-[260px] text-base xl:text-lg 2xl:text-xl 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-500  group">
              Pickles Society{" "}
              <i className="bx bxs-pyramid text-stone-500 text-3xl border-l-[2px] border-stone-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500"></i>
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

        <article className="relative flex flex-col h-full justify-center gap-6 items-center z-50  lg:w-[55%]  2xl:px-12 2xl:gap-12 ">
          <h5 className="text-2xl font-title2 font-medium text-center text-balance xl:text-4xl 2xl:text-6xl  ">
            No te preocupes, están aquí para juzgarte, pero con amor.
          </h5>

          <p className="font-title flex flex-col justify-center items-center  text-center font-normal text-base text-stone-500 2xl:text-3xl 2xl:gap-9 ">
            En esta sección, celebramos a los verdaderos dueños de la casa: los
            gatos. Desde posar como si entendieran el concepto de impuestos
            hasta expertos en juicios silenciosos desde la repisa, estos
            peluditos lo tienen todo. ¿Tienes un gato? Felicidades, ahora eres
            el empleado del mes... de tu gato.
            <button className="border-[2px] border-stone-500  flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:w-[260px] text-base xl:text-lg 2xl:text-base 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-500  group">
              Cat-astrophic Club
              <i className="bx bxs-pyramid text-stone-500 text-3xl border-l-[2px] border-stone-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500"></i>
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
        className="w-full h-screen relative flex justify-start items-start"
      >
        <figure className="absolute top-0 left-2 2xl:left-[5%] w-[100px] lg:w-[190px] 2xl:w-[200px] self-end">
          <img src={iconGuitar} alt="icon-cat" />
        </figure>

        <article className="relative flex flex-col h-full justify-center gap-6 items-center z-50  lg:w-[55%]  2xl:px-12 2xl:gap-12 ">
          <h5 className="text-2xl font-title2 font-medium text-center text-balance xl:text-4xl 2xl:text-7xl  ">
            El Templo del Guitar Hero
          </h5>

          <p className="font-title flex flex-col justify-center items-center  text-center font-normal text-base text-stone-500 2xl:text-3xl 2xl:gap-9 ">
            Celebramos los solos épicos que nunca se parecieron al original pero
            que igual emocionaron a la abuela, los acordes desafinados y esos
            momentos mágicos en los que un rasgueo accidental resulta ser la
            mejor canción que jamás hayas compuesto (aunque solo dure 3
            segundos).
            <button className="border-[2px] border-stone-500  flex justify-between pl-3 pr-1 items-center rounded-lg text-stone-600 font-medium font-title w-[220px] xl:w-[260px] text-base xl:text-lg 2xl:text-xl 2xl:w-[280px] hover:border-stone-300 hover:text-stone-300 duration-500  group">
              The pick of destiny
              <i className="bx bxs-pyramid text-stone-500 text-3xl border-l-[2px] border-stone-500 pl-1 2xl:text-4xl group-hover:border-stone-300 duration-500"></i>
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
        className="w-full h-screen relative flex justify-start items-start pt-[2%] z-50"
      >
        <article className="relative  flex flex-col bg-black justify-start items-start py-6  w-[90%] pl-[4%] md:w-[700px]  xl:w-[800px] xl:pl-12 xl:py-12  2xl:pl-24 2xl:py-20 2xl:w-[1200px] rounded-r-lg">
          <h5 className="text-5xl text-white font-title2 font-medium text-start xl:text-8xl 2xl:text-9xl  ">
            CONTACTO
          </h5>
          <p className="text-start text-balance text-stone-400 font-title text-sm lg:text-lg 2xl:text-3xl  mt-6 2xl:mt-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem qui
            atque impedit vero animi aliquam assumenda dicta perspiciatis
            exercitationem maxime sapiente velit.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-stone-400 xl:text-lg font-title2 mt-6 xl:gap-3 xl:mt-9 2xl:mt-12 2xl:text-xl ">
            <a target="_blank" href="https://www.instagram.com/dager.32/">
              <li className="flex justify-start items-center gap-2 lg:gap-3">
                <i className="bx bxl-instagram text-2xl text-cyan-500 xl:text-3xl 2xl:text-4xl"></i>
                https://www.instagram.com/dager.32/
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
      </section>
    </>
  );
};
