import BagIcon from "../assets/bag.png";

export default function Navbar({ onScrollTo }) {
  return (
    <div className="container mx-auto flex items-center justify-between bg-black px-20 pb-8 pt-4">
      <div>
        <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
          pizzashop
        </p>
      </div>
      <div>
        <ul className="flex gap-10 mt-4">
          <li
            onClick={() => onScrollTo("home")}
            className="text-xl text-gray-500 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => onScrollTo("menu")}
            className="text-xl text-gray-500 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer"
          >
            Menu
          </li>
          <li
            onClick={() => onScrollTo("events")}
            className="text-xl text-gray-500 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer"
          >
            Events
          </li>
          <li
            onClick={() => onScrollTo("about")}
            className="text-xl text-gray-500 font-Muller hover:bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 hover:bg-clip-text hover:text-transparent cursor-pointer"
          >
            About Us
          </li>
        </ul>
      </div>

      <div className="flex gap-5">
        <button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 px-10 py-1 rounded-full text-white mt-5">
          Log in
        </button>
        <div className="mt-5 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-full p-1">
          <img className="w-5 h-5" src={BagIcon} />
        </div>
      </div>
    </div>
  );
}
