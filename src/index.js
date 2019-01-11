import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroImage from './HeroImage';

ReactDOM.render(
	<HeroImage
		color="#555555"
		gradientDirection="to bottom right"
		imageSrc="https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg"
		height="100vh"
		opacity="0.8"
		childrenStyles={{ color: '#f7f7f7' }}
		parallax
		textPosition="center"
	>
		<h1>Some compelling headline!</h1>
		<h2>Something about what we offer</h2>
		<button>Click me!</button>
	</HeroImage>,
	document.getElementById('root')
);
