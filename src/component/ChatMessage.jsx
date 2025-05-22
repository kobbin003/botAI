import React from "react";

// user
//* either question is falsy or response is. Both cannot be same at the same time
const ChatMessage = ({ question, response, time }) => {
	console.log("time;...................", time);
	return (
		<div>
			<div>avatar</div>
			<div>
				<h3>{question ? <span>You</span> : <span>Soul AI</span>}</h3>
				<p>{question ? question : response}</p>
				<p>{time}</p>
			</div>
		</div>
	);
};

export default ChatMessage;
