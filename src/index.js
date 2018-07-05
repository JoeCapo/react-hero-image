import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroImage from './HeroImage';

ReactDOM.render(
	<HeroImage
		color="#b4d455"
		gradientDirection="to bottom right"
		imageSrc="https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg"
		height="100vh"
		opacity="0.8"
		childrenStyles={{ color: 'blue' }}
		parallax
		textPosition="center"
	>
		<h1>Yooooo</h1>
		<h2>DFAAFSGAAAVFVFAV</h2>
		<button>Click me!</button>
	</HeroImage>,
	document.getElementById('root')
);
