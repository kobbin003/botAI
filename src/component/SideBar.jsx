import { Divider, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { LuAlignJustify } from "react-icons/lu";
export default function SideBar({ mainPosition, setMainPosition }) {
	const [open, setOpen] = useState(true);
	const matches = useMediaQuery("(max-width:600px)");
	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	useEffect(() => {
		if (matches) {
			setMainPosition(0);
			setOpen(false);
		} else {
			setMainPosition(250);
			setOpen(true);
		}
	}, [matches]);

	const DrawerList = (
		<Box
			sx={{ width: 250, backgroundColor: "greenyellow" }}
			role="presentation"
			onClick={() => {
				if (matches) {
					setOpen(false);
				}
			}}
		>
			<List>
				<ListItem key={"new-chat"} disablePadding>
					<Link to={`/`}>New Chat</Link>
				</ListItem>
				<Divider />
				<ListItem key={"past-conversations"} disablePadding>
					<Link to={"/history"}>Past Conversations</Link>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div
			id="sidebar"
			style={{ width: "fit-content", backgroundColor: "tomato" }}
		>
			{/* <Button onClick={toggleDrawer(true)}> */}
			<LuAlignJustify onClick={toggleDrawer(true)} />
			{/* </Button> */}
			<Drawer
				open={open}
				variant={matches ? "temporary" : "persistent"}
				anchor="left"
				sx={{ width: mainPosition, backgroundColor: "red" }}
				onClose={() => setOpen(false)}
			>
				{DrawerList}
			</Drawer>
		</div>
	);
}
