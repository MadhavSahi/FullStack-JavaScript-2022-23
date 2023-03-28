import React from 'react';
import {ListGroup,ListGroupItem,Container,CardHeader,CardBody,CardFooter,Button,Row,Col,Card} from "reactstrap";



const CartSection = ({cartitems,buyFinal,deleteEachItem}) => {

    let totalPrice=0;
    cartitems.forEach(eachItem => {
        totalPrice=parseFloat(totalPrice) + parseFloat(eachItem.ProductPrice);
    });

  return (
    <>
        <Container fluid>
            <h1 className='text-success'>Your Cart</h1>
            <ListGroup>
                {cartitems.map(item=>(
                    <ListGroupItem key={item.ID}>
                        <Row>
                            <Col>
                                <img 
                                    alt='laptop'
                                    height={80}
                                    src={item.TinyImage}
                                />
                            </Col>
                            <Col className='text-center'>
                                <div className='text-primary'>
                                    {item.ProductName}
                                </div>
                                <span>Price :- {item.ProductPrice}</span>
                                <Button 
                                color="danger" 
                                onClick={()=>deleteEachItem(item)}
                                >Remove
                                </Button>
                            </Col>
                        </Row>    
                     </ListGroupItem>


                ))}
            </ListGroup>

        {//conditional rendering
            cartitems.length >=1 ? (
                <Card className='text-center mt-3'>
                    <CardHeader>Grand Total</CardHeader>
                    <CardBody>
                        Your Amount for {cartitems.length} is {totalPrice}
                    </CardBody>
                    <CardFooter>
                        <Button
                        color='success'
                        onClick={buyFinal}
                        >Buy All</Button>
                    </CardFooter>
                </Card>
            ):(
                <h1 className='text-warning'>Cart Is Empty</h1>
            )
        }

        </Container>

    </>
  );
};

export default CartSection;