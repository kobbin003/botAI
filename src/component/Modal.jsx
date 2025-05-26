import { createPortal } from "react-dom";

const Modal = ({ showModal, children }) => {
	if (typeof window != "object") return null;

	const container = document.getElementById("root-modal");
	if (!container) return null;

	return createPortal(
		<dialog
			open={showModal}
			style={{
				backgroundColor: "transparent",
				height: "100vh",
				width: "100vw",
				zIndex: "1500", // because the default z-index of MUI drawer is 1200
			}}
		>
			{children}
		</dialog>,
		container
	);
};

export default Modal;
