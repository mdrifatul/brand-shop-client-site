import { Link } from "react-router-dom";

const Car = ({car}) => {
  const {_id, name,photo, brand_name, price, rating, type} = car
  return (
    <div className="">
          <div className="card bg-gray-800 shadow-xl">
        <figure><img className="h-72 w-full" src={photo} alt="Shoes" /></figure>
        <div className="card-body text-white">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="flex justify-between">
            <p className="text-lg font-semibold uppercase"> {brand_name}</p>
            <p className="text-end text-lg font-semibold">{type}</p>
          </div>
          <div className="flex justify-between">
          <p className="text-lg">Price : ${price}</p>
          <p className="text-end">Rating :<span  className="text-lg"> {rating}</span></p>

          </div>
          <div className="card-actions justify-between mt-2 -mb-3 ">
            <Link to={`/details/${_id}`}><button className="btn btn-sm btn-info btn-outline">Details</button></Link>
            <Link to={`/update/${_id}`}><button className="btn btn-sm btn-success btn-outline">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;