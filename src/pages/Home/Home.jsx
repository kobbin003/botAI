import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

//* Home will route them to a new chat/:id
const Home = () => {
	let navigate = useNavigate();

	useEffect(() => {
		const newId = nanoid();
		navigate(`/chat/${newId}`);
	}, []);
	return <div>Home</div>;
};

export default Home;
