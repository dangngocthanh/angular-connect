import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryServiceService} from "../category-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm?: FormGroup;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: []
    })
  }

  store() {
    let data = this.createForm?.value
    this.categoryService.store(data).subscribe(res => {
      if (res.status == 'success'){
        this.router.navigate([''])
      }
    })
  }
}
