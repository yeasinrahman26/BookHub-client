import { Link } from "react-router-dom";


const BookCategoriesCard = ({book}) => {
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
    return (
      <div className="card bg-base-100 border-2 shadow-xl p-4 rounded-lg">
        <figure>
          <img
            src={image}
            alt={title}
            className="h-48 border p-1 border-black  object-cover rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold ">{title}</h2>
          <div className="grid gap-4 grid-cols-2">
            <div className="">
              <p className="text-gray-700 ">
                <strong>Author :</strong>
              </p>
              <p className="text-gray-700 ">
                <strong>Category :</strong>
              </p>
              <p className="text-gray-700 ">
                <strong>Rating :</strong>
              </p>
              <p className="text-gray-700 ">
                <strong>Available :</strong>
              </p>
            </div>
            {/*  */}
            <div className="">
              <p className="text-gray-700  ">{author_name}</p>
              <p className="text-gray-700  ">{category}</p>
              <p className="text-gray-700 ">{rating} / 5</p>
              <p className="text-gray-700 ">{quantity}</p>
            </div>
          </div>
          <Link to={`/books/${_id}`}>
            <button className="btn btn-primary mt-5">Details</button>
          </Link>
        </div>
      </div>
    );
};

export default BookCategoriesCard;