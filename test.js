const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function generateFirebaseToken(uid) {
  try {
    const customToken = await admin.auth().createCustomToken(uid);
    console.log("Custom Token:", customToken);
    return customToken;
  } catch (error) {
    console.error("Error generating custom token:", error);
    return null;
  } finally {
    admin.app().delete();
  }
}

const uid = 'your-uid';

generateFirebaseToken(uid);
