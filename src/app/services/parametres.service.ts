  
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Parameterservice {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewParameters(record) {
    return this.firestore.collection('Parameters').add(record);
  }

  read_Parameters() {
    return this.firestore.collection('Parameters').snapshotChanges();
  }

  update_Parameters(recordID, record) {
    this.firestore.doc('Parameters/' + recordID).update(record);
    console.log('updated');
  }

  delete_Parameters(record_id) {
    this.firestore.doc('Parameters/' + record_id).delete();
  }
}