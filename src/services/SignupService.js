import firebase from '../database/firebase'
const database = firebase.firestore()

const db = database.collection('Signup')

export default db
