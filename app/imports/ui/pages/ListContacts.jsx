import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import Contact from '../components/Contact';
import { Contacts } from '../../api/contact/contact';
import { Notes } from '../../api/contact/Notes';

const ListContacts = () => {

  const { ready, contacts, notes } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Contacts.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const contactItems = Contacts.collection.find({}).fetch();

    const subscription2 = Meteor.subscribe(Notes.userPublicationName);
    // Determine if the subscription is ready
    const rdy2 = subscription2.ready();
    // Get the Stuff documents
    const notesItems = Notes.collection.find({}).fetch();

    return {
      contacts: contactItems,
      notes: notesItems,
      ready: (rdy && rdy2),
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2 className="text-center">List Contacts</h2>
          </Col>
          <Col>
            <Row xs={1} md={2} lg={3} className="g-4">
              {contacts.map((contact) => (<Col key={contact._id}><Contact contact={contact} notes={notes.filter(note => (note.contactID === contact._id))} /> </Col>))}
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListContacts;
