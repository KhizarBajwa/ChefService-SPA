
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  public dishes: any;
  public listComplet: any;
  public searchTerm: string = '';
  public searchValueChanged: Subject<string> = new Subject<string>();

  constructor(private router: Router,
              private service: DishService,
              private toastr: ToastrService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getValues();

    this.searchValueChanged.pipe(debounceTime(1000))
    .subscribe(() => {
      this.search();
    });
  }

  private getValues() {

    this.service.getDish().subscribe(dishes => {
      this.dishes = dishes;
      this.listComplet = dishes;
    });
  }

  public addDish() {
    this.router.navigate(['/dish']);
  }

  public editDish(dishId: number) {
    this.router.navigate(['/dish/' + dishId]);
  }

  public deleteDish(dishId: number) {
    this.confirmationDialogService.confirm('Atention', 'Do you really want to delete this book?')
      .then(() =>
        this.service.deleteDish(dishId).subscribe(() => {
          this.toastr.success('The book has been deleted');
          this.getValues();
        },
          err => {
            this.toastr.error('Failed to delete the book.');
          }))
      .catch(() => '');
  }

  // Use the code below if you want to filter only using the front end;
  // public search() {
  //   const value = this.searchTerm.toLowerCase();
  //   this.books = this.listComplet.filter(
  //     book => book.name.toLowerCase().startsWith(value, 0) ||
  //       book.author.toLowerCase().startsWith(value, 0) ||
  //       book.description.toString().startsWith(value, 0) ||
  //       book.value.toString().startsWith(value, 0) ||
  //       book.publishDate.toString().startsWith(value, 0));
  // }

  public searchBooks() {
    this.searchValueChanged.next("");
  }

  private search() {
    if (this.searchTerm !== '') {
      this.service.searchDishesWithCategory(this.searchTerm).subscribe(book => {
        this.dishes = book;
      }, error => {
        this.dishes = [];
      });
    } else {
      this.service.getDish().subscribe(dishes => this.dishes = dishes);
    }
  }

}
