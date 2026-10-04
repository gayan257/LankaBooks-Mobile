import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const createBookRecord = async (book: Record<string, unknown>) => {
  return addDoc(collection(db, 'books'), {
    ...book,
    createdAt: serverTimestamp(),
  });
};
