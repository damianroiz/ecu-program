import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import styled from 'styled-components';

const StyledLayout = styled.div`
height: 100vh;
position: relative;
grid-template-column: minmax(300px, 1fr);
display: grid;
align-content: space-between;
`;


function BaseLayout() {
    return (
        <StyledLayout>
        <Navbar />
        <div style={{placeContent: 'center', width: '100%', textAlign: "center"}}>
         <Outlet />
         </div>
        {/* <Footer /> */}
        </StyledLayout>
    )
}

export default BaseLayout