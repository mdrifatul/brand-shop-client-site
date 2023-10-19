import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { id, brand_name, image } = brand;
  return (
    <div>
      <Link to='/cars'>
      <div className="card flex justify-center items-center relative">
        <figure>
          <img
          className="rounded-2xl h-64 w-96"
            src={image}
            alt={brand_name}
          />
        </figure>
        <div className="card-body absolute bottom-0">
          <h2 className="card-title text-4xl text-white">{brand_name}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Brand;
