import firebase from "../database/firebase";
const database = firebase.firestore();

const db = database.collection("RequestInventory");

export default db;
// db.collection("users").doc(id).delete().then(() => {
//     console.log("Document deleted!");
// })
// .catch((error) => {
//     console.error(error);
// })

// db.collection('users').doc(this.$route.params.id)
// .update(this.user).then(() => {
//     console.log("User successfully updated!");
// }).catch((error) => {
//     console.log(error);
// });

// db.collection('users').add(this.user).then(() => {
//     alert("User successfully created!");
// }).catch((error) => {
//     console.log(error);
// });

// db.collection('users').onSnapshot((snapshotChange) => {
//     this.Users = [];
//     snapshotChange.forEach((doc) => {
//         this.Users.push({
//             key: doc.id,
//             name: doc.data().name,
//             email: doc.data().email,
//             phone: doc.data().phone
//         })
//     });
// })