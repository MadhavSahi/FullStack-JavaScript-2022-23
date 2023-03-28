import React, { useEffect, useState } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const BuySection = ({ addInCart }) => {
  const [products, setProducts] = useState([]);

  const url =
    "https://jsonware.com/api/v1/json/e56be862-0582-4655-b667-550b401270a4";

  const fetchPhotos = async () => {
    const response = await Axios.get(url);
    const data = response?.data;
    const photos = data?.photos;
    // console.log(data);
    // console.log(photos);
    const allProducts = photos.map((eachPhoto) => {
      return {
        ID: random.uuid(),
        ProductName: random.word(),
        ProductPrice: commerce.price(),
        SmallImage: eachPhoto.src.medium,
        TinyImage: eachPhoto.src.tiny,
      };
    });
    setProducts(allProducts);
    // setProducts(photos)
  };

  useEffect(() => {
    //to load photos on the 1st render only.
    fetchPhotos();
  }, []);

  return (
    <>
      <Container fluid>
        <h1 className="text-success text-center">Buy Page</h1>
        <Row>
          {products.map((individualProduct) => (
            <Col md={4} key={individualProduct.ID}>
              <CartItem addInCart={addInCart} EachProduct={individualProduct} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BuySection;
