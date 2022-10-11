import { useScrollTrigger, Fab, Tooltip, Fade } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { FC, useState } from "react";

export const ScrollToTop: FC = () => {
	const [open, setOpen] = useState(false);

	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 200 });

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setOpen(false);
	};

	return (
		<Fade in={trigger}>
			<Tooltip
				title="Scroll to top"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
			>
				<Fab
					sx={{
						position: "fixed",
						color: "#fff",
						bottom: 24,
						right: 24,
						zIndex: 999999,
						bgcolor: "primary.main",
						transition: "500ms cubic-bezier(0.4, 0, 0.2, 1) !important",
						"&:hover": { transform: `scale(1.2)`, bgcolor: `primary.main` },
					}}
					size="medium"
					onClick={handleClick}
				>
					<KeyboardArrowUpRoundedIcon />
				</Fab>
			</Tooltip>
		</Fade>
	);
};
