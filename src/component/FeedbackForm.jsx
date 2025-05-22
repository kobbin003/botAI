import { useState } from "react";
import { saveFeedback } from "../utils/chats";

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

		// close the modal after saving
		setShowModal(false);
	};

	return (
		<div>
			<div>
				<span>Provide Additional Feedback</span>
				<button onClick={handleCloseModal}>x</button>
				<form onSubmit={handleFeedbackSubmit}>
					<textarea
						name="feedback"
						id="feedback"
						value={feedback}
						onChange={handleFeedbackChange}
					></textarea>
					{/* <button type="button" onClick={handleFormSubmit}>
					Submit
				</button> */}
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default FeedbackForm;
