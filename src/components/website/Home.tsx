import { Box } from "@mui/material";
import { Fragment } from "react";
import InformationChart from "./InformationChart";
import Landing from "./Landing";
import Plan from "./Plan";
import Benefits from "./Benefits";
import Slider from "./Slider";
import images from "../../images/images.json";

function Home() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundImage: `url(${images.homeBackgroundImage.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Landing />
        <Benefits />
        <Slider />
        <Plan />
        <InformationChart />
      </Box>
    </Fragment>
  );
}

export default Home;
