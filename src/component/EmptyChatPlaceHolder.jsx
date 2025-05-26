import { Avatar, Box, Typography } from "@mui/material";
import { CHAT_FOOTER_HEIGHT } from "../pages/Chat/Chat";

const preQuestionList = [
	"Hi, what is the weather",
	"Hi, what is my location",
	"Hi, what is the temperature",
	"Hi, how are you",
];

const EmptyChatPlaceHolder = ({ setChats }) => {
	const handleSelectQuestion = (question) => () => {
		const currChat = {
			question: {
				content: question,
				createdAt: new Date().toISOString(),
			},
			response: null,
		};
		setChats((prev) => [...prev, { ...currChat }]);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				position: "relative",
				height: `calc(100% - ${CHAT_FOOTER_HEIGHT})`,
				overflowY: "scroll",
				padding: "3rem 1rem",
			}}
		>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
					paddingY: { xs: "4rem", md: "0" },
				}}
			>
				<Typography
					variant="h2"
					sx={{ fontSize: { xs: "1.2rem", md: "1.8rem" } }}
				>
					How Can I Help You Today?
				</Typography>
				<Avatar
					alt="soul AI"
					src="/soulAI-avatar.svg"
					sx={{ width: 72, height: 72 }}
				/>
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "grid",
					gridTemplateColumns: {
						xs: "1fr",
						sm: "repeat(2, 1fr)",
					},
					gap: "1rem",
					padding: "1.4rem 1rem",
				}}
			>
				{preQuestionList.map((question) => (
					<Box
						key={question}
						component={"button"}
						onClick={handleSelectQuestion(question)}
						sx={{
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							height: "fit-content",
							padding: "2rem 1rem",
							borderRadius: "5px",
							border: "none",
							cursor: "pointer",
						}}
					>
						<Typography sx={{ fontWeight: "600" }}>{question}</Typography>
						<Typography sx={{ color: "#00000079" }}>
							Get immediate AI generated response
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default EmptyChatPlaceHolder;
