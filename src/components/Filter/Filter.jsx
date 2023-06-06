import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Label } from './Filter.styled'


export class Filter extends Component {

	render() {
		const {filterContacts, onChangeFilter} = this.props;
		return (
			<Label>Find contacts by name
                <input
                  type="text"
                  name="name"
                  value={filterContacts}
                  onChange={onChangeFilter}
                  title="find contacts by name"
                  required
                />
    </Label>
		)
	}
}

Filter.propTypes ={
  filterContacts: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}