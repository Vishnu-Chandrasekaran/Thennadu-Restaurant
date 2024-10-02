import React, { useState } from "react";
import Logo from "../../assets/thennaduLogo.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/",
  },
  {
    id: 3,
    name: "Menu",
    link: "/menu",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
  // {
  //     id: 5,
  //     name: "Item 5",
  //     link: "#"
  // },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {" "}
      <div className="bg-primaryMaroon font-mont">
        <div className="container py-2 ">
          <div className="flex justify-between items-center ">
            {/* Logo Section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a href="/">
                <img src={Logo} alt="Logo" className="w-36" />
              </a>
            </div>
            {/* Menu Link Section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden lg:flex justify-between items-center gap-4"
            >
              <ul className="hidden lg:flex justify-between items-center gap-4">
                {Menu.map((menu) => (
                  <li
                    key={menu.id}
                    className="inline-block text-xl p-4 text-white"
                  >
                    <a href={menu.link}>{menu.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsive Mobile Section */}
            <div>
              <div data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300" className="lg:hidden">
                <button onClick={handleOpen}>
                  {!open ? (
                    <FaBars className="text-3xl text-white"></FaBars>
                  ) : (
                    <FaXmark className="text-3xl text-white"></FaXmark>
                  )}
                </button>
              </div>
              {/* Doropdown menu section */}
              {open && (
                <div onBlur={() => setOpen(false)}>
                  <ul className="bg-white text-primaryMaroon space-y-3 p-4 rounded-md shadow-md absolute right-16 top-20 z-50">
                    {Menu.map((menu) => (
                      <li key={menu.id}>
                        <a
                          className="inline-block text-xl p-4  hover:bg-primaryMaroon hover:text-white w-full rounded-md"
                          href={menu.link}
                        >
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
