import { Button } from "@mui/material";
import React from "react";

const MyButton = ({ text, onClickHandler, type, disabled, sxProps }) => {
	return (
		<Button
			type={type}
			variant="contained"
			sx={{
				backgroundColor: "main.primary",
				color: "text.primary",
				width: "fit-content",
				...sxProps,
			}}
			onClick={onClickHandler}
			disabled={disabled}
		>
			{text}
		</Button>
	);
};

export default MyButton;
