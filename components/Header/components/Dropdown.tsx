// import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { FC } from "react";

export const Dropdown: FC = () => {
	return (
		<div style={{ position: "relative" }}>
			<div>Company</div>
			<Select
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					height: "100%",
					width: "100%",
				}}
			>
				<MenuItem value={10}>Social Impact</MenuItem>
				<MenuItem value={10}>Our Team</MenuItem>
				<MenuItem value={10}>Carriers</MenuItem>
				<MenuItem value={10}>Contact</MenuItem>
			</Select>
		</div>
	);
};
