import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const book=useLoaderData()
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
      <div className="bg-base-200">
        <div className="flex max-w-4xl  mx-auto my-10 p-4">
          {/* Image Section */}
          <div className="flex-1 mr-8">
            <img
              src={image}
              alt={title}
              className="w-full border p-2 bg-[#e4d9d97a] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Book Details Section */}
          <div className="flex-1 my-auto ">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>

            <div className="mb-4 space-y-3 ">
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
              <p className="text-gray-700 ">
                <strong>Short Description:</strong>
                {short_description}
              </p>
              <p className="text-gray-700 ">
                <strong>Book Content:</strong> {book_content}
              </p>
            </div>

            {/* Borrow Button */}
            <div>
              <button className="btn btn-primary w-full py-2 mt-4">
                Borrow
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;