import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import ChatList from "../../component/ChatList";
import EmptyChatPlaceHolder from "../../component/EmptyChatPlaceHolder";
import { generateAiResponse } from "../../utils/generateAiResponse";
import Modal from "../../component/Modal";
import FeedbackForm from "../../component/FeedbackForm";

const Chat = () => {
	const params = useParams();
	const location = useLocation();
	console.log("location: ", location);
	const [chats, setChats] = useState([]);

	const [question, setQuestion] = useState("");

	const [showModal, setShowModal] = useState(false);
	// const [response, setResponse] = useState("");
	const [responseIsLoading, setResponseIsLoading] = useState(false);

	const [feedback, setFeedback] = useState("");

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
				createdAt: new Date().toLocaleString(),
			},
			response: null,
		};

		setChats((prev) => [...prev, { ...currChat }]);

		// claer the current question
		setQuestion("");
	};

	// TODO: pop up the feedback modal on save click
	// and then save the feedback in the chat
	const handleSaveChat = () => {
		// open the modal
		setShowModal(true);
	};

	useEffect(() => {
		const latestChat = chats[chats.length - 1];
		console.log("latestChat: ", latestChat);

		// is the latest chat have question but does not have response
		if (latestChat && latestChat.question && !latestChat.response) {
			(async function () {
				setResponseIsLoading(true);
				let timer = "";
				const res = await generateAiResponse(latestChat.question);

				if (res) {
					console.log("got-res........", res);
					// setResponse(res);
					setChats((prev) =>
						prev.map((chat, index) => {
							if (index === prev.length - 1) {
								// update the response
								return {
									...chat,
									response: {
										content: res,
										createdAt: new Date().toLocaleString(),
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
		<div>
			<h2>Chat {params.id}</h2>
			{chats.length > 0 ? <ChatList chats={chats} /> : <EmptyChatPlaceHolder />}
			{responseIsLoading && <p>Loading...</p>}
			<div>
				<form onSubmit={handleAskQuestion}>
					<input
						type="text"
						value={question}
						name="question"
						id="question"
						placeholder="Message Bot AI..."
						onChange={handleQuestionInputChange}
					/>
					<button type="submit" disabled={responseIsLoading}>
						Ask
					</button>
					<button
						type="button"
						onClick={handleSaveChat}
						disabled={responseIsLoading}
					>
						Save
					</button>
				</form>
			</div>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<FeedbackForm
					feedback={feedback}
					setFeedback={setFeedback}
					setShowModal={setShowModal}
				/>
			</Modal>
		</div>
	);
};

export default Chat;
