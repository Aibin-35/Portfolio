import React, { useState } from "react"
import {
	Modal,
	IconButton,
	Box,
	Backdrop,
	Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<Box sx={{ width: "100%" }}>
			{/* Certificate Thumbnail */}
			<Box
				sx={{
					position: "relative",
					cursor: "pointer",
					borderRadius: 2,
					overflow: "hidden",
					boxShadow: 3,
					"&:hover .overlay": {
						opacity: 1,
					},
					"&:hover .hover-content": {
						opacity: 1,
						transform: "translate(-50%, -50%) scale(1.05)",
					},
				}}
				onClick={handleOpen}
			>
				<img
					src={ImgSertif}
					alt="Certificate"
					style={{
						width: "100%",
						height: "auto",
						display: "block",
						objectFit: "contain",
					}}
				/>

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						bgcolor: "rgba(0, 0, 0, 0.4)",
						opacity: 0,
						transition: "opacity 0.3s ease",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						className="hover-content"
						sx={{
							textAlign: "center",
							color: "white",
							opacity: 0,
							transform: "translate(-50%, -50%) scale(0.95)",
							transition: "all 0.3s ease",
							position: "absolute",
							top: "50%",
							left: "50%",
						}}
					>
						<FullscreenIcon sx={{ fontSize: 40 }} />
						<Typography variant="h6">View Certificate</Typography>
					</Box>
				</Box>
			</Box>

			{/* Modal View */}
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(4px)",
					},
				}}
			>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						outline: "none",
						margin: "auto",
					}}
				>
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							top: 16,
							right: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}
					>
						<CloseIcon />
					</IconButton>

					<img
						src={ImgSertif}
						alt="Certificate Full View"
						style={{
							display: "block",
							maxWidth: "100%",
							maxHeight: "90vh",
							objectFit: "contain",
							margin: "auto",
						}}
					/>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
