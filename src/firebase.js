import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCCOG4OEXLEnUSWsrKQ6wf_6DLIKoCvrn4",
    authDomain: "test-app-38a3d.firebaseapp.com",
    projectId: "test-app-38a3d",
    storageBucket: "test-app-38a3d.appspot.com",
    messagingSenderId: "357150601808",
    appId: "1:357150601808:web:5695eb2b42a3737bbf5755",
    databaseURL: "https://test-app-38a3d-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);

