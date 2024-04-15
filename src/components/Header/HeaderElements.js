import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 2px solid black;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: cadetblue;
    font-size: xx-large;

    @media screen and (max-width: 768px) {
        &:nth-child(2) {
            display: none;
        }
    }
`;
