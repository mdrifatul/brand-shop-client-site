import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrand] = useState([]);

  useEffect(()=>{
    fetch('./brand.json')
    .then(res => res.json())
    .then(data => setBrand(data))
  },[])

  return (
    <div>
      <div className='text-5xl text-center mt-14 font-bold text-red-600'>Brands</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 w-11/12 mx-auto">
        {
          brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
        }
      </div>
    </div>
  );
};

export default Brands;