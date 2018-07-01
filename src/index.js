import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroImage from './HeroImage';

ReactDOM.render(
	<HeroImage
		color="#f7f7f7"
		imageSrc="https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg"
		height="100vh"
		parallax
		opacity="0.8"
	>
		<h1>Yooooo</h1>
		<h2>DFAAFSGAAAVFVFAV</h2>
		<button>Click me!</button>
	</HeroImage>,
	document.getElementById('root')
);
