import { useLoaderData } from "react-router-dom";
import Slider from './../Slider/Slider';
import Car from "./Car";

const Cars = () => {
  const cars = useLoaderData()
  console.log(cars);
  
  console.log(cars.length);
  return (
    <div>
      <Slider></Slider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 w-9/12 md:w-11/12 mx-auto">
        {
          cars.length !==0 ? (
          cars.map(car => <Car key={car._id} car={car}></Car>)
          ): (
            <h1 className="text-3xl font-semibold">coming soon...</h1>
          )
        }
      </div>
    </div>
  );
};

export default Cars;