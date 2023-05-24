import React, { Component } from "react";
import Okay from "./Components/Icon";
import { ToastContainer, toast } from "react-toastify";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArray: new Array(9).fill("empty"),
      isCross: false,
      winMessage: "",
    };
  }

  reloadGame = () => {
    this.setState({
      isCross: false,
      winMessage: "",
      itemArray: new Array(9).fill("empty"),
    });
  };

  checkIsWinner = () => {
    const { itemArray } = this.state;

    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      this.setState({ winMessage: `${itemArray[0]} won` });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      this.setState({ winMessage: `${itemArray[3]} won` });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      this.setState({ winMessage: `${itemArray[6]} won` });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      this.setState({ winMessage: `${itemArray[0]} won` });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      this.setState({ winMessage: `${itemArray[1]} won` });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      this.setState({ winMessage: `${itemArray[2]} won` });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      this.setState({ winMessage: `${itemArray[0]} won` });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      this.setState({ winMessage: `${itemArray[2]} won` });
    }
  };

  changeItem = (itemNumber) => {
    const { itemArray, isCross, winMessage } = this.state;

    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      this.setState({ itemArray, isCross: !isCross }, () => {
        this.checkIsWinner();
      });
    } else {
      return toast("already filled", { type: "error" });
    }
  };

  render() {
    const { itemArray, isCross, winMessage } = this.state;

    return (
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={this.reloadGame}>
                  Reload the Game
                </Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                <p>Turn of</p>
                {isCross ? "Cross" : "Circle"}
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card color="success" key={index} onClick={() => this.changeItem(index)}>
                  <CardBody className="box">
                    <Okay name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

