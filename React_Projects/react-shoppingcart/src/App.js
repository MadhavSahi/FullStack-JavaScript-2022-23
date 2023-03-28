import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import BuySection from "./Components/BuySection";
import CartSection from "./Components/CartSection";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

const App = () => {
  const [cartitems, setCartItems] = useState([]);

  const addInCart = (SelectedItem) => {
    const isAddedAlready = cartitems.findIndex((EachArrayItem) => {
      return EachArrayItem.ID === SelectedItem.ID;
    });

    if (isAddedAlready !== -1) {
      toast.error("This Item is already added. You can only add once !", {
        position: toast.POSITION.TOP_LEFT,
        // theme:"dark",
      });
      return;
    }
    setCartItems([...cartitems, SelectedItem]);
  };

  const buyFinal = () => {
    setCartItems([]);

    toast.success("PURCHASE COMPLETED...HOORAYY", {
      position: toast.POSITION.TOP_CENTER,
      // theme:"dark",
    });
  };

  const deleteEachItem = (SelectedItem) => {
    setCartItems(
      cartitems.filter((EachItem) => {
        return EachItem.ID !== SelectedItem.ID;
      })
    );
  };

  return (
    <>
      <Container fluid>
        <ToastContainer />
        <Row>
          <Col md="8">
            <BuySection addInCart={addInCart}></BuySection>
          </Col>
          <Col md="4">
            <CartSection
              cartitems={cartitems}
              buyFinal={buyFinal}
              deleteEachItem={deleteEachItem}
            ></CartSection>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
