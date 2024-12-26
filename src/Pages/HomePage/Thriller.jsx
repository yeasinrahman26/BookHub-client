import { useEffect, useState } from "react";
import BookCategoriesCard from "./BookCategoriesCard";

const Thriller = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books/category/Thriller`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-center my-10 font-bold text-5xl">
        Book Categories: Thriller
      </h1>
      <div className="grid px-4 gap-5 grid-cols-3">
        {Categories.map((book) => (
          <BookCategoriesCard key={book._id} book={book}></BookCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Thriller;
