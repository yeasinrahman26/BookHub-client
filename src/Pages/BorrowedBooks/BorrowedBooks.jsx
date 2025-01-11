import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../Auth/AuthContext";
import BorrowedBookCard from "./BorrowedBookCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`https://library-ms-server-two.vercel.app/borrowed?email=${email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
    console.log(books);
  }, [email]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>BookHub || BorrowedBooks</title>
      </Helmet>
     <div className="mt-20 ">
       <h1 className="text-5xl text-center my-10 font-bold">
        BorrowedBooks : {books.length}{" "}
      </h1>
      <div className="grid my-10 mx-5 gap-10 px-2 grid-cols-1 md:grid-cols-2 mb-10 lg:grid-cols-3">
        {books.map((book) => (
          <BorrowedBookCard key={book._id} card={book}></BorrowedBookCard>
        ))}
      </div>
     </div>
    </div>
  );
};

export default BorrowedBooks;
