import styled from "styled-components";

export const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TabWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: border-color 0.3s ease;

    &.active-tab {
    border-color: #007bff;
  }
`;

export const TabContent = styled.div`
    margin-top: 20px;
    padding: 20px;
    border: 2px solid #007bff;
    border-radius: 8px;
    width: 80%;
`;

export const TabImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const TabP = styled.p`
    margin-top: 10px;
`;
  
  