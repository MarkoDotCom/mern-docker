import React from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";
// import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import TranslateTwoToneIcon from "@mui/icons-material/TranslateTwoTone";
import LayersIcon from "@mui/icons-material/Layers";


const styles = {
  color: "#ffffff",
  fontSize: {
    xs: "3rem",
    md: "4rem",
  },
  // border:1,
  mr: "1.5rem"
};

const Icon_01 = ({ icon }) => {
  switch (icon) {
    case "person":
      return <PersonOutlineTwoToneIcon sx={styles} />;
    case "diamond":
      return (
        <DiamondTwoToneIcon
          sx={styles}
        />
      );
    case "homework":
      return (
        <Diversity3TwoToneIcon
          sx={styles}
        />
      );
    case "academy":
      return (
        <SchoolTwoToneIcon
          sx={styles}
        />
      );
    case "translate":
      return (
        <TranslateTwoToneIcon
          sx={styles}
        />
      );
    case "Layer":
      return (
        <LayersIcon
          sx={styles}
        />
      );
    default:
      break;
  }
};

export default Icon_01;
