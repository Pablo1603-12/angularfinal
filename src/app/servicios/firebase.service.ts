import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getAllArticulos(): Observable<any[]> {
    const colref = collection(this.firestore, "articulos");
    return collectionData(colref, { idField: 'id' }) as Observable<any[]>;
  }

  addArticulo(articulo: any): Promise<any> {
    const colref = collection(this.firestore, "articulos");
    return addDoc(colref, articulo);
  }

  updateArticulo(id: string, changes: any): Promise<void> {
    const docRef = doc(collection(this.firestore, "articulos"), id);
    return updateDoc(docRef, changes);
  }

  deleteArticulo(id: string): Promise<void> {
    const docRef = doc(collection(this.firestore, "articulos"), id);
    return deleteDoc(docRef);
  }
  
}
