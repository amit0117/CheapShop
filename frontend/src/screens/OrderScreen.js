import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVERED_RESET,
} from "../constants/orderConstants.js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sdkReady, setSdkReady] = useState(false);
  const [paypalClientId, setPaypalClientId] = useState("");
  const { id } = useParams();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { success: successDeliver, loading: loadingDeliver } = orderDeliver;
  if (!loading && order) {
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimal(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    const loadPayPalClientId = async () => {
      try {
        const { data: clientId } = await axios.get("/api/config/paypal");
        setPaypalClientId(clientId);
        setSdkReady(true);
      } catch (error) {
        console.error("Failed to load PayPal client ID:", error);
      }
    };

    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVERED_RESET });
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid && !paypalClientId) {
      loadPayPalClientId();
    }
  }, [
    dispatch,
    id,
    successPay,
    order,
    successDeliver,
    navigate,
    userInfo,
    paypalClientId,
  ]);

  const successPaymentHandler = (paymentResult) => {
    // console.log(paymentResult)
    dispatch(payOrder(id, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        // <h1>orderscreen show</h1>
        <Row className="mt-md-4">
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className="text-center">Shipping</h2>
                <p>
                  <strong>Name: </strong>
                  {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {order.user.email}
                </p>
                <p>
                  <strong>Address: </strong>
                  {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Message variant="success">
                    Delivered on {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant="danger">Not Delivered</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2 className="text-center">Payment Method</h2>
                <p>
                  <strong>Method: </strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant="danger">Not Paid</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2 className="text-center">Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <Message>Your order is empty</Message>
                ) : (
                  <ListGroup.Item variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1} className="mb-2">
                            <Link to={`/products/${item.product}`}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                style={{ borderRadius: "5%" }}
                              />
                            </Link>
                          </Col>
                          <Col>
                            <Link to={`/products/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            ({item.qty}*Rs{item.price})=Rs
                            {(item.qty * item.price).toFixed(2)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup.Item>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 className="text-center">Order Summary</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items Price</Col>
                    <Col>Rs{order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping Price</Col>
                    <Col>Rs{order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>Rs{order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Price</Col>
                    <Col>Rs{order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              {!order.isPaid && (
                <ListGroup.Item>
                  {
                    <ListGroup.Item className="mt-md-3 mt-sm-2">
                      {loadingPay && <Loader />}
                      {!sdkReady || !paypalClientId ? (
                        <Loader />
                      ) : (
                        <PayPalScriptProvider
                          options={{
                            "client-id": paypalClientId,
                            currency: "USD",
                          }}
                        >
                          <PayPalButtons
                            createOrder={(data, actions) => {
                              return actions.order.create({
                                purchase_units: [
                                  {
                                    amount: {
                                      value: order.totalPrice.toString(),
                                    },
                                  },
                                ],
                              });
                            }}
                            onApprove={(data, actions) => {
                              return actions.order.capture().then((details) => {
                                successPaymentHandler(details);
                              });
                            }}
                          />
                        </PayPalScriptProvider>
                      )}
                    </ListGroup.Item>
                  }
                  {loadingDeliver && <Loader />}
                  {userInfo &&
                    userInfo.isAdmin &&
                    order.isPaid &&
                    !order.isDelivered && (
                      <ListGroup.Item>
                        <Button
                          type="button"
                          className="btn btn-block"
                          onClick={deliverHandler}
                        >
                          Mark As Delivered
                        </Button>
                      </ListGroup.Item>
                    )}
                </ListGroup.Item>
              )}
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default OrderScreen;
