import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center px-20"
    >
      <form
        method="POST"
        action="https://getform.io/f/a617692f-23f1-4c52-8238-bcb5520b42b5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or email me - 📧ionut.agapie22@gmail.com📧
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="Email"
        />
        <textarea
          className="bg-[#ccd6f6] rounded p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4
        py-3 mt-8 mx-auto flex items-center"
        >
          Let's Colaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
