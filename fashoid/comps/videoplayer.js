import React from 'react';
import ReactPlayer from 'react-player';
import styled from "styled-components";

const Video = styled.div`
	width: 356px;
	height: 400px;
	display: flex;
	justify-content: center;
`;

export default function VideoPlayer() {
	return (
		<Video>
			<ReactPlayer url='https://www.youtube.com/watch?v=fR7bXsoNwwE' />
		</Video>
	)
}
