import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyCPyIKPV1Nu5eOcEIoOrWxiTx_rcMW3xbs",
  authDomain: "tarefas-8f92b.firebaseapp.com",
  projectId: "tarefas-8f92b",
  storageBucket: "tarefas-8f92b.appspot.com",
  messagingSenderId: "1029967288913",
  appId: "1:1029967288913:web:5ba40a2fb5d1b1e0717670"
};
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  
export default firebase;
