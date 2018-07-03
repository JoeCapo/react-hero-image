import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroImage from './HeroImage';

ReactDOM.render(
	<HeroImage
		color="rgba(200,20,200,0.5)"
		imageSrc="https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg"
		height="100vh"
		parallax
		opacity="0.5"
	>
		<h1>Yooooo</h1>
		<h2>DFAAFSGAAAVFVFAV</h2>
		<button>Click me!</button>
	</HeroImage>,
	document.getElementById('root')
);
