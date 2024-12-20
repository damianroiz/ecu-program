import React from 'react'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components';


export const StyledSection = styled.section`   
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    align-content: center;
    justify-items: center;
    gap: 2rem;
    padding-block: 12rem;
    h1 {
        margin-left: -6px;
    }
`
function Contact() {
    return (
        <StyledSection>
            <h1>Contact Us</h1>
            <ContactForm /> 
        </StyledSection>
    )
}

export default Contact

