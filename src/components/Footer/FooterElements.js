import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    background-color: aqua;
    padding: 20px;
    text-align: center;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterSpan = styled.span`
    font-size: 14px;
`;

export const FooterLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 14px;
`;