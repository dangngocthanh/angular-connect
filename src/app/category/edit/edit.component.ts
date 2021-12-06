import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryServiceService} from "../category-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm?: FormGroup;

  id?: number
  category?: any
  message?: string
  style?: string

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryServiceService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = paramMap.get('id')
      this.categoryService.edit(this.id).subscribe(res => {
        if (res.status == 'success') {
          this.category = res.data
        } else if (res.status == 'false') {
          this.message = res.message
          this.style = 'danger'
        }
        this.editForm = this.fb.group({
          id: [this.category.id],
          name: [this.category.name]
        })
      })

    })

  }

  update() {
    let data = this.editForm?.value;
    this.categoryService.update(data).subscribe(res => {
      if (res.status == 'success'){
        console.log(res.message);
          this.router.navigate([''])
      }
    })
  }
}
