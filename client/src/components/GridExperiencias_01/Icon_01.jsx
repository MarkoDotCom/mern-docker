import React from "react";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import UpdateTwoToneIcon from '@mui/icons-material/UpdateTwoTone';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';

const Icon_01 = ({ icon }) => {
  switch (icon) {
    case "time":
      return (
        <WorkHistoryTwoToneIcon
          sx={{
            color: "#505050",
            fontSize: 25,
          }}
        />
      );
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
