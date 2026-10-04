import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import type { Book } from '../types/book';

export const createBookRecord = async (book: Book) => {
  return addDoc(collection(db, 'books'), {
    ...book,
    status: book.status ?? 'draft',
    createdAt: serverTimestamp(),
  });
};

export const fetchBooks = async () => {
  const snapshot = await getDocs(collection(db, 'books'));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
