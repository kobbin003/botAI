import React, { createContext, useContext } from "react";

const chatContext = createContext();

export const useChatContext = () => useContext(chatContext);

const ChatsProvider = ({ children }) => {
	return <chatContext.Provider>{children}</chatContext.Provider>;
};

export default ChatsProvider;
