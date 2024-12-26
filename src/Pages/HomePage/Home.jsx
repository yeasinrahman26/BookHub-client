import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import Review from "./Review";
import Subscription from "./Subscription";
import BookCategoryCard from "./BookCategoryCard";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookHub || Home</title>
      </Helmet>
      <Banner></Banner>
      <BookCategoryCard></BookCategoryCard>
      <Review></Review>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
