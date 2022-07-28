import styled, {css} from 'styled-components';
import {ContentS} from './Content/ContentS';
import {NavbarS} from './Navbar/NavbarS';
import {FooterS} from './Footer/FooterS';

export const PageS = styled.div<{ hide?: boolean }>`
	scroll-behavior: smooth;
	
	${({hide}) => hide && css`
		main {
			margin: 0;
		}

		${NavbarS} {
			display: none;
		}

		${FooterS} {
			display: none;
		}

		${ContentS} {
			padding-top: 64px;
		}
	`}
	
	${ContentS} > div {
		@media (max-width: 600px) {
			width: 90vw;
			overflow: auto;
		}
	}
`;
