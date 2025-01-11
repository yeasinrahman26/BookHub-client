import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import Review from "./Review";
import Subscription from "./Subscription";
import BookCategoryCard from "./BookCategoryCard";
import HomeCard from "./HomeCard";


const Home = () => {
  return (
    <div className="space-y-24 pt-24 pb-16">
      <Helmet>
        <title>BookHub || Home</title>
      </Helmet>
      <Banner></Banner>
      <BookCategoryCard></BookCategoryCard>
      <HomeCard></HomeCard>
      <Review></Review>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
