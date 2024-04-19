import React from 'react'

import { 
  AboutWrapper,
  Title,
  Paragraph,
  Subtitle,
  List,
  ListItem,
  Disclaimer
} from '../globalStyles/styles'

function Info() {
  return (
    <AboutWrapper>
      <Disclaimer>
        Disclaimer: This website is for informational purposes only. The information provided here may not always be accurate and should not be considered as professional advice. Always consult with a qualified expert before making any decisions based on the information provided on this site. Also note the site is for demonstration only and most of the text is ai generated.
      </Disclaimer>
      <Title>Welcome to our Classic and Modern Car Showcase</Title>
      <Paragraph>
        Where automotive enthusiasts unite to explore the timeless elegance and cutting-edge technology of iconic vehicles from past and present.
      </Paragraph>
      <Subtitle>About Us</Subtitle>
      <Paragraph>
        At Classic and Modern Car Showcase, we're passionate about automobiles that transcend time. Whether you're drawn to the nostalgia of vintage classics or the innovation of modern marvels, our platform celebrates the artistry, engineering, and heritage behind each vehicle.
      </Paragraph>
      <Subtitle>What We Offer</Subtitle>
      <List>
        <ListItem><strong>Extensive Collection:</strong> Immerse yourself in our curated selection of classic and modern cars from renowned manufacturers worldwide. From vintage beauties that defined eras to sleek, state-of-the-art machines pushing the boundaries of automotive innovation, there's something for every enthusiast.</ListItem>
        <ListItem><strong>Interactive Experience:</strong> Get up close and personal with each car through our interactive platform. Explore high-definition images, detailed specifications, and immersive 360-degree views that bring every curve and contour to life.</ListItem>
        <ListItem><strong>Virtual Showroom:</strong> Step into our virtual showroom, where you can wander among rows of meticulously restored classics and the latest models fresh off the assembly line. Our user-friendly interface allows you to navigate effortlessly and discover your dream car with ease.</ListItem>
        <ListItem><strong>Community Engagement:</strong> Connect with fellow enthusiasts, share stories, and exchange insights in our vibrant community forums. Whether you're a seasoned collector or a newcomer to the world of automobiles, our community is a welcoming space where passion knows no bounds.</ListItem>
        <ListItem><strong>Educational Resources:</strong> Delve deeper into the history, design, and technology behind your favorite cars with our comprehensive articles and resources. From in-depth retrospectives on classic models to behind-the-scenes looks at the latest automotive innovations, there's always something new to learn.</ListItem>
        <ListItem><strong>Event Coverage:</strong> Stay informed about upcoming automotive events, exhibitions, and auctions happening around the world. Whether you're attending in person or following from afar, our event coverage keeps you in the loop with the latest happenings in the automotive industry.</ListItem>
      </List>
      <Subtitle>Why Choose Us</Subtitle>
      <List>
        <ListItem><strong>Authenticity:</strong> We're committed to delivering accurate, reliable information and showcasing only the highest-quality vehicles.</ListItem>
        <ListItem><strong>Passion:</strong> Our team shares your love for cars and is dedicated to creating an engaging, immersive experience for enthusiasts of all backgrounds.</ListItem>
        <ListItem><strong>Accessibility:</strong> Whether you're a casual admirer or a die-hard aficionado, our platform is designed to be accessible and enjoyable for everyone.</ListItem>
        <ListItem><strong>Continual Improvement:</strong> We're constantly evolving and innovating to enhance your experience and provide fresh content that keeps you coming back for more.</ListItem>
      </List>
      <Paragraph>
        Join us on a journey through automotive history and innovation at Classic and Modern Car Showcase. Start exploring today and ignite your passion for the open road.
      </Paragraph>
    </AboutWrapper>
  )
}

export default Info