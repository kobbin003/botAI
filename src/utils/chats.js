/**
 * chats =
 * {id:string, chats:chat[],feedback:string}[]]
 *
 * chat = {
		question:{
				content:string, createdAt:DateTime
			},
		response:{
				content:string, createdAt:DateTime
			},
		isLiked:boolean
	}
 */
export const getUserChats = () => {
	const chats = localStorage.getItem("chats");

	if (!chats) {
		// if key not found, initialise it
		localStorage.setItem("chats", []);
		return null;
	}

	return JSON.parse(chats);
};

// TODO: to be used in the chatList for `history/chat/:id` route.
export const getUserChatById = (chatId) => {
	const chats = localStorage.getItem("chats");

	if (!chats) {
		return null;
	}
	const parsed = JSON.parse(chats);

	const found = parsed.find(({ id }) => id === chatId);

	if (!found) {
		return null;
	}

	return found;
};
