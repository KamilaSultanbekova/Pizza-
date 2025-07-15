import Italia from "../assets/italia.png";
import Venecia from "../assets/venecia.png";
import Meat from "../assets/meat.png";
import Cheese from "../assets/cheese.png";
import MostPopular from "../assets/mpp.png";

const pizzas = [
  { name: "Italian", price: "8.35", image: Italia },
  { name: "Venecia", price: "7.35", image: Venecia },
  { name: "Meat", price: "9.35", image: Meat },
  { name: "Cheese", price: "8.35", image: Cheese },
];
const pizzas2 = [
  { name: "Argentina", price: "8.35", image: Italia },
  { name: "Gribnaya", price: "7.35", image: Venecia },
  { name: "Tomato", price: "9.35", image: Meat },
  { name: "Italian x2", price: "8.35", image: Cheese },
];

export default function Menu() {
  return (
    <section className="bg-[#1a0c06] py-20 px-4 text-white" id="menu">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Menu</h2>

        <div className="flex flex-wrap justify-center gap-15 mb-10">
          {["Show All", "Meat", "Vegetarian", "Sea products", "Mushroom"].map(
            (cat) => (
              <button
                key={cat}
                className={`py-2 px-10 rounded-full ${
                  cat === "Show All" ? "bg-orange-500" : "bg-gray-800"
                } text-white hover:brightness-110`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <div
              key={pizza.name}
              className="bg-[#2a160b] rounded-2xl p-4 text-center shadow-lg"
            >
              <img src={pizza.image} className="w-28 h-28 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                Filling: onion, tomato, mushrooms...
              </p>
              <p className="text-white text-xl font-bold mb-2">
                ${pizza.price}
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:brightness-110 text-white py-2 px-4 rounded-full font-semibold">
                Order Now
              </button>
            </div>
          ))}
        </div>

        <div>
          <img src={MostPopular} className=" mt-15 w-320 rounded-3xl" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-15">
          {pizzas2.map((pizza) => (
            <div
              key={pizza.name}
              className="bg-[#2a160b] rounded-2xl p-4 text-center shadow-lg"
            >
              <img src={pizza.image} className="w-28 h-28 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                Filling: onion, tomato, mushrooms...
              </p>
              <p className="text-white text-xl font-bold mb-2">
                ${pizza.price}
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:brightness-110 text-white py-2 px-4 rounded-full font-semibold">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
