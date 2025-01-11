

const Review = () => {
 

  return (
    <section className="my-10">
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* review-1 */}
            <div className="p-6 bg-white rounded-lg shadow-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEb_fS0QIWrPg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696433489258?e=2147483647&v=beta&t=ey_VwwYw7OPKADiOwmWNiPncaqps7h-HU3ULVQRO678"
                  alt="Jane Doe"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Jane Doe</h3>
                  <div className="flex text-yellow-500">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.416 8.263L12 18.897l-7.416 4.634L6 15.268 0 9.423l8.332-1.268L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                A seamless borrowing experience. Love the user-friendly
                interface.
              </p>
            </div>

            {/* review-2 */}
            <div className="p-6 bg-white rounded-lg shadow-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQx4KmgyXEHyQT3UG5qIrGijZlLZ4unQtOONp4GJGnFvEpk50TIBCdV0VCiwk1mmYyIrk&usqp=CAU"
                  alt="John Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Smith</h3>
                  <div className="flex text-yellow-500">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.416 8.263L12 18.897l-7.416 4.634L6 15.268 0 9.423l8.332-1.268L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                The latest arrivals are always up-to-date. Great platform!
              </p>
            </div>

            {/* review-3 */}
            <div className="p-6 bg-white rounded-lg shadow-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s"
                  alt="Harry Smith"
                  className="w-12 h-12  rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Harry Smith</h3>
                  <div className="flex text-yellow-500">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.416 8.263L12 18.897l-7.416 4.634L6 15.268 0 9.423l8.332-1.268L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Easy to navigate and find the books I need.
              </p>
            </div>

            {/* review-4 */}
            <div className="p-6 bg-white rounded-lg shadow-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HWq0kyACp0iGg7An6pfyjsRtVdma0AzWH8kQFXgqL9cx9X0I_CHM3KMW_PFXnRwxReY&usqp=CAU"
                  alt="Donal Trump"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Donal Trump</h3>
                  <div className="flex text-yellow-500">
                    {/* Star Rating */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.416 8.263L12 18.897l-7.416 4.634L6 15.268 0 9.423l8.332-1.268L12 .587z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                BookHub has an extensive collection of books. Highly recommend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
