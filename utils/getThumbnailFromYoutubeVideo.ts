export const getThumbnailFromYoutubeVideo = (videoLink: string) => {
	const extractVideoIdRegex =
		/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	const videoId = videoLink.match(extractVideoIdRegex);
	return `https://img.youtube.com/vi/${videoId?.[1]}/maxresdefault.jpg`;
};
