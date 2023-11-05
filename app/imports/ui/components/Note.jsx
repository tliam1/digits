import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Note = ({ note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

Note.propTypes = {
  note: PropTypes.shape({
    note: PropTypes.string,
    contactID: PropTypes.string,
    owner: PropTypes.string,
    createdAt: PropTypes.string,
    _id: PropTypes.string,
    // quantity: PropTypes.number,
    // condition: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Note;
