import TestPic from "../../assets/assets/home.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <div className="h-screen min-h-screen max-sm:grid bg-gradient-to-bl from-red-500 via-amber-400 to-amber-100">
      <section className="flex sm:justify-between items-center sm:flex-row ">
        <div className="pt-72 w-full md:w-2/5 text-left">
          <h2 className="max-sm:pr-16 font-mono pl-44 font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left  text-black dark:text-primary-light uppercase">
            Bilal Burak Albayrak
          </h2>

          <p className="max-sm:pr-16 max-sm:grid font-mono pl-52 font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-black dark:text-gray-200">
            <TypewriterComponent
              onInit={(ty) => {
                ty.typeString("Hello Everyone !")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm Software Engineer.")
                  .deleteAll()
                  .start();
              }}
              options={{ loop: true }}
            />
          </p>
          <div className="flex justify-center pl-40 p-9 text-4xl">
            <button
              onClick={() => {
                window.open("https://github.com/bbalbayrak");
              }}
              className=" hover:shadow-xl hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-2xl"
            >
              <AiFillGithub />
            </button>

            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/bilal-burak-albayrak-462a3422b/"
                );
              }}
              className=" hover:shadow-xl hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-2xl"
            >
              <AiFillLinkedin />
            </button>
          </div>
        </div>
      </section>
      <img
        className="max-sm:hidden absolute inset-y-0 right-0  object-contain h-full pt-20 "
        src={TestPic}
        alt="Developer"
      />
    </div>
  );
};

export default Home;
