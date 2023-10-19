const AddProduct = () => {
  
  const handleAddcars = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const newCar = {name,  brand_name, type, price, description,photo,rating}

    // send data to the server
    fetch('http://localhost:5000/cars',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data)
    })
  }


  return (
    <>
      <form  onSubmit={handleAddcars} className="card-body md:w-3/6 mx-auto">
        <div className="md:flex md:gap-6">
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
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
            className="input input-bordered"
            name="rating"
            required
          />
        </div>
        </div>

        <div className="form-control mt-6 w-52 mx-auto">
          <button className="btn text-white bg-red-500">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
