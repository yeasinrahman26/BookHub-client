import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form=e.target
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    fetch('http://localhost:5000/books', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book Added",
            showConfirmButton: false,
            timer: 1500,
          });
       
        }
      });
      form.reset()

  };

  return (
    <div>
      <Helmet>
        <title>BookHub || Add Book</title>
      </Helmet>
      <div className="mx-10 my-10">
        <h2 className="text-4xl mb-5 text-center font-bold">Add A New Book</h2>
        <form
          onSubmit={handleAddBook}
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

          {/* Short Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              name="short_description"
              placeholder="Enter a brief description"
              className="textarea textarea-bordered"
              required
            ></textarea>
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

          {/* Book Content */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Content</span>
            </label>
            <textarea
              name="book_content"
              placeholder="Enter book content"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
