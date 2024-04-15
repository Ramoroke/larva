import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
    position: relative;
    height: 90vh;
`;

export const HeroWrapper = styled.div`
    position: relative;
    height: 100%;
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const HeroText = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
`;

export const HeroH1 = styled.h1`
    font-size: 3rem;
`;

export const HeroP = styled.p`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

export const HeroButton = styled.button`
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

export const HeroButtonLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;


export const HeroLeftArrow = styled(FaChevronLeft)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    z-index: 100;
    left: 10px;
`;

export const HeroRightArrow = styled(FaChevronRight)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    z-index: 100;
    right: 10px;
`;