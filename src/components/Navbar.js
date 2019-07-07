import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";
import SearchForm from "./SearchForm"; 

export default class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
            <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" 
                        className="nav-link">
                        products
                        </Link>
                    </li>
                </ul>
                <SearchForm />
                {/* <Link to="/carousel">Carousel</Link> */}
                <Link to="/cart" className="ml-auto">
                {/* <ProductConsumer> */}
                {(value) => {
                    const cartItemCount = value.cartItemCount;
                        return (
                            <ButtonContainer>
                                <span className="mr-2">
                                    <i className="fa fa-cart-plus"/>
                                </span>
                                my cart ({cartItemCount})
                            </ButtonContainer>
                        )

                }
                
                /* <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                    <span className="mr-2">
                        <i className="fa fa-cart-plus"/>
                    </span>
                    my cart ({this.props.cartItemCount})
                    </ButtonContainer> */}
                {/* </ProductConsumer> */}
                </Link>
            </NavWrapper>
        </ProductConsumer>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainGreen);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`
