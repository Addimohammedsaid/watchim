import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  pageSizeArray: number[] = [];
  currentPage: number = 1;

  @Input() dataSize: number = 50;
  @Input() pageSize: number = 12;
  @Input() pageIndex: number = 1;

  // returned function
  @Input() onQueryPage: (args: any) => void;

  // Initialize
  ngOnInit() {
    this.pageSizeArray = Array(Math.round(this.dataSize / this.pageSize))
      .fill(0)
      .map((x, i) => i + 1);
  }

  // get next data
  paginate = (index: number) => {
    // set new current page
    this.currentPage = index;

    // set new index
    let pageIndex = this.pageIndex - (index - 1) * this.pageSize;

    // pass new page
    this.onQueryPage({
      index: pageIndex,
      pageSize: this.pageSize,
    });
  };
}
