import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Mycart from "./Mycart";


const Mycarts = () => {
  const loadmycart = useLoaderData();
  const [carts, setCarts] = useState(loadmycart)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 w-11/12 mx-auto">
      {
        carts.map(cart => <Mycart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></Mycart>)
      }
    </div>
  );
};

export default Mycarts;