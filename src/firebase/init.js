import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDLkIAiz45GE3J23XBgJct9eWrylvVLpH4',
  authDomain: 'pmi-gene-tools-896e2.firebaseapp.com',
  databaseURL: 'https://pmi-gene-tools-896e2.firebaseio.com',
  projectId: 'pmi-gene-tools-896e2',
  storageBucket: '',
  messagingSenderId: '660239742569',
  appId: '1:660239742569:web:c46a1b3af5b2b654b5d4f8'
}

firebase.initializeApp(config)
