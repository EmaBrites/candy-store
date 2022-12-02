import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Candy } from './candy-list/Candy';

const uri = 'https://638965814eccb986e8912d2e.mockapi.io/candys';

@Injectable({
  providedIn: 'root'
})
export class CandyDataService {

  constructor(private http:HttpClient) { }

  public getCandyData(): Observable<Candy[]> {
    return this.http.get<Candy[]>(uri).pipe(tap((candys: Candy[]) => candys.forEach(candy => candy.quantity = 0)));
  }
}
