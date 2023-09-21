import React from "react";
import { useProductContext } from "./ProductContext";
import { styled } from "styled-components";
import Product from "./Product";



const FeatureProducts = ()=>{
    const {isLoading, featureProducts} = useProductContext();
    if (isLoading){
        return(
        <div><p>....isLoadin..</p></div>
        )
    }
    
    return( 
    
        <Wrapper>
            <div className="container">
                <div className="intro-data">Check Now</div>
                <div className="common-heading">Our Feature Service</div>
                <div className="grid grid-three-column">
                    {
                        featureProducts.map((curElem)=>{
                            return <Product key={curElem.id} {...curElem}/>

                        })
                    }
                </div>
            </div>
                
        </Wrapper>
       
    
)};

export default FeatureProducts;

const Wrapper= styled.section`
    padding: 9rem 0px;
    background-color: rgb(246, 248, 250);
    .container{
        max-width:120rem;
    }
    img{
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear 0s;
        &:hover{transform: scale(1.1, 1);
            
        }
        &::after{
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 0%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s linear 0s;
            cursor: pointer;
        

        }
    }
    

`