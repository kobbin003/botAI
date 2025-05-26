import { useState } from "react";
import { saveFeedback } from "../utils/chats";
import { Box, Button, Typography } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import MyButton from "./MyButton";
import { HiOutlineLightBulb } from "react-icons/hi";

const FeedbackForm = ({ setShowModal, chatId }) => {
	const [feedback, setFeedback] = useState("");

	const handleFeedbackChange = (e) => {
		setFeedback(e.target.value);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleFeedbackSubmit = (e) => {
		e.preventDefault();

		// save feedback
		saveFeedback(chatId, feedback);

		// // close the modal after saving
		setShowModal(false);
	};

	return (
		<Box
			sx={{
				position: "relative",
				height: "100%",
				width: "100%",
				// backgroundColor: "transparent",
				// backgroundColor: "rgba(0, 0, 0, 0.5)",
				backdropFilter: "blur(2px) opacity(90%)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					backgroundColor: "secondary.light",
					width: {
						xs: "80vw",
						sm: "60vw",
						md: "40vw",
						lg: "30vw",
					},
					padding: "1rem",
					boxShadow: "-5px 1px 10px 0px #c3c3c3",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "0.4rem",
					}}
				>
					<HiOutlineLightBulb size={24} />
					<Typography variant="subtitle1" sx={{ flex: 1 }}>
						Provide Additional Feedback
					</Typography>
					<button onClick={handleCloseModal} style={{ border: "none" }}>
						<IoCloseSharp size={24} style={{ cursor: "pointer" }} />
					</button>
				</Box>
				<form
					onSubmit={handleFeedbackSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "0.5rem",
						marginTop: "0.5rem",
					}}
				>
					<textarea
						name="feedback"
						id="feedback"
						value={feedback}
						onChange={handleFeedbackChange}
						rows={5}
						style={{ padding: "0.4rem", resize: "none", borderRadius: "5px" }}
						draggable={false}
					></textarea>
					<MyButton
						type="submit"
						text={"Submit"}
						sxProps={{ alignSelf: "flex-end" }}
					/>
				</form>
			</Box>
		</Box>
	);
};

export default FeedbackForm;
