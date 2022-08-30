import React from "react";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import MoreTimeIcon from '@mui/icons-material/MoreTime';

const Icon_01 = ({ icon }) => {
  switch (icon) {
    case "business":
      return (
        <BusinessTwoToneIcon
          sx={{
            color: "#505050",
            fontSize: 25,
          }}
        />
      );
    default:
      break;
  }
};

export default Icon_01;
