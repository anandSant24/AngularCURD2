import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  employeeForm: FormGroup

  ngOnInit() {
    this.employeeForm = this.fb.group({
      'fullName': ['A'],
      'email': [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
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
