import Swal from "sweetalert2";

const BorrowedBookCard = ({ card }) => {
  const { _id, title, image, quantity, author_name, category, returnDate } =
    card;
    
  const handleReturn = (_id) => {
    //    e.preventDefault();
    console.log(_id);
    Swal.fire({
      title: "Are you sure you want to Return?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/borrowed/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Return!",
                text: "Your Book has been return.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card bg-base-100 border-2 shadow-xl p-4 rounded-lg">
        <figure>
          <img
            src={image}
            alt={title}
            className="h-48 border p-1 border-black  object-cover rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold ">{title}</h2>
          <p className="text-gray-700 ">
            <strong>Author:</strong> {author_name}
          </p>
          <p className="text-gray-700 ">
            <strong>Category:</strong> {category}
          </p>

          <p className="text-gray-700 ">
            <strong>Quantity Available:</strong> {quantity}
          </p>
          <p className="text-gray-700 ">
            <strong>Return Date :</strong> {returnDate}
          </p>

          <button
            onClick={() => handleReturn(_id)}
            className="btn mt-4  btn-primary "
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
