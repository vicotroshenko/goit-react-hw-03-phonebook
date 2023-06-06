import styled from 'styled-components';

export const List = styled.ul`
		list-style-type: none;
		width: 100%;
		max-width: 300px;
		& li {
			width: 100%;
			padding: 7px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			& span {
				display: inline-block;
				margin-left: 7px;
				margin-right: 7px;
			}
			& button {
				border: none;
				background-color: transparent;
				box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
				transition: all 200ms linear;
				&:hover {
					background-color: #f1f5f9;
					box-shadow: rgba(45, 140, 229, 0.4) 0px 2px 4px, rgba(45, 140, 229, 0.3) 0px 7px 13px -3px, rgba(45, 140, 229, 0.2) 0px -3px 0px inset;
					padding-top: 2px;
					padding-bottom: 2px;
				}
			}
		}
`