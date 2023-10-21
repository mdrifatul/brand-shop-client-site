import { useLoaderData } from "react-router-dom";
import Slider from './../Slider/Slider';
import Car from "./Car";

const Cars = () => {
  const cars = useLoaderData()
  console.log(cars);
  return (
    <div>
      <Slider></Slider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 w-11/12 mx-auto">
        {
          cars.map(car => <Car key={car._id} car={car}></Car>)
        }
      </div>
    </div>
  );
};

export default Cars;