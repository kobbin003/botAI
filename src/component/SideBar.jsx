import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useEffect, useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { Link } from "react-router";
import { HEADER_HEIGHT } from "../App";
import MyButton from "./MyButton";

//* sidebar width will be a constant 250, won't change.
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
	}, [matches, setMainPosition]);

	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={() => {
				if (matches) {
					setOpen(false);
				}
			}}
		>
			<List
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "0.4em",
				}}
			>
				{/* <Divider /> */}
				<ListItem
					key={"past-conversations"}
					disablePadding
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Link to={"/history"}>
						<MyButton text={"Past Conversations"} />
					</Link>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div
			id="sidebar"
			style={{
				width: "fit-content",
				backgroundColor: "",
			}}
		>
			<Box
				sx={{
					height: "2rem",
					display: "flex",
					alignItems: "center",
					padding: "0 0.4em",
					paddingTop: "0.2em",
				}}
			>
				<LuAlignJustify
					onClick={toggleDrawer(true)}
					size={42}
					color="#9785BA"
				/>
			</Box>

			<Drawer
				open={open}
				variant={matches ? "temporary" : "persistent"}
				anchor="left"
				sx={{
					width: mainPosition,
					backgroundColor: "red",
				}}
				onClose={() => setOpen(false)}
			>
				<DrawerHeader />
				{DrawerList}
			</Drawer>
		</div>
	);
}

function DrawerHeader() {
	return (
		<Box
			key={"new-chat"}
			sx={{
				backgroundColor: "primary.main",
				height: `${HEADER_HEIGHT}`,
				//* it should have the same height as the header and sidebar container
				//* to make the drawerheader and the header to be of the same height.
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Link
				to={`/`}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
					padding: "0.4em 1em",
				}}
			>
				<img
					src="/soulAI-avatar.svg"
					alt="soulAI-avatar"
					height={40}
					style={{ borderRadius: "15px" }}
				/>
				<span style={{ color: "black" }}>New Chat</span>
				<img src="/edit.svg" alt="edit" />
			</Link>
		</Box>
	);
}
