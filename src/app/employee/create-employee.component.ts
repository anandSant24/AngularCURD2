import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }
  employeeForm: FormGroup

  ngOnInit() {
    this.employeeForm =  new FormGroup({
      'fullName': new FormControl(),
      'email': new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    })
  }

  onSubmit(): void{
    console.log(this.employeeForm);
    console.log(this.employeeForm.controls.fullName.value)
    console.log(this.employeeForm.get('email').value);
    console.log("is it pristine",this.employeeForm.controls.fullName.pristine)
    console.log("is email filed touched",this.employeeForm.get('email').touched);  
  }

  onLoadData():void{
    this.employeeForm.setValue({
      fullName: 'A',
      email: 'a@a.com',
      skills: {
        skillName: 'JavaScript',
        experienceInYears: '6',
        proficiency: 'Beginner'
      }
    })
  }

  loadOnlyPartialData():void{
    this.employeeForm.patchValue({
      skills: {
        skillName: 'JavaScript',
        experienceInYears: '6'
      }
    })
  }
}
