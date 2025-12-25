import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://backend-habiba34-dev.apps.rm3.7wse.p1.openshiftapps.com/tasks';

  constructor(private http: HttpClient) {}

  addTask(eventId: number, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${eventId}/tasks`, data);
  }

  getTasks(eventId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${eventId}/tasks`);
  }

  updateTask(taskId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${taskId}`, data);
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }
}
