import styled from 'styled-components';

export const Label = styled.label`

`

export const Submit = styled.button`
		margin-top: 10px;
`

export const Form = styled.form`
		border: 1px solid black;
		padding: 10px;
		width: 100%;
		max-width: 300px;
		margin-left: 20px;
		border-radius: 5px;
		& label {
			display: block;
			margin-top: 15px;
			& input {
				display: block;
				margin-top: 5px;
				font-size: 18px;
				border-radius: 5px;
				&:hover {
					border: 2px solid blue;
				}
				&:focus {
					border: 2px solid blue;
				}
			}
		}
	& button {
		margin-top: 10px;
		border: none;
		background-color: #2d75eb;
		border-radius: 8px;
		padding: 5px 10px;
		&:hover {
			background-color: #4e90fc;
		}
		&:focus {
			background-color: #4e90fc;
		}
		&:active {
			background-color: #2d75eb;
		}
	}
`