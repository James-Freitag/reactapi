import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navLinks = [
    { name: "Doggo", to: "/" },
    { name: "Random Photo", to: "random-photo" },
    { name: "Contact", to: "contact" },
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 flex justify-center items-center mx-auto h-16 bg-slate-800 border-b-[2px] border-slate-600 ease-in duration-200 ">
      <nav className="w-full bg-slate-800">
        {/* ----------------------- Toggle Menu  -------------------------- */}
        <div className="md:hidden flex justify-start items-center w-full bg-slate-800 ease-in-out duration-300">
          <button onClick={toggle}>
            {isOpen ? (
              <IoMdClose
                className=" bg-slate-800 mx-4 cursor-pointer"
                color="white"
                size={35}
              />
            ) : (
              <RxHamburgerMenu
                className=" bg-slate-800 mx-4 cursor-pointer"
                color="white"
                size={30}
              />
            )}
          </button>
        </div>
        {/* --------------------- Small Screen Menu --------------------------- */}
        <div className="bg-slate-800">
          {/* className={`${isOpen ? "inline" : "hidden"} `} */}
          <div
            ref={navRef}
            onAnimationEnd={() => {
              if (!navRef.current) return;
              navRef.current.style.display = "none";
              console.log("navigation ended");
            }}
            className={`${
              isOpen ? "translate-x-0 " : "-translate-x-[150rem]"
            } absolute bg-slate-800 top-16 w-1/2 h-screen transition-all ease-in duration-500`}
          >
            <ul className="pt-14 px-4 flex flex-col space-y-12  font-semibold text-2xl  ">
              {navLinks.map(({ name, to }) => (
                <li className=" border-b-[2px]  border-slate-600 hover:scale-105 ease-in-out duration-300">
                  <Link to={to} onClick={() => setIsOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --------------------- Medium and up Navbar ------------------- */}
        <div className="flex justify-evenly items-center mx-auto bg-slate-800">
          <ul className="hidden md:flex space-x-6 items-center font-semibold text-lg bg-slate-800">
            {navLinks.map(({ name, to }) => (
              <li className=" ml-4 border-[1px] px-4 py-1 bg-slate-200 hover:bg-slate-300 active:scale-95 text-black rounded-lg">
                <Link to={to} onClick={() => setIsOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
