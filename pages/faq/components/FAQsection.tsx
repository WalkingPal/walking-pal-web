import { ExpandLess, ExpandMore, Quiz } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Collapse,
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import { FC, useState } from "react";
import styles from "../faq.module.scss";

interface IFAQsection {
	title: string;
	faqs: {
		faq: string;
		desc: string | JSX.Element;
	}[];
	isOpen?: boolean;
}

export const FAQsection: FC<IFAQsection> = ({
	title,
	faqs,
	isOpen = false,
}) => {
	const [open, setOpen] = useState(isOpen);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<Paper sx={{ mx: "4vw", mt: 6 }}>
			<List sx={{ width: "100%" }}>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						<Quiz />
					</ListItemIcon>
					<ListItemText>
						<Typography variant="h5" component="p">
							{title}
						</Typography>
					</ListItemText>
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="ul" className={styles.list} disablePadding>
						{faqs.map(({ faq, desc }, i) => (
							<li key={`${title}-faq-${i}`}>
								<Divider />
								<Accordion sx={{ px: 4, py: 1 }} elevation={0}>
									<AccordionSummary expandIcon={<ExpandMore color="primary" />}>
										<Typography variant="subtitle1" color="text.secondary">
											{faq}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant="body1">{desc}</Typography>
									</AccordionDetails>
								</Accordion>
							</li>
						))}
					</List>
				</Collapse>
			</List>
		</Paper>
	);
};
