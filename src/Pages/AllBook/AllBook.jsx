import { Helmet } from "react-helmet-async";


const AllBook = () => {
    return (
      <div>
        <Helmet>
          <title>BookHub || All Book</title>
        </Helmet>
        <h1 className="text-5xl">I am All books</h1>
      </div>
    );
};

export default AllBook;