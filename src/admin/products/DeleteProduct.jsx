import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        toast.success("Product deleted successfully!");
        setTimeout(() => navigate("/admin/products"), 2000); // Redirect after 2 seconds
      })
      .catch((err) => {
        toast.error("Failed to delete the product. Please try again.");
        console.log(err);
      });
  };

  return (
    <div className="container my-4">
      <h2>Are you sure you want to delete this product?</h2>
      <button className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
      <button className="btn btn-secondary" onClick={() => navigate("/admin/products")}>Cancel</button>
      {/* Ensure ToastContainer is here for this component */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
    </div>
  );
};

export default DeleteProduct;
