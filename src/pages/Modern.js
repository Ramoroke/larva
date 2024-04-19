import React, { Component } from 'react';
import { modernCars } from '../data/cars';
import { CanvasContainer, CarContainer, CarsWrapper, ControlsContainer, DetailsContainer, Select } from '../globalStyles/styles';

class Modern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCarIndex: 0 // Default to the first car
    };
    this.carModel = null;
    this.rotationX = 0;
    this.rotationY = 0;
    this.p5Instance = null;
  }

  preload() {
    // Load the selected modern car model
    const selectedCar = modernCars[this.state.selectedCarIndex];
    this.carModel = this.p5Instance.loadModel(selectedCar.src, true);
  }

  setup() {
    this.p5Instance.createCanvas(400, 400, this.p5Instance.WEBGL);
  }

  draw() {
    this.p5Instance.background(255, 182, 0);
    this.p5Instance.orbitControl();
    let mX = this.p5Instance.mouseX - this.p5Instance.width / 2;
    let mY = this.p5Instance.mouseY - this.p5Instance.height / 2;


    this.p5Instance.ambientLight(60, 60, 60);
    this.p5Instance.pointLight(255, 255,255, mX, mY, 100);
    this.p5Instance.ambientMaterial(250);

    this.p5Instance.rotateX(this.rotationX);
    this.p5Instance.rotateY(this.rotationY);
    this.p5Instance.model(this.carModel);
  }

  handleCarChange = (index) => {
    this.setState({ selectedCarIndex: index }, () => {
      // After state is updated, reload the 3D model
      this.p5Instance.remove(); // Remove the existing p5 instance
      const sketch = (p) => {
        this.p5Instance = p;
        p.preload = this.preload.bind(this);
        p.setup = this.setup.bind(this);
        p.draw = this.draw.bind(this);
      };
      new window.p5(sketch, "p5CanvasContainer"); // Create a new p5 instance
    });
  };

  componentDidMount() {
    const sketch = (p) => {
      this.p5Instance = p;
      p.preload = this.preload.bind(this);
      p.setup = this.setup.bind(this);
      p.draw = this.draw.bind(this);
    };

    // Create a new p5 instance
    new window.p5(sketch, "p5CanvasContainer");
  }

  render() {
    const selectedCar = modernCars[this.state.selectedCarIndex];

    return (
      <>
      <CarContainer>
        <ControlsContainer>
        <label>Select a modern car:</label>
          <Select onChange={(e) => this.handleCarChange(e.target.value)} value={this.state.selectedCarIndex}>
            {modernCars.map((car, index) => (
              <option key={index} value={index}>{car.name}</option>
            ))}
          </Select>
        </ControlsContainer>
        <CarsWrapper>
        <CanvasContainer id="p5CanvasContainer"></CanvasContainer>
        <DetailsContainer>
            <h2>{selectedCar.name}</h2>
            <p>Year: {selectedCar.year}</p>
            <p>Model: {selectedCar.model}</p>
            <p>Description: {selectedCar.description}</p>
        </DetailsContainer>
        </CarsWrapper>
      </CarContainer>
      </>
    );
  }
}

export default Modern;
