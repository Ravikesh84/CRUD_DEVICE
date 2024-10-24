import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/products/${id}`, product)
      .then(() => navigate("/admin/products"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-4">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={product.name || ""} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Brand</label>
          <input type="text" name="brand" className="form-control" value={product.brand || ""} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input type="text" name="category" className="form-control" value={product.category || ""} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input type="text" name="description" className="form-control" value={product.description || ""} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input type="number" name="price" className="form-control" value={product.price || ""} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
