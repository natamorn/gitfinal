import firebase from '../database/firebase'
const database = firebase.firestore()

const db = database.collection('Product')

export default db
