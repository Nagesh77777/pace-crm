import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../../models/client';

@Injectable({
  providedIn: 'root',
})
export class OutreachData {

  private outreachData = new BehaviorSubject<Client[]>([]);

  outreachData$ = this.outreachData.asObservable();


  setData(data: Client[]) {
    this.outreachData.next(data);
  }


  getData(){
    return this.outreachData.value;
  }

}
