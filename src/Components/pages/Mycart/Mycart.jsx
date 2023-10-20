import Swal from "sweetalert2";


const Mycart = ({cart, carts, setCarts}) => {
  const {_id, name,photo, brand_name, price, description, rating, type} = cart
  console.log(_id);

  const handleDelete = _id =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed){
        console.log("delete conform");
        fetch(`http://localhost:5000/carts/${_id}`,{
          method: "DELETE",
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.deletedCount >0){
            Swal.fire(
              'Deleted!',
              'Your Coffee has been deleted.',
              'success'
            )
            const remaining = carts.filter(deletecart => deletecart._id !== _id);
            // console.log(carts);
            // console.log(remaining);
            setCarts(remaining); 
          }
          console.log(data)
        })
      }
  })
  }


  return (
    <div>
      <div className="card bg-gray-800 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body text-white">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <div className="flex justify-between">
            <p className="text-lg font-semibold uppercase"> {brand_name}</p>
          </div>
          <div className="flex justify-between">
          <p className="text-lg">Price : ${price}</p>
          </div>
          <div className="card-actions justify-end mt-2 -mb-3 ">
            <button onClick={() =>handleDelete(_id)} className="btn btn-sm btn-info btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;