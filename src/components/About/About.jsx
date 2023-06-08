import { Fragment } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiJava,
} from "react-icons/di";
import { BsDatabase } from "react-icons/bs";

const About = () => {
  const aboutDesc = `Hello, I'm Bilal Burak Albayrak. I am a 4th year computer engineering student at Karadeniz Technical University. I have developed myself in the field of software for 4 years and I continue to develop it. I aim to be a backend developer as the main field, but I think it will be beneficial for me to have full stack information.`;

  const education = [
    { name: "Selcuk University", year: "2020 - 2022" },
    { name: "Karadeniz Technical University", year: "2022 - Present " },
  ];

  return (
    <Fragment>
      <div className="flex justify-around max-sm:grid p-7 pt-48 h-screen min-h-screen bg-gradient-to-bl from-red-500 via-amber-400 to-amber-100">
        <div className="relative bg-gradient-to-tr  from-red-500 via-amber-300 to-amber-500 max-w-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 ">
            <div className="font-extrabold text-xl mb-2 ">About Myself</div>
            <p className="text-base font-mono">{aboutDesc}</p>
          </div>
        </div>
        <div className="relative bg-gradient-to-br  from-red-500 via-amber-300 to-amber-500 max-w-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4">
            <div className="font-extrabold text-xl mb-2">Education</div>
            <ul>
              {education.map((ed, key) => {
                return (
                  <div className="p-4" key={key}>
                    <div>
                      <li className=" font-bold">{ed.name}</li>
                    </div>
                    <div>
                      <li className="font-mono">{ed.year}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="relative bg-gradient-to-tr  from-red-500 via-amber-300 to-amber-500 max-w-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4">
            <div className="font-extrabold text-xl mb-2">Skills</div>
            <div className="text-4xl  pt-4">
              <ul className="pl-7 pt-5 flex flex-row">
                <li className="mr-8 border-2 border-black rounded-full">
                  <AiFillHtml5 className="m-1" title="HTML5" />
                </li>
                <li
                  className="mr-8 border-2 border-black rounded-full"
                  title="CSS3"
                >
                  <DiCss3 className="m-1" />
                </li>
                <li
                  className="mr-8 border-2 border-black rounded-full"
                  title="JavaScript"
                >
                  <DiJavascript1 className="m-1" />
                </li>
              </ul>
              <ul className="pt-8 flex justify-between">
                <li className="border-2 border-black rounded-full">
                  <DiNodejsSmall title="Node.Js" className="m-1" />
                </li>
                <li className="border-2 border-black rounded-full">
                  <DiReact title="React.Js" className="m-1" />
                </li>
                <li className="border-2 border-black rounded-full">
                  <DiJava title="Java" className="m-1" />
                </li>
                <li className="border-2 border-black rounded-full">
                  <BsDatabase title="SQL/NoSQL" className="m-1" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-br  from-red-500 via-amber-300 to-amber-500 max-w-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4">
            <div className="font-extrabold text-xl mb-2">Experiences</div>
            <h1 className="text-black text-xl font-serif">
              Backend Developer Intern
            </h1>
            <p className="pt-2 font-mono">
              MonSpark - December 2022/February 2023
            </p>
            <p className="pt-4 font-mono">
              In this internship, thanks to the support of my teammates, i am
              trying to train myself even more in this field by using nodejs and
              typescript together as a backend developer.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
