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

const CHAT_STORE_KEY = "chats";

export const getUserChats = () => {
	const chats = localStorage.getItem(CHAT_STORE_KEY);

	if (!chats) {
		// if key not found, initialise it
		localStorage.setItem(CHAT_STORE_KEY, []);
		return null;
	}

	return JSON.parse(chats);
};

// TODO: to be used in the chatList for `history/chat/:id` route.
export const getUserChatById = (chatId) => {
	const chats = localStorage.getItem(CHAT_STORE_KEY);

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

export function storeChat(chat) {
	let storedChats = localStorage.getItem(CHAT_STORE_KEY);

	if (!storedChats) {
		localStorage.setItem(CHAT_STORE_KEY, "[]");
		storedChats = "[]";
	}

	const parsed = JSON.parse(storedChats);
	parsed.push(chat);

	localStorage.setItem(CHAT_STORE_KEY, JSON.stringify(parsed));

	return { success: true, message: "chat successfully saved" };
}
