import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;
    padding: 20px;
`;

export const CarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ControlsContainer = styled.div`
  flex-basis: 100%;
  margin-bottom: 20px;

  @media (min-width: 960px) {
    flex-basis: calc(50% - 10px); 
  }
`;

export const DetailsContainer = styled.div`
  flex-basis: 100%;
  margin-bottom: 20px;

  @media (min-width: 960px) {
    flex-basis: calc(50% - 10px);
  }
`;

export const Select = styled.select`
  padding: 8px;
`;

export const CanvasContainer = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  height: 400px;

  @media (min-width: 960px) {
    flex-basis: calc(50% - 10px); 
  }
`;

export const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
`;

export const List = styled.ul`
  margin-bottom: 15px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const Disclaimer = styled.p`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;
