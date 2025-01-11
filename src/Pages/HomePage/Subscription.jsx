const Subscription = () => {
  return (
    <section>
      <div className="bg-gray-100 mb-10 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 mb-10">
            Select the subscription plan that fits your reading habits.
          </p>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-300 border-2 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4">1 Month</h3>
              <p className="text-xl text-gray-500 mb-6">$19.99</p>
              <p className="text-gray-600 mb-6">
                 who want to explore our collection without a
                long-term commitment.
              </p>
              {/* <button className="btn btn-primary">Subscribe</button> */}
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-300 border-2 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4">3 Months</h3>
              <p className="text-xl text-gray-500 mb-6">$49.99</p>
              <p className="text-gray-600 mb-6">
                Ideal for readers who wish to delve deeper into our library at a
                discounted rate.
              </p>
              {/* <button className="btn btn-primary">Subscribe</button> */}
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-300 border-2 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4">1 Year</h3>
              <p className="text-xl text-gray-500 mb-6">$149.99</p>
              <p className="text-gray-600 mb-6">
                Our best value plan, offering unlimited access to our entire
                collection for a year.
              </p>
              {/* <button className="btn btn-primary">Subscribe</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
