import React from 'react'
import  styled  from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import NavBar from './NavBar';


function Header() {
  return (
    <MainHeader>
       
        <NavBar/>
       
    </MainHeader>
  )
}



const MainHeader =styled.header`
    height: 10rem;
    backround-color:${({theme})=>theme.colors.bg};
    
    justify-content: space-between;
   
    align-items: center;
    position: relative;

    .logo{
        height: 25rem;
    }
`;
export default Header;