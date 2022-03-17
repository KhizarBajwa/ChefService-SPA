
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Chef } from 'src/app/models/Chef';
import { ChefService } from 'src/app/services/chef.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  public imageSrc: string = '';
  public formData: Chef = new Chef();
  public categories: any;

  constructor(public service: ChefService,
              private categoryService: CategoryService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    if (id != null) {
      this.service.getChefById(id).subscribe(chef => {
        this.formData = chef;
        const publishDate =  new Date(chef.publishDate);
        this.formData.publishDate = { year: publishDate.getFullYear(), month: publishDate.getMonth(), day: publishDate.getDay() };
        this.imageSrc = chef.chefPic!;
      }, err => {
        this.toastr.error('An error occurred on get the record.');
      });
    } else {
      this.resetForm();
    }

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    }, err => {
      this.toastr.error('An error occurred on get the records.');
    });
  }

  public onSubmit(form: NgForm) {
    form.value.categoryId = Number(form.value.categoryId);
    form.value.publishDate = this.convertStringToDate(form.value.publishDate);
    if (form.value.id === 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  public insertRecord(form: NgForm) {
    this.formData.chefPic = this.imageSrc!;
    this.service.addChef(form.form.value).subscribe(() => {
      this.toastr.success('Registration successful');
      this.resetForm(form);
      this.router.navigate(['/chefs']);
    }, () => {
      this.toastr.error('An error occurred on insert the record.');
    });
  }

  public updateRecord(form: NgForm) {
    debugger;
    this.formData.chefPic = this.imageSrc!;
    console.log(form.form.value);
    this.service.updateChef(form.form.value.id, form.form.value).subscribe(() => {
      this.toastr.success('Updated successful');
      this.resetForm(form);
      this.router.navigate(['/chefs']);
    }, () => {
      this.toastr.error('An error occurred on update the record.');
    });
  }

  public cancel() {
    this.router.navigate(['/chefs']);
  }

  private resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.formData = {
      id: 0,
      name: '',
      author: '',
      description: '',
      publishDate: null,
      chefPic: '',
      orginalPrice: 0,
      discountedPrice: 0,
      isInStock: true
    };
  }

  private convertStringToDate(date: { year: any; month: any; day: any; }) {
    return new Date(`${date.year}-${date.month}-${date.day}`);
  }



  handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.formData.chefPic = this.imageSrc!;
    console.log(this.imageSrc)
  }

}
