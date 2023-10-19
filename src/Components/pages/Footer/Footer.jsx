import carlogo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-neutral-content felx justify-between md:px-28 lg:px-36 border-2 border-t-red-300">
        <nav>
          <div className="flex">
            <img  className="w-14 h-12"  src={carlogo} alt="" />
            <p className=" text-red-600 px-2 font-semibold text-xl md:text-4xl">DriveWave</p>
          </div>
          <p className="md:w-1/2 text-gray-700 text-base">
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </p>
        </nav>
        <nav>
          <p className=" text-3xl text-red-600">123-456-78901</p>
          <a className=" text-gray-700 text-base">drivewave@gmail.com</a>
          <a className=" text-gray-700 text-base">West 12th Street</a>
          <a className=" text-gray-700 text-base">New York, USA</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
