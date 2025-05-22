const FeedbackForm = ({ feedback, setFeedback, setShowModal }) => {
	const handleFeedbackChange = (e) => {
		setFeedback(e.target.value);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		console.log("submitting form.............");
		// close the modal after saving
		setShowModal(false);
	};
	return (
		<div>
			<div>
				<span>Provide Additional Feedback</span>
				<button onClick={handleCloseModal}>x</button>
				<form onSubmit={handleFormSubmit}>
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
