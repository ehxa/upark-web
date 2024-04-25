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
import Maps from './components/maps';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const client = generateClient();

const App = ({ signOut }) => {

  return (
    <>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
    </>
  );
};

export default withAuthenticator(App);