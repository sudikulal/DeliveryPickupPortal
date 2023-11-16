const admin = require("firebase-admin");

const serviceAccount = require("../../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.validateGoogleToken = async (GoogleToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(GoogleToken);
    return decodedToken?.uid
  } catch (error) {
    console.log(error);
    return;
  }
};
