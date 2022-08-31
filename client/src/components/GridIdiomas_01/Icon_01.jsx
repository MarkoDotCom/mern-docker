import React from "react";
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import UpdateTwoToneIcon from '@mui/icons-material/UpdateTwoTone';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';

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
    case "task":
      return (
        <TaskAltTwoToneIcon
          sx={{
            color: "#505050",
            fontSize: 25,
          }}
        />
      );
      case "class":
      return (
        <ClassTwoToneIcon
          sx={{
            color: "#505050",
            fontSize: 25,
          }}
        />
      );
      case "Certificado":
      return (
        <ClassTwoToneIcon
          sx={{
            color: "#505050",
            fontSize: 25,
          }}
        />
      );
      case "Titulo Profesional":
      return (
        <GradeTwoToneIcon
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
