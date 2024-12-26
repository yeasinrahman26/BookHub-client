import { Link } from "react-router-dom";

const BorrowedBookCard = ({card}) => {
    const { _id, title, image, quantity, author_name, category, returnDate } =
      card;
    return (
      <div>
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
              <strong>Quantity Available:</strong> {quantity}
            </p>
            <p className="text-gray-700 ">
              <strong>Return Date :</strong> {returnDate}
            </p>

              <button className="btn mt-4  btn-primary ">Return</button>
            
          </div>
        </div>
      </div>
    );
};

export default BorrowedBookCard;