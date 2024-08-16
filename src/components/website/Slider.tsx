import { Container } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Container sx={{ pb: 10 }}>
      <Carousel variant="dark">
        <Carousel.Item interval={3000}>
          <img
            src="https://www.dli-it.com/wp-content/uploads/2022/12/banner-nw1.jpg"
            className="d-block w-100"
            alt="First Slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://www.dli-it.com/wp-content/uploads/2022/12/banner-nw2.jpg"
            className="d-block w-100"
            alt="Second Slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src="https://www.dli-it.com/wp-content/uploads/2022/12/banner-nw3.jpg"
            className="d-block w-100"
            alt="Third Slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;
