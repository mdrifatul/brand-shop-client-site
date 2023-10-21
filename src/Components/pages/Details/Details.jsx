import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Details = () => {
  const loaddata = useLoaderData();
  const {_id, ...addtoCart} = loaddata
  const {name, photo, price} = loaddata


  const handleAddcart = () =>{
    fetch('http://localhost:5000/carts',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addtoCart)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Add to cart Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }


  return (
    <div className="card w-4/6 mx-auto h-screen bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: <span className="font-bold">${price}</span></p>
        <p className="text-gray-600">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center ">
          <button onClick={handleAddcart} className="btn bg-red-500 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;