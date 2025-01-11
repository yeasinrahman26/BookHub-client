import { useEffect, useState } from "react";
import BookCategoriesCard from "./BookCategoriesCard";

const Drama = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://library-ms-server-two.vercel.app/books/category/Drama`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="my-20 min-h-screen ">
      <h1 className="text-center mb-20 font-bold text-5xl">
        Book Categories: Drama
      </h1>
      <div className="grid grid-cols-1 px-4 gap-5 md:grid-cols-3">
        {Categories.map((book) => (
          <BookCategoriesCard key={book._id} book={book}></BookCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Drama;
