import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  private apiUrl = 'http://127.0.0.1:8000/api/elevators/';

  constructor(private http: HttpClient) {}

  getElevators() {
    return this.http.get(this.apiUrl);
  }

  updateElevator(id: number, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }
}
