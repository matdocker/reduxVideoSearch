import React from 'react';

const VideoDetail = ({video}) => {
	while (!video){
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-respnsive embed-responsive-16by9'>
				<iframe className='embed-respnsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.tittle}</div>
				<div>{video.snippet.decription}</div>
			</div>
		</div>
		)
	
}


export default VideoDetail;