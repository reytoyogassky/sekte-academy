import React from "react";
import { FaSearch,FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Rekomendasi",
    link: "/#",
  },
  {
    id: 3,
    name: "Kategori",
    link: "/#",
  },
  {
    id: 4,
    name: "Top Rated 🔥",
    link: "/#",
  },
];

const DropdownLinks =[
    {
        id: 1,
        name: "Terbaik",
        link: "/#",
      },
      {
        id: 2,
        name: "Terpopuler",
        link: "/#",
      },
      {
        id: 3,
        name: "Terbaru",
        link: "/#",
      },
]

export default function MyNavbar() {
  return (
    <>
      <div className="shadow-md bg-white">
        {/* UPPER NAVBAR */}
        <div className=" bg-primary text-white py-3">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-body font-bold text-xl">
                SEKTE <span className="font-bold text-secondary">ACADEMY</span>
              </a>
            </div>

            {/* searchbar */}
            <div className=" flex justify-between items-center gap-4 ">
              <div className=" relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Cari"
                  className="w-[200px] sm:w[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-200 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />

                <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 " />
              </div>
              {/* ORDER BUTTON */}
              <button
                onClick={() => alert("FITUR BELUM TERSEDIA")}
                className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
              </button>

              {/* CHAT BUTTON */}
              <button
                onClick={() => alert("FITUR BELUM TERSEDIA")}
                className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Chat
                </span>
                <IoChatboxEllipsesOutline className="text-2xl drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* lower nav */}
      <div className="flex justify-center shadow-xl">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-secondary duration-200 hover:font-bold"
              >
                {data.name}{" "}
              </a>
            </li>
          ))}
           {/* dropdown */}
           <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2  hover:text-secondary hover:font-bold duration-200">
                Urutkan
                <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black ">
                <ul>
                    {DropdownLinks.map((data) =>(
                        <li key={data.id}>
                            <a href={data.link} className=" inline-block w-full rounded-md p-2  hover:bg-primary/20 duration-200">
                                {data.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
