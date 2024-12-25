import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Banner = () => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const slides = [
      {
        id: 1,
        title: "Explore Our Extensive Collection",
        description: "Access thousands of books across various genres.",
      },
      {
        id: 2,
        title: "Stay Updated with Latest Arrivals",
        description: "Discover new books added to our collection regularly.",
      },
      {
        id: 3,
        title: "Manage Your Borrowing Seamlessly",
        description: "Track your borrowed books and due dates effortlessly.",
      },
      {
        id: 4,
        title: "Join Our Community",
        description:
          "Connect with fellow book enthusiasts and share your reviews.",
      },
    ];
    return (
      <div>
        <div className="w-full py-10 mx-auto">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex flex-col items-center 
                justify-center h-64 md:h-40 bg-gradient-to-r from-[#0e0c57]  to-blue-500 text-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
};

export default Banner;