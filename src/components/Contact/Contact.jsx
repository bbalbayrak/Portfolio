import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const URI = "https://portfolio-api-l3ks.onrender.com/createContact";

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredMessage);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");

    fetch(URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    if (
      enteredName.trim().length !== 0 &&
      enteredEmail.trim().length !== 0 &&
      enteredMessage.trim().length !== 0
    ) {
      return SuccessAlert();
    } else {
      return WarningAlert();
    }
  };

  const WarningAlert = () => {
    toast.warning("Invalid Field !");
  };
  const SuccessAlert = () => {
    toast.success("Successfully Sent !");
  };

  return (
    <div className="flex justify-between h-screen min-h-screen bg-gradient-to-bl from-red-500 via-amber-400 to-amber-100">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={submitHandler} className="flex justify-start pl-40 pt-28">
        <div className=" py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold pr-20">
                    To Contact Me !
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600"
                        placeholder="name"
                        value={enteredName}
                        onChange={(e) => {
                          setEnteredName(e.target.value);
                        }}
                      />

                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Full Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600"
                        placeholder="email"
                        value={enteredEmail}
                        onChange={(e) => {
                          setEnteredEmail(e.target.value);
                        }}
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Email
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        className="peer placeholder-transparent h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600"
                        placeholder="message"
                        id="message"
                        value={enteredMessage}
                        onChange={(e) => {
                          setEnteredMessage(e.target.value);
                        }}
                      ></textarea>
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Your Message..
                      </label>
                    </div>

                    <div className="relative">
                      {/* <button className="text-md font-general-medium bg-purple-800 hover:bg-purple-500  text-white shadow-lg rounded-md px-5 py-2.5 duration-200 font-mono">
                        Submit
                      </button> */}
                      <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded hover:bg-red-500 group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black">
                          Submit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <img
        className=" absolute right-0  object-contain  pt-52 pr-52"
        src={ContactPic}
      /> */}

      <h1 className="duration-500 animate-text bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent font-black text-6xl p-60 pt-80">
        Get In Touch !
      </h1>
    </div>
  );
};

export default Contact;
