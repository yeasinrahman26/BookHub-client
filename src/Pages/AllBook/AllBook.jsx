import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AllBookCard from "./AllBookCard";
import { Link } from "react-router-dom";

const AllBook = () => {
  const [books, setBooks] = useState([]);
  const [isTableView, setIsTableView] = useState(false); // State to toggle views
  const [sortedBooks, setSortedBooks] = useState([]); // State for sorted books

  useEffect(() => {
    fetch("https://library-ms-server-two.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setSortedBooks(data); // Initialize sortedBooks with the original data
      });
  }, []);

  // Toggle between card and table view
  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  // Sort books by quantity (high to low)
  const sortBooksByQuantity = () => {
    const sorted = [...books].sort(
      (a, b) => (b.quantity || 0) - (a.quantity || 0)
    );
    setSortedBooks(sorted);
    setIsTableView(false); // Switch to card view for sorting
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>BookHub || All Book</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center my-10">
        All Books: {books.length}
      </h1>
      <div className="flex justify-end gap-5 my-5 px-5">
        <button className="btn btn-primary" onClick={sortBooksByQuantity}>
          Sort by Quantity
        </button>
        <button className="btn btn-primary" onClick={toggleView}>
          {isTableView ? "Card View" : "Table View"}
        </button>
      </div>

      {isTableView ? (
        // Table View
        <div className="overflow-x-auto mx-4 sm:mx-10">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="text-lg sm:text-2xl">
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="text-sm sm:text-lg">
              {books.map((book) => (
                <tr key={book._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={
                              book.image || "https://via.placeholder.com/150"
                            }
                            alt={book.title || "No Image"}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{book.title}</div>
                        <div className="text-sm opacity-50">
                          Quantity: {book.quantity || "N/A"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{book.author_name}</td>
                  <td>{book.category}</td>
                  <td>{book.rating}</td>
                  <td>
                    <Link to={`/update/${book._id}`}>
                      <button className="btn btn-sm btn-primary">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card View
        <div className="grid gap-10 px-2 grid-cols-1 md:grid-cols-2 mb-10 lg:grid-cols-3">
          {sortedBooks.map((book) => (
            <AllBookCard key={book._id} book={book}></AllBookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBook;
