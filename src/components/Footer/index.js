import React from 'react'
import { PiButterflyBold } from "react-icons/pi";
import { FooterContent, FooterLink, FooterSpan } from './FooterElements'

function Footer() {
  return (
      <Footer>
        <FooterContent>
          <FooterLink to="/"><PiButterflyBold /></FooterLink>
          <FooterSpan>2024 Your Company Name. All rights reserved.</FooterSpan>
          <FooterLink to="/terms">Terms and Conditions</FooterLink>
        </FooterContent>
      </Footer>
  )
}

export default Footer
