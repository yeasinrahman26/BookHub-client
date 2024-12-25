import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BookCategories from "./BookCategories";
import Review from "./Review";
import Subscription from "./Subscription";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookHub || Home</title>
      </Helmet>
      <Banner></Banner>
      <BookCategories></BookCategories>
      <Review></Review>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
