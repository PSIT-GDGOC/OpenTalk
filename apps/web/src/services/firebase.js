import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// Firebase configuration (Defaults to emulator for local sprint development)
const firebaseConfig = {
  apiKey: "demo-opentalk-key",
  authDomain: "demo-opentalk.firebaseapp.com",
  projectId: "demo-opentalk",
  storageBucket: "demo-opentalk.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Connect to local emulators in development mode if flag is present
if (import.meta.env.DEV) {
  try {
    // connectFirestoreEmulator(db, '127.0.0.1', 8080);
    // connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    // connectStorageEmulator(storage, '127.0.0.1', 9199);
  } catch (e) {
    console.debug('Emulator connection already established or skipped', e);
  }
}
