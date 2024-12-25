import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AllBookCard from "./AllBookCard";


const AllBook = () => {

  const [books,setBooks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/books")
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);
    })
  },[])



    return (
      <div>
        <Helmet>
          <title>BookHub || All Book</title>
        </Helmet>
        <h1 className="text-5xl font-bold text-center my-10 ">
          All Books: {books.length}{" "}
        </h1>
        <div className="grid gap-10 px-2 grid-cols-1 md:grid-cols-2 mb-10 lg:grid-cols-3 ">
          {books.map((book) => (
            <AllBookCard key={book._id} book={book}></AllBookCard>
          ))}
        </div>
      </div>
    );
};

export default AllBook;