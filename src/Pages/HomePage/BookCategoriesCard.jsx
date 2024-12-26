

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
          
        </div>
      </div>
    );
};

export default BookCategoriesCard;