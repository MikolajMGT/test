import styled, {keyframes} from 'styled-components';
import {LIGHT_3} from '../../../../utils/colors';

const moveClouds = keyframes`
	0% {
		margin-left: 1000px;
	}
	100% {
		margin-left: -1000px;
	}
`;

export const CloudsS = styled.div`

	color: ${LIGHT_3};
	overflow: hidden;
	height: 100vh;
	width: 100vw;

	.wrapper {
		text-align: center;
		display: block;
		position: relative;
		width: 80%;
		margin: 30vh auto;
	}

	.header {
		position: relative;
		display: inline-block;
		z-index: 2;
	}

	.topText {
		text-align: center;
		display: block;
		position: relative;
		font-size: 4em;
		line-height: 80%;
		padding: 20px 0;
	}

	.bottomText {
		text-align: center;
		display: block;
		position: relative;
		font-size: 20px;
		font-weight: 600;
		padding-bottom: 50px;
	}

	.button {
		background-color: #7EF7F3;
		position: relative;
		display: inline-block;
		width: 358px;
		padding: 5px;
		z-index: 5;
		font-size: 25px;
		color: #2D2D2D;
		font-weight: 800;
		text-decoration: none;
		margin-right: 10px
	}

	.button:hover {
		background-color: #7EF7F3;
		position: relative;
		display: inline-block;
		width: 358px;
		padding: 5px;
		z-index: 5;
		font-size: 25px;
		color: #2D2D2D;
		text-decoration: none;
		margin-right: 10px;
		filter: brightness(120%);
	}

	.cloud {
		width: 350px;
		height: 120px;

		background: #FFF;
		background: linear-gradient(top, #FFF 100%);
		background: -webkit-linear-gradient(top, #FFF 100%);
		background: -moz-linear-gradient(top, #FFF 100%);
		background: -ms-linear-gradient(top, #FFF 100%);
		background: -o-linear-gradient(top, #FFF 100%);

		border-radius: 100px;
		-webkit-border-radius: 100px;
		-moz-border-radius: 100px;

		position: absolute;
		margin: 120px auto 20px;
		transition: ease 1s;
	}

	.cloud:after, .cloud:before {
		content: '';
		position: absolute;
		background: #FFF;
		z-index: -1
	}

	.cloud:after {
		width: 100px;
		height: 100px;
		top: -50px;
		left: 50px;

		border-radius: 100px;
		-webkit-border-radius: 100px;
		-moz-border-radius: 100px;
	}

	.cloud:before {
		width: 180px;
		height: 180px;
		top: -90px;
		right: 50px;

		border-radius: 200px;
		-webkit-border-radius: 200px;
		-moz-border-radius: 200px;
	}

	.x1 {
		top: -50px;
		left: 100px;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
		opacity: 0.9;
		-webkit-animation: ${moveClouds} 15s linear infinite;
		-moz-animation: ${moveClouds} 15s linear infinite;
		-o-animation: ${moveClouds} 15s linear infinite;
	}

	.x1_5 {
		top: -60px;
		left: 250px;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
		-webkit-animation: ${moveClouds} 17s linear infinite;
		-moz-animation: ${moveClouds} 17s linear infinite;
		-o-animation: ${moveClouds} 17s linear infinite;
	}

	.x2 {
		left: 250px;
		top: 30px;
		-webkit-transform: scale(0.6);
		-moz-transform: scale(0.6);
		transform: scale(0.6);
		opacity: 0.6;
		-webkit-animation: ${moveClouds} 25s linear infinite;
		-moz-animation: ${moveClouds} 25s linear infinite;
		-o-animation: ${moveClouds} 25s linear infinite;
	}

	.x3 {
		left: 250px;
		bottom: 20px;

		-webkit-transform: scale(0.6);
		-moz-transform: scale(0.6);
		transform: scale(0.6);
		opacity: 0.8;

		-webkit-animation: ${moveClouds} 25s linear infinite;
		-moz-animation: ${moveClouds} 25s linear infinite;
		-o-animation: ${moveClouds} 25s linear infinite;
	}

	.x4 {

		-webkit-transform: scale(0.75);
		-moz-transform: scale(0.75);
		transform: scale(0.75);
		opacity: 0.75;

		-webkit-animation: ${moveClouds} 18s linear infinite;
		-moz-animation: ${moveClouds} 18s linear infinite;
		-o-animation: ${moveClouds} 18s linear infinite;
	}

	.x5 {
		left: 200px;
		bottom: 140px;

		-webkit-transform: scale(0.5);
		-moz-transform: scale(0.5);
		transform: scale(0.5);
		opacity: 0.8;

		-webkit-animation: ${moveClouds} 20s linear infinite;
		-moz-animation: ${moveClouds} 20s linear infinite;
		-o-animation: ${moveClouds} 20s linear infinite;
	}

`;
