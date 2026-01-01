import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  FormLabel,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Image } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import {
  listProductDetails,
  updateProduct,
} from "../actions/productActions.js";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstant.js";
const ProductEditScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const userInfo = useSelector((state) => state.userLogin).userInfo;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate("/admin/productlist");
      dispatch(listProductDetails(id));
    } else {
      if (product && (!product.name || product._id !== id)) {
        dispatch(listProductDetails(id));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [product, id, dispatch, navigate, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    setUploadError("");

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploadError(
        err.response?.data?.message || err.message || "Image upload failed"
      );
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };

  return (
    <Container>
      <FormContainer>
        <h2 className="text-center">Update Product</h2>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {uploadError && <Message variant="danger">{uploadError}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Amit Kumar "
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="price">
              <FormLabel>Price </FormLabel>
              <FormControl
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="image" className="mt-2">
              <Form.Group
                controlId="formFileMultiple"
                className="mb-3 mt-3 d-flex flex-column align-items-start justify-content-center"
              >
                <Form.Label>Image</Form.Label>
                {image && image.trim() !== "" && (
                  <div className="my-3">
                    <Image
                      src={image}
                      alt="Product preview"
                      fluid
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        display: "block",
                      }}
                    />
                  </div>
                )}
                <Form.Control
                  type="file"
                  multiple={false}
                  onChange={uploadFileHandler}
                  accept="image/*"
                  style={{ display: "none" }}
                  id="image-upload-input"
                />
                <Form.Label
                  htmlFor="image-upload-input"
                  className="btn btn-outline-primary"
                  style={{ cursor: "pointer" }}
                >
                  {image?.trim() !== "" ? "Change Image" : "Choose Image"}
                </Form.Label>
                <Form.Text className="text-muted d-block mt-2">
                  {image
                    ? "Click to select a new image to replace the current one"
                    : "Click to select an image to upload"}
                </Form.Text>
              </Form.Group>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group controlId="brand">
              <FormLabel>Brand </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="countinstock">
              <FormLabel>Count In Stock </FormLabel>
              <FormControl
                type="number"
                placeholder="Enter CountInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="category">
              <FormLabel>Category </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Form.Group controlId="description">
              <FormLabel>Description </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Row>
              <Col md={8}>
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-md-3 mt-sm-3"
                >
                  Update Product
                </Button>
              </Col>
              <Col md={4}>
                <Link to="/admin/productlist" className="btn btn-primary my-3">
                  Go Back
                </Link>
              </Col>
            </Row>
          </Form>
        )}
      </FormContainer>
    </Container>
  );
};

export default ProductEditScreen;
