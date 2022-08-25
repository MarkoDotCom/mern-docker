import React from "react";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import DiamondTwoToneIcon from '@mui/icons-material/DiamondTwoTone';

const Icon_01 = ({ icon }) => {
	switch (icon) {
		case "person":
			return <PersonOutlineTwoToneIcon />;
		case "diamond":
			return <DiamondTwoToneIcon />;
		default:
			break;
	}};

export default Icon_01;
