import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() debounceTime: number = 300;
  @Input() hasSearchIcon: boolean = true;
  @Input() appearance: MatFormFieldAppearance = 'outline';

  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  searchTerm = '';
  search$: Subject<string> = new Subject<string>();

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.search$
      .pipe(debounceTime(this.debounceTime), distinctUntilChanged())
      .subscribe(value => this.valueChanged.emit(value));
  }

  search(): void {
    this.search$.next(this.searchTerm);
  }

  clear(options: {emitEvent: boolean}): void {
    this.searchTerm='';

    if (options.emitEvent) {
      this.search$.next(this.searchTerm);
    }
    this.cdRef.markForCheck();
  }
}
