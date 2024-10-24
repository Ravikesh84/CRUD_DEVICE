import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let url = "http://localhost:3000/products";
    axios.get(url).then((res) => {
      setmydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          loadData(); // Reload data after deletion
        })
        .catch((err) => console.log(err));
    }
  };

  let ans = mydata.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.brand}</td>
        <td>{key.category}</td>
        <td>{key.description}</td>
        <td>{key.price}</td>
        <td>
          <img
            src={`/images/${key.images}`}  // Adjusted path
            width="100"
            alt={key.name}
          />
        </td>
        <td style={{ width: "10px", whiteSpace: "nowrap" }}>
          <Link className="btn btn-primary btn-sm me-1" to={`/edit/${key.id}`}>
            Edit
          </Link>
          <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(key.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row-mb-3">
        <div className="col">
          <Link
            className="btn btn-primary me-1"
            to="/admin/products/create"
            role="button"
          >
            Create Product
          </Link>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={loadData}
          >
            Refresh
          </button>
        </div>
        <div className="col"></div>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default ProductList;
