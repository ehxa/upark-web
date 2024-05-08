import React, { useState, useEffect } from "react";
import "./App.scss";
import "@aws-amplify/ui-react/styles.css";
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';
import Navbar from './components/navbar';
import MobileNavbar from './components/mobileNavbar';
import Central from './components/central';
import Reminders from "./components/reminders";
import Notifications from "./components/notifications";
import Maps from './components/central';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Row, Col } from "react-bootstrap";
const client = generateClient();

const App = ({ signOut }) => {

  return (
    <>
      <Row style={{ margin: 0 }}>
        <Col sm={2}>
          <Navbar></Navbar>
          <MobileNavbar></MobileNavbar>
        </Col>
        <Col>
          <Central></Central>
        </Col>
        <Col sm={2} className="widgets-main">
          <Col>
            <Notifications></Notifications>
          </Col>
          <Col>
            <Reminders></Reminders>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default withAuthenticator(App);