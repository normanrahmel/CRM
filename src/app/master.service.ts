import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  userTodos: any = [];
  constructor() {}
}
