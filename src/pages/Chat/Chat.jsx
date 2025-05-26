import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChatList from "../../component/ChatList";
import EmptyChatPlaceHolder from "../../component/EmptyChatPlaceHolder";
import FeedbackForm from "../../component/FeedbackForm";
import Modal from "../../component/Modal";
import { generateAiResponse } from "../../utils/generateAiResponse";
import { storeChat } from "../../utils/chats";
import { Box, FormControl, TextField } from "@mui/material";
import MyButton from "../../component/MyButton";
import { HEADER_HEIGHT } from "../../App";

export const CHAT_FOOTER_HEIGHT = "3rem";

export const Chat = () => {
	const params = useParams();
	const [chats, setChats] = useState([]);

	const [question, setQuestion] = useState("");

	const [showModal, setShowModal] = useState(false);
	// const [response, setResponse] = useState("");
	const [responseIsLoading, setResponseIsLoading] = useState(false);

	const handleQuestionInputChange = (e) => {
		const val = e.target.value;
		setQuestion(val);
	};

	const handleAskQuestion = (e) => {
		e.preventDefault();
		// get the ai response and populate the chats
		const currChat = {
			question: {
				content: question,
				createdAt: new Date().toISOString(),
			},
			response: null,
		};

		setChats((prev) => [...prev, { ...currChat }]);

		// claer the current question
		setQuestion("");
	};

	const handleSaveChat = () => {
		// store the chat
		const chat = {
			id: params.id,
			chats,
			feedback: "",
		};

		storeChat(chat);

		// open the modal for optional user feedback
		setShowModal(true);
	};

	useEffect(() => {
		const latestChat = chats[chats.length - 1];
		// console.log("latestChat: ", latestChat);

		// is the latest chat have question but does not have response
		if (latestChat && latestChat.question && !latestChat.response) {
			(async function () {
				setResponseIsLoading(true);
				let timer = "";
				const res = await generateAiResponse(latestChat.question.content);

				if (res) {
					// console.log("got-res........", res);
					// setResponse(res);
					setChats((prev) =>
						prev.map((chat, index) => {
							if (index === prev.length - 1) {
								// update the response
								return {
									...chat,
									response: {
										content: res,
										createdAt: new Date().toISOString(),
									},
								};
							} else {
								return chat;
							}
						})
					);
					clearInterval(timer);
					setResponseIsLoading(false);
				}
			})();
		}
	}, [chats]);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: `calc(100vh - ${HEADER_HEIGHT})`,
				// overflowY: "scroll",
				// backgroundColor: "teal",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{/* <h2>Chat {params.id}</h2> */}
			{chats.length > 0 ? (
				<ChatList chats={chats} />
			) : (
				<EmptyChatPlaceHolder setChats={setChats} />
			)}
			{/* {responseIsLoading && <p>Loading...</p>} */}
			<Box
				sx={{
					// backgroundColor: "pink",
					paddingX: "1rem",
					height: CHAT_FOOTER_HEIGHT,
					// position: "absolute",
					// bottom: "0",
					display: "flex",
					alignItems: "center",
				}}
			>
				<form
					onSubmit={handleAskQuestion}
					style={{
						display: "flex",
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
						// backgroundColor: "greenyellow",
					}}
				>
					<TextField
						hiddenLabel
						value={question}
						name="question"
						id="question"
						placeholder="Message Bot AI..."
						onChange={handleQuestionInputChange}
						size="small"
						sx={{ flex: 1, backgroundColor: "white" }}
					/>

					<MyButton
						disabled={responseIsLoading}
						type={"submit"}
						text={"Ask"}
						key={"ask"}
					/>
					<MyButton
						disabled={responseIsLoading || !chats.length}
						type={"button"}
						text={"Save"}
						key={"save"}
						onClickHandler={handleSaveChat}
					/>
				</form>
			</Box>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				{showModal ? (
					<FeedbackForm setShowModal={setShowModal} chatId={params.id} />
				) : (
					<></>
				)}
			</Modal>
		</Box>
	);
};

export default Chat;
