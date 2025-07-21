import undertitle from "../assets/bg_under_title.png";
import RightHome from "../assets/rightHome.png";
import Row from "../assets/row.png";

export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-between bg-[#180901] px-20 pb-2 pt-10 ">
      <section className=" bg-[#180901] text-white py-10 mx-20 flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
        <div>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            The Fastest <span className="text-orange-500"> Pizza⚡</span>{" "}
            Delivery
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late — <span className="text-white">pizza is free!</span>
          </p>
          <div className="flex items-center gap-4 mb-3">
            <img src={undertitle} className="w-60 h-50 rounded-lg shadow-lg" />
          </div>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-semibold transition">
              To order
            </button>
            <button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-6 rounded-full font-semibold transition">
              Pizza-Menu
            </button>
          </div>
          <img src={Row} className="w-30 ml-90" />
        </div>
        <div>
          <img src={RightHome} className="w-150 mr-1  rounded" />
        </div>
      </section>
    </div>
  );
}
