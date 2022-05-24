import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit ,OnChanges, DoCheck {

  @Output() search = new EventEmitter<string>();
  searchString:string = "";
  constructor(private cd: ChangeDetectorRef) {
    // this.cd.detach();
   }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cd.reattach();
    this.handleSearch();
    // console.log("Docheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.searchString)
  }

 

  handleSearch(){
    this.search.emit(this.searchString);
  }


}
