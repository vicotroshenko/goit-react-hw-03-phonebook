import React, { Component } from "react";
import PropTypes from 'prop-types';
import { List } from './ContactList.styled'
import { ListElements } from "components/ListElements/ListElements";

export class ContactList extends Component {
    render() {
        const { contactList, onDelete } = this.props;
        return (
            <List>
              {contactList.map(({id, name, number}) => (
                <ListElements key={id}
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}/>
              ))}
            </List>
        )
    }
}

ContactList.propTypes ={
    contactList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
  }