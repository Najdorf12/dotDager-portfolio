import iconCat from "/cat.png";
import iconPickle from "/pickle.png";
import iconGuitar from "/guitar.png";

const About = () => {
  return (
    <>
      <Cats />
      <Pickles />
      <Guitars />
    </>
  );
};

export default About;


const Cats = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen relative flex lg:justify-end"
      >
        <div className="w-full h-full text-balance flex flex-col lg:justify-center lg:items-center lg:w-[50%]">
          <article className="relative flex flex-col max-w-[750px]  justify-center items-start ">
            <figure className="w-[100px] lg:w-[190px] 2xl:w-[230px] self-end">
              <img src={iconCat} alt="icon-cat" />
            </figure>
            <h5 className="text-2xl font-title font-medium text-start xl:text-6xl 2xl:text-7xl  ">
              IMPERIO GATUNO
            </h5>
            <div className="w-[90%] lg:w-full h-1 bg-amber-600 2xl:mt-6"></div>
            <p className="font-title font-normal text-2xl text-black max-w-[800px] 2xl:text-3xl 2xl:mt-9">
              "En esta sección, celebramos a los verdaderos dueños de la casa:
              los gatos. Desde maestros del parkour en la sala de estar hasta
              expertos en juicios silenciosos desde la repisa, estos peluditos
              lo tienen todo. ¿Tienes un gato? Felicidades, ahora eres el
              empleado del mes... de tu gato."
            </p>
          </article>
        </div>
      </section>
    </>
  );
};
const Pickles = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen relative flex lg:justify-end"
      >
        <div className="w-full h-full text-balance flex flex-col lg:justify-center lg:items-center lg:w-[50%]">
          <article className="relative flex flex-col max-w-[750px]  justify-center items-start ">
            <figure className="w-[100px] lg:w-[190px] 2xl:w-[230px] self-end">
              <img src={iconPickle} alt="icon-cat" />
            </figure>
            <h5 className="text-2xl font-title font-medium text-start xl:text-6xl 2xl:text-7xl  ">
              IMPERIO GATUNO
            </h5>
            <div className="w-[90%] lg:w-full h-1 bg-amber-600 2xl:mt-6"></div>
            <p className="font-title font-normal text-2xl text-black max-w-[800px] 2xl:text-3xl 2xl:mt-9">
              "En esta sección, celebramos a los verdaderos dueños de la casa:
              los gatos. Desde maestros del parkour en la sala de estar hasta
              expertos en juicios silenciosos desde la repisa, estos peluditos
              lo tienen todo. ¿Tienes un gato? Felicidades, ahora eres el
              empleado del mes... de tu gato."
            </p>
          </article>
        </div>
      </section>
    </>
  );
};
const Guitars = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen relative flex lg:justify-end"
      >
        <div className="w-full h-full text-balance flex flex-col lg:justify-center lg:items-center lg:w-[50%]">
          <article className="relative flex flex-col max-w-[750px]  justify-center items-start ">
            <figure className="w-[100px] lg:w-[190px] 2xl:w-[230px] self-end">
              <img src={iconGuitar} alt="icon-cat" />
            </figure>
            <h5 className="text-2xl font-title font-medium text-start xl:text-6xl 2xl:text-7xl  ">
              IMPERIO GATUNO
            </h5>
            <div className="w-[90%] lg:w-full h-1 bg-amber-600 2xl:mt-6"></div>
            <p className="font-title font-normal text-2xl text-black max-w-[800px] 2xl:text-3xl 2xl:mt-9">
              "En esta sección, celebramos a los verdaderos dueños de la casa:
              los gatos. Desde maestros del parkour en la sala de estar hasta
              expertos en juicios silenciosos desde la repisa, estos peluditos
              lo tienen todo. ¿Tienes un gato? Felicidades, ahora eres el
              empleado del mes... de tu gato."
            </p>
          </article>
        </div>
      </section>
    </>
  );
};
/* 1. El Imperio Gatuno 🐾
Descripción:
"En esta sección, celebramos a los verdaderos dueños de la casa: los gatos. Desde maestros del parkour en la sala de estar hasta expertos en juicios silenciosos desde la repisa, estos peluditos lo tienen todo. ¿Tienes un gato? Felicidades, ahora eres el empleado del mes... de tu gato."

2. La Sociedad del Pepinillo 🥒
Descripción:
"¿Alguna vez un pepinillo te cambió la vida? Aquí exploramos las razones por las que este vegetal merece un altar. Desde su rol como villano número uno en los sustos de gatos hasta su título no oficial de 'Caviar de las ensaladas', el pepinillo es más que un simple encurtido: es un estilo de vida."

3. Riffs y Rasguños 🎸
Descripción:
"Las guitarras son como los gatos: difíciles de domar, pero increíblemente satisfactorias cuando logras hacerlo. En esta sección, celebramos los solos épicos, los acordes desafinados y esos momentos mágicos en los que un rasgueo accidental resulta ser la mejor canción que jamás hayas compuesto (aunque solo dure 3 segundos)." */
