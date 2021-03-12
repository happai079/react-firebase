import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBptMJhUc4gjRfOHNYhybCgfQO5YQLdP3E",
  authDomain: "reactfirebase-30c10.firebaseapp.com",
  databaseURL: "https://reactfirebase-30c10-default-rtdb.firebaseio.com",
  projectId: "reactfirebase-30c10",
  storageBucket: "reactfirebase-30c10.appspot.com",
  messagingSenderId: "440103573360",
  appId: "1:440103573360:web:715853e90fb1563a8a61b5",
  measurementId: "G-S9BB5XF3JP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let userId = 0;
let i = 0;

// 데이터 쓰기
const CreateUser = (userName, userPhone) => {
  const userListRef = firebase.database().ref('User');
  const newUserRef = userListRef.child('User' + i);
  
  newUserRef.set({
    userId: userId,
    userName: userName,
    userPhone: userPhone
  });
  userId++;
  i++;
}

// const UpdateUser = (userName, userPhone) => {
  //   firebase.database().ref('User').update({
    //     userId: userId,
    //     userName: userName,
    //     userPhone: userPhone
    //   });
    // }
    
    // 숫자 버튼 클릭시 업데이트
  const UpdateNum = (num) => {
      i = 0;
      firebase.database().ref('User').child('User' + i).update({
    currentNum: num
  });
}


// 필요한 곳에서 사용할 수 있도록 내보내기
export {CreateUser, UpdateNum};