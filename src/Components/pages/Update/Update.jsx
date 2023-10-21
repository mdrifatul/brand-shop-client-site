import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Update = () => {
  const cars = useLoaderData();
  // console.log(cars);
  const  {_id,name,  brand_name, type, price, description,photo,rating} = cars

  const handleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const updateCar = {name,  brand_name, type, price, description,photo,rating}
    // console.log(updateCar);


    fetch(`http://localhost:5000/cars/${_id}`,{
      method: "PUT",
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updateCar)
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data)
      if(data.modifiedCount >0){
        Swal.fire({
          title: 'Success',
          text: 'Add Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div>
      <form  onSubmit={handleUpdate} className="card-body md:w-3/6 mx-auto">
        <div className="md:flex md:gap-6">
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={name}
            className="input input-bordered mb-2"
            required
          />
        </div>
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input
            type="text"
            placeholder="Brand Name"
            defaultValue={brand_name}
            className="input input-bordered"
            name="brand_name"
            required
          />
        </div>
        </div>
        <div className="md:flex md:gap-6">
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input
            type="text"
            placeholder="Type"
            defaultValue={type}
            className="input input-bordered mb-2"
            name="type"
            required
          />
        </div>
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            defaultValue={price}
            className="input input-bordered"
            name="price"
            required
          />
        </div>
        </div>
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short Description"
            defaultValue={description}
            className="input input-bordered w-full"
            name="description"
            required
          />
        </div>
        <div className="md:flex md:gap-6">
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            defaultValue={photo}
            className="input input-bordered mb-2"
            name="photo"
            required
          />
        </div>
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            placeholder="Rating"
            min="0"
            max="10"
            defaultValue={rating}
            className="input input-bordered"
            name="rating"
            required
          />

        </div>
        </div>

        <div className="form-control mt-6 w-52 mx-auto">
          <button className="btn text-white bg-red-500">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Update;