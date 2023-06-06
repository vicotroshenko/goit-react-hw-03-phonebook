import React, { Component } from "react";
import PropTypes from 'prop-types';

export class ListElements extends Component {
	render() {
		const { id, name, number, onDelete } = this.props;
		return (
			<>
			  <li>{name}
            <span>{number}</span>
            <button type="button" onClick={()=>onDelete(id)}>Delete</button>
        </li>
			</>
		)
	}
}
ListElements.propTypes ={
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
}