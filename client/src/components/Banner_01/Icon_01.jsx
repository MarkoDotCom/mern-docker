import React from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';

const Icon_01 = ({ icon }) => {
  switch (icon) {
    case "person":
      return (
        <PersonOutlineTwoToneIcon
          sx={{
            color: "#ffffff",
            fontSize: 50,
          }}
        />
      );
    case "diamond":
      return (
        <DiamondTwoToneIcon
          sx={{
            color: "#ffffff",
            fontSize: 50,
          }}
        />
      );
    case "homework":
      return (
        <Diversity3TwoToneIcon
          sx={{
            color: "#ffffff",
            fontSize: 50,
          }}
        />
      );
      case "academy":
        return (
          <SchoolTwoToneIcon
            sx={{
              color: "#ffffff",
              fontSize: 50,
            }}
          />
        );
        case "translate":
        return (
          <TranslateTwoToneIcon
            sx={{
              color: "#ffffff",
              fontSize: 50,
            }}
          />
        );

    default:
      break;
  }
};

export default Icon_01;
