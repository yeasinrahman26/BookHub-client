import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://library-ms-server-two.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div  className="bg-base-200 rounded-md py-10"> 
      <h1 className="text-4xl  font-bold text-center mb-10">Check our new Collection</h1>
      <Marquee pauseOnClick='true' pauseOnHover="false">
        {books.map((book) => (
          <div key={book._id} className="card w-48 h-72 mx-4  ">
            <figure className="max-h-52 hover:max-h-72 h-full rounded-lg">
              <Link to={`/books/${book._id}`}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full rounded-2xl h-full object-cover"
                />
              </Link>
            </figure>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeCard;
