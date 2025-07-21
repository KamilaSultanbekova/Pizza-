import React from "react";
import Pizzas from "../assets/abuspizzas.png";
import pizza from "../assets/abuspizza.png";
import Row from "../assets/row2.png";

export default function Aboutus() {
  return (
    <div className="flex mx-auto  bg-[#1a0c06]">
      <div className="text-white ml-40 mt-5">
        <p className="text-4xl font-bold text my-5">About us</p>
        <h1>
          In just a couple of years, we have opened 6 outlets <br />
          in different cities: Kazan, Chelyabinsk, Ufa, Samara, <br />
          Izhevsk, and in the future we plan to develop the <br />
          network in other major cities of Russia.
        </h1>
        <img src={Pizzas} />
        <h1 className="my-5">
          The kitchen of each point is at least: 400-500 <br />
          sq. m. meters, hundreds of employees, smoothly <br />
          performing work in order to receive / prepare / <br />
          form / deliver customer orders on time.
        </h1>
      </div>
      <div className="flex mx-auto items-center">
        <img src={Row} className="" />
        <img src={pizza} className="w-150" />
      </div>
    </div>
  );
}
