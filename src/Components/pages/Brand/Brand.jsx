import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const {brandName, image } = brand;
  return (
    <div>
      <div>
      </div>
      <Link to={`/cars/${brandName}`}>
      {/* <Link to={`/cars`}> */}
      <div className="card flex justify-center items-center relative">
        <figure>
          <img
          className="rounded-2xl h-64 w-96"
            src={image}
            alt={brandName}
          />
        </figure>
        <div className="card-body absolute bottom-0">
          <h2 className="card-title text-4xl text-white">{brandName}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Brand;
