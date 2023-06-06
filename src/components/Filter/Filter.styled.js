import styled from 'styled-components';

export const Label = styled.label`
		display: block;
		margin-left: 40px;
		& input {
			display: block;
			margin-top: 5px;
			font-size: 18px;
			border-radius: 8px;
			&:hover {
				border: 2px solid blue;
			}
			&:focus {
				border: 2px solid blue;
			}
		}
`