import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/services/contactUs.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contactus-list',
  templateUrl: './contactus-list.component.html',
  styleUrls: ['./contactus-list.component.css']
})
export class ContactusListComponent implements OnInit {

  public contactUsList: any;
  public searchTerm: string = '';
  public searchValueChanged: Subject<string> = new Subject<string>();

  constructor(private router: Router,
              private service: ContactUsService,
              private toastr: ToastrService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getCategories();

    this.searchValueChanged.pipe(debounceTime(1000))
      .subscribe(() => {
        this.search();
      });
  }

  private getCategories() {
    this.service.getcontactUs().subscribe(contactUs => {
      this.contactUsList = contactUs;
    });
  }

  public addContactUs() {
    this.router.navigate(['/contactus']);
  }

  public editContactUs(contactUsId: number) {
    this.router.navigate(['/contactus/' + contactUsId]);
  }

  public deleteContactUs(contactUsId: number) {
    this.confirmationDialogService.confirm('Atention', 'Do you really want to delete this category?')
      .then(() =>
        this.service.deleteContactUs(contactUsId).subscribe(() => {
          this.toastr.success('The category has been deleted');
          this.getCategories();
        },
          error => {
            this.toastr.error('Failed to delete the category.');
          }))
      .catch(() => '');
  }

  public searchContactUs() {
    //TODO
    this.searchValueChanged.next('');
  }

  private search() {
    if (this.searchTerm !== '') {
      this.service.search(this.searchTerm).subscribe(contactUs => {
        this.contactUsList = contactUs;
      }, error => {
        this.contactUsList = [];
      });
    } else {
      this.service.getcontactUs().subscribe(contatUsAll => this.contactUsList = contatUsAll);
    }
  }



}
