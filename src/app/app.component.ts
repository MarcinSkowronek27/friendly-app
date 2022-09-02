import {
  Component, ChangeDetectionStrategy
} from '@angular/core';
import * as data from './db/data.json';
import { MatTableDataSource } from '@angular/material/table';
export interface WorkElement {
    work_order_id: number,
    description: string,
    received_date: string,
    assigned_to: [{
      person_name: string,
      status: string,
    }],
    status: string,
    priority: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  displayedColumns: string[] = ['work_order_id', 'description', 'priority', 'received_date', 'status'];
  products: WorkElement[] = (data as any).default;
  dataSource = new MatTableDataSource(this.products);
  filterValue = '';

  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value!;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}







