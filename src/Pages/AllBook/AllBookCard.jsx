import { Link } from "react-router-dom";


const AllBookCard = ({book}) => {
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
    const truncateDescription = (description, wordLimit) => {
      const words = description.split(" ");
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : description;
    };
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
          <p className="text-gray-700 ">
            <strong>Author:</strong> {author_name}
          </p>
          <p className="text-gray-700 ">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-700 ">
            <strong>Rating:</strong> {rating} / 5
          </p>
          <p className="text-gray-700 ">
            <strong>Quantity Available:</strong> {quantity}
          </p>
          <p className="text-gray-700 ">
            <strong>Short Description:</strong>{" "}
            {truncateDescription(short_description, 5)}
          </p>
          <p className="text-gray-700 ">
            <strong>Book Content:</strong>{" "}
            {truncateDescription(book_content, 10)}
          </p>
          <Link to={`/books/${_id}`}>
            <button className="btn btn-primary ">View Details</button>
          </Link>
        </div>
      </div>
    );
};

export default AllBookCard;