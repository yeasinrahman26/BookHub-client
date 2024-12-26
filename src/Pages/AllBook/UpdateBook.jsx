import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData, id);
    form.reset();

    const data = {
      title: initialData.title,
      quantity: initialData.quantity,
      author_name: initialData.author_name,
      category: initialData.category,
      rating: initialData.rating,
      image: initialData.image,
    };
    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/allBook");
      });
  };
  return (
    <div>
      <div className="mx-10 my-10">
        <form
          onSubmit={(e) => handleUpdate(e, book._id)}
          className="bg-base-300 max-w-3xl mx-auto rounded-2xl card-body"
        >
          {/* Book Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter book title"
              className="input input-bordered"
              required
            />
          </div>
          {/* Image Upload */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Cover Image</span>
            </label>
            <input
              type="url"
              name="image"
              accept="image/*"
              className="input input-bordered"
              required
            />
          </div>

          {/* Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="input input-bordered"
              min="0"
              required
            />
          </div>

          {/* Author Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="author_name"
              placeholder="Enter author name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered" required>
              <option value="">Select category</option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating (1-5)</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating"
              className="input input-bordered"
              min="1"
              max="5"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
