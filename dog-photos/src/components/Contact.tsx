function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Submitted");
  };

  return (
    <div className="flex justify-center h-screen mx-auto max-w-[600px] ">
      <div className="flex flex-col items-center h-auto w-full mt-4">
        <form action="submit/contact">
          <h2 className="text-5xl font-semibold tracking-wider  text-center">
            Contact
          </h2>
          <p className="mt-6 font-semibold text-lg">First Name</p>
          <input
            name="firstName"
            type="text"
            placeholder="Enter first name"
            required
            className="bg-white border-[1px] border-black text-black w-full py-1 px-1"
          />
          <p className="mt-4 font-semibold text-lg">Last Name</p>
          <input
            name="lastName"
            type="text"
            placeholder="Enter last name"
            className="bg-white border-[1px] border-black text-black w-full py-1 px-1"
          />
          <p className="mt-4 font-semibold text-lg">Email</p>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            required
            className="bg-white border-[1px] border-black text-black w-full py-1 px-1"
          />
          <p className="mt-4 font-semibold text-lg">Message</p>
          <textarea
            name="textarea"
            id="textarea"
            cols={40}
            rows={5}
            placeholder="Enter your message here"
            className="bg-white border-[1px] border-black text-black w-full py-1 px-1"
            required
          ></textarea>
          <button
            onClick={onSubmit}
            type="submit"
            className="bg-slate-700 hover:bg-slate-600 active:bg-slate-500 active:scale-95 text-white shadow-md w-full py-3 mt-2 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
