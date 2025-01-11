import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../Auth/AuthContext";

const BookDetails = () => {
  const book = useLoaderData();

  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    image,
    quantity,
    author_name,
    category,
    short_description,
    rating,
    book_content,
  } = book;

  const [submit, setSubmit] = useState(false);
  const handleBorrow = (e) => {
    setSubmit(true);
    e.preventDefault();

    // Collecting form data
    const form = e.target;
    const returnDate = form.returnDate.value;
    const userName = user.displayName;
    const userEmail = user.email;

    const bookDetails = {
      book_id: _id,
      title: title,
      image: image,
      quantity: quantity,
      author_name: author_name,
      category: category,
      short_description: short_description,
      rating: rating,
      book_content: book_content,
      userName,
      userEmail,
      returnDate,
    };

    fetch("https://library-ms-server-two.vercel.app/borrowed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book Borrowed Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data.insertedId);
          const modal = document.getElementById("auth-modal");
          modal.checked = false;
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Book already  Borrowed !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-base-200">
      <div className="flex max-w-4xl mx-auto my-10 p-4">
        <div className="flex-1 mr-8">
          <img
            src={image}
            alt={title}
            className="w-full border p-2 bg-[#e4d9d97a] h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 my-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="mb-4 space-y-3">
            <p className="text-xl font-semibold">
              <strong>Author:</strong> {author_name}
            </p>
            <p className="text-xl font-semibold">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-xl font-semibold">
              <strong>Quantity Available:</strong> {quantity}
            </p>
            <p className="text-xl font-semibold">
              <strong>Rating:</strong> {rating}/5
            </p>
            <p className="text-gray-700">
              <strong>Short Description:</strong> {short_description}
            </p>
            <p className="text-gray-700">
              <strong>Book Content:</strong> {book_content}
            </p>
          </div>
          {/* modal start */}
          <div>
            {/* modal btn */}
            <label htmlFor="auth-modal" className="btn btn-primary">
              Borrow
            </label>
            <input type="checkbox" id="auth-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="auth-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Fill in the details</h3>
                <form className="space-y-4 mt-4" onSubmit={handleBorrow}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName || ""}
                      placeholder="Enter your name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email || ""}
                      placeholder="name@company.com"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Return Date</span>
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <button
                    disabled={submit}
                    htmlFor="auth-modal"
                    className="btn btn-primary  w-full py-2 mt-4"
                  >
                    {submit ? "Submitted" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
