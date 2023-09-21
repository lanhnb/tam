import * as React from 'react';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { setHeaders, url } from '../../slices/api';
import styled from '@emotion/styled';

const OrdersDetail = () => {  
  const params = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchOrder = async()=>{
      try{
        setLoading(true);
        const res = await axios.get(
          `${url}/orders/findOne/${params.id}`,
          setHeaders()
        );
        setOrder(res.data);
        setLoading(false);

      }catch(err){
        console.log(err)
      }
    };
    fetchOrder();
  }, [params.id]);
  return(
    <StyledOrder>
      {loading ?(
        <p>Loading....</p>
      ):(
        <>
        <OrderContainer>
          <h2> order detail </h2>
          <p>
            Delivery status:{" "}
            {order.delivery_status === "pending" ?(
              <Pending>Pending</Pending>
            ): order.delivery_status === "dispatched" ?(
              <Dispathched>Dispatched</Dispathched>
            ): order.delivery_status === "delivery" ? (
              <Delivered>Delivery</Delivered>
            ):("error")}
          </p>
          <h3> Ordered Product</h3>
          <Items>
            {order.products?.map((product, index)=> (
              <>
              <Item key={index}>
                <span>{product.description}</span>
                <span>{product.quantity}</span>
                <span>
                  {"$" + (product.amount_total/100).toLocaleString()}
                </span>

              </Item>
              <div>
              <h3> Total Price</h3>
             <p>{"$" + (product.amount_total/100).toLocaleString()}</p>
           </div></>
            ))}
          </Items> 
          
          <div>
            <h3> Shipping Details</h3>
            <p> Customer: {order.shipping?.name}</p>
            <p> City: {order.shipping?.address.city}</p>
            <p> Email: {order.shipping?.email}</p>
          </div>
        </OrderContainer>
        
        </>
      )}
    </StyledOrder>
  )
  
 
  };
  
  export default OrdersDetail;

const StyledOrder =styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  h3{
    margin: 1.5rem 0 0.5rem 0;
  }
`;
const View = styled.div`
background-color: rgb(114, 255, 40);
`;

const Pending = styled.div`
background-color: rgb(114, 255, 40);
`;

const OrderContainer = styled.div`
max-width: 500px;
width: 100%;
height: auto;
color: grb(253, 181, 40);
box-shadow: rgb(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 5px;
padding: 2rem;
`;
const Dispathched = styled.div`
color: grb(38, 198, 249);
background-color: rgb(38, 198, 249, 0.12);
padding: 3px 5px;
border-radius: 3px;
font-size: 14px;
`;
const Delivered = styled.div`
color: grb(38, 198, 249);
background-color: rgb(38, 198, 249, 0.12);
padding: 3px 5px;
border-radius: 3px;
font-size: 14px;
`;

const Item = styled.div`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Items = styled.div`
  span{
    margin-right:1.5rem;
    &:first-child{
      font-weight: bold;
    }
  }
`;


  



