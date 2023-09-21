import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { setHeaders, url } from "../../slices/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";




const Product = () => {
  
  const  params = useParams();
  const [product, setProduct] = useState({});
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() =>{
    setloading(true)
    async function fetchData(){
      try{
        const res =  await axios.get(`${url}/products/find/${params.id}`, setHeaders());

       setProduct(res.data);
      }catch(err){
        console.log(err)
      }
      setloading(false)

    }
    fetchData()
  }, [params.id])

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
    navigate("/cart")
  }

  return (
    <StyleProduct>Product:
      <ProductContainer>
        {loading ? (
          <p>Loading...</p>
        ):(
        <>
        <ImageContainer>
          <img src={product.image[0]?.url} alt="product" />
        </ImageContainer>
        <ProductDetails>
          <h3>{product.name}</h3>
          <p><span>Brand</span>{product.brand}</p>
          <p><span>Description</span>{product.desc}</p>
          <Price>${product.price}</Price>
          <button className="product-add-to-cart" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </ProductDetails>
        </>
        )};
      </ProductContainer>
    </StyleProduct>
   
  );  
  
};

export default Product;

const StyleProduct = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
`;

const ProductContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 5px'
  padding: 2rem;
`;
const ImageContainer = styled.div`
  flex: 1;
  img{
    width:100%
  }
`;

const ProductDetails = styled.div`
 flex: 2;
 margin-left: 2rem;
 h3{
  font-size: 35px;
 }
 p span{
  font-weight: bold;
 }
`;
const Price = styled.div`
 margin: 1rem 0;
 font-weight: bold;
 font-size: 25px;

`
