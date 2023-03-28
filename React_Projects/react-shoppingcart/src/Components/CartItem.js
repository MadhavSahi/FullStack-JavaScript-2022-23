import React from 'react';
import {CardImg,CardText,CardBody,CardTitle,Button, Card} from "reactstrap"

const CartItem = ({EachProduct,addInCart}) => {
  return (
    <>
        <Card className='mt-2 mb-1'>
            <CardImg
                top
                height="250"
                width="100%"
                src={EachProduct.SmallImage}
            />
            <CardBody className='text-center'>
               <CardTitle>{EachProduct.ProductName.toUpperCase()}</CardTitle>
               <CardText className='secondary'>
                Price is :- {EachProduct.ProductPrice} Rs</CardText>
                <Button 
                    color='success'
                    onClick={()=>(addInCart(EachProduct))}
                >
                    Add Now
                </Button>
            </CardBody>
        </Card>
    </>
  )
}

export default CartItem