import { Link } from "react-router-dom";


const BookCategoryCard = () => {
    return (
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center mb-10">
        <div className="card bg-base-100 border-2 shadow-xl p-4 rounded-lg">
          <Link to={"/books/category/Drama"}>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Drama</h2>
            </div>
          </Link>
        </div>
        <div className="card bg-base-100 border-2 shadow-xl p-4 rounded-lg">
          <Link to={"/books/category/Thriller"}>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Thriller</h2>
            </div>
          </Link>
        </div>
        <div className="card bg-base-100 border-2 shadow-xl p-4 rounded-lg">
          <Link to={"/books/category/Sci-Fi`"}>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Sci-Fi</h2>
            </div>
          </Link>
        </div>
        <div className="card bg-base-100 border-2 shadow-xl p-4 rounded-lg">
          <Link to={"/books/category/Novel"}>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Novel</h2>
            </div>
          </Link>
        </div>
      </div>
    );
};

export default BookCategoryCard;