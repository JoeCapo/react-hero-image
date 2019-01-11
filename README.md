# React Hero Image Component

## Summary/Motivation

A React-based hero image component designed to give a website or project a hero image! This project was my first attempt at building and designing an API for a reusable React component.

Currently, it is not available on NPM (please see TODO section).

![alt text](example.jpg 'Example hero image component')

## Structure

This project was bootstrapped with create-react-app, uses styled-components.

It contains the HeroImage component source, utility functions needed for the component and finally an index.js file rendering the component.

## Starting the project

1. Clone the repository
2. Navigate to the cloned project and run `yarn install`
3. To start the project, run `yarn start`

## Component API

| Prop Name         | Values                                          | Type                                 |
| ----------------- | ----------------------------------------------- | ------------------------------------ |
| imageSrc          | URL of the image you wish to render             | String                               |
| color             | Color overlay of the image                      | String (RGB and Hex codes supported) |
| gradientDirection | Direction of the color overlay's gradient       | String                               |
| opacity           | Opacity of the color overlay                    | String                               |
| height            | Height of the image                             | String                               |
| childrenStyles    | Styles passed to the children of the component  | Object                               |
| parallax          | Whether or not a parallax style will be applied | Boolean                              |

## Example usage

```
	<HeroImage
		imageSrc="https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg"
		color="#555555"
		gradientDirection="to bottom right"
		height="100vh"
		opacity="0.8"
		childrenStyles={{ color: '#f7f7f7' }}
		parallax
		textPosition="center"
	>
		<h1>Some compelling headline!</h1>
		<h2>Something about what we offer</h2>
		<button>Click me!</button>
	</HeroImage>
```

## Todo

- [] Create this as an NPM package
- [] Setup default props/prop validation
- [] Animation for content on image
- [] Animation for image
- [] Support for named color props
- [] Supprt for HSL color props
