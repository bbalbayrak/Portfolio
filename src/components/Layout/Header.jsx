import { NavLink } from "react-router-dom";
import Axios from "axios";
import FileDownload from "js-file-download";

const Header = () => {
  const URI = "http://localhost:3000";

  const download = (e) => {
    e.preventDefault();

    Axios({
      url: URI,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "resume.pdf");
    });
  };

  return (
    <nav className="w-full fixed top-0 z-50 flex items-center bg-transparent shadow-xl justify-between flex-wrap p-7">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="animate-bounce font-semibold text-xl tracking-tight font-mono">
          Bilal Burak Albayrak
        </span>
      </div>

      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className=" lg:flex-grow pl-9 md:pl-0">
          <NavLink
            to="/"
            className="block pr-8 mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-orange-900 mr-4 font-mono"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block pr-8 mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-orange-900 mr-4 font-mono"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block pr-8 mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-orange-900 mr-4 font-mono"
          >
            Contact
          </NavLink>
        </div>
        <div>
          <button
            className="text-md font-general-medium bg-red-800 hover:bg-red-600 hover:animate-bounce text-white shadow-lg rounded-2xl px-5 py-2.5 duration-200 font-mono"
            onClick={(e) => {
              download(e);
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
