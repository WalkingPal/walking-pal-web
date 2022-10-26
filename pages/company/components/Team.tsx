import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";
import { Image } from "components/Image";
import { Accent } from "components/Accent";
import { teamData } from "pages/company/components/teamData";

const imageStyles = (bgcolor: string): SxProps<Theme> => ({
	bgcolor,
	borderRadius: 3,
	overflow: "hidden",
	display: "flex",
	alignItems: "flex-end",
	justifyContent: "center",
	"& img": {
		objectFit: "cover",
	},
});
export const Team: FC = () => (
	<Stack mx="4vw" my={10} borderRadius={3}>
		<Typography variant="h3" align="center" component="h2">
			Meet the<Accent>team</Accent>
		</Typography>
		<Typography align="center" maxWidth={600} mb={4} mx="auto">
			Here’s the wizards that changed your boring and lonely walks into a fun
			and interesting one forever.
		</Typography>
		<Box gap={2} display="flex" flexWrap="wrap" justifyContent="center" mb={2}>
			{teamData.vp.map(({ src, name, desg, bgcolor }, i) => (
				<Stack key={`vp-${i}`} flex={1} minWidth={340} maxWidth={500}>
					<Image
						wrapstyle={imageStyles(bgcolor)}
						src={src}
						// alt={name}
						alt=""
						width={300}
						height={300}
					/>
					<Typography variant="h5" component="p">
						{name}
					</Typography>
					<Typography variant="body2">{desg}</Typography>
				</Stack>
			))}
		</Box>
		<Box maxWidth={1000} mx="auto">
			<Box gap={2} display="flex" flexWrap="wrap" justifyContent="center">
				{teamData.members.map(({ src, name, desg, bgcolor }, i) => (
					<Stack key={`m-${i}`} flex={1} minWidth={200} maxWidth={360}>
						<Image
							wrapstyle={imageStyles(bgcolor)}
							src={src}
							// alt={name}
							alt=""
							width={200}
							height={200}
						/>
						<Typography variant="h5" component="p">
							{name}
						</Typography>
						<Typography variant="body2">{desg}</Typography>
					</Stack>
				))}
			</Box>
		</Box>
	</Stack>
);
