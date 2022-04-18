import React from 'react';
import ReactPlayer from 'react-player';
import styled from "styled-components";

const Video = styled.div`

`;

export default function VideoPlayer(){
return (
	<Video>
	<ReactPlayer url='https://www.youtube.com/watch?v=fR7bXsoNwwE' />
	</Video>
)
}
