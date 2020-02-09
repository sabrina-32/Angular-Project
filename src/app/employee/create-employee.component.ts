import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Key } from 'protractor';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  validationMessages = {
    'fullName': {
      'required': 'full  name  is required.',
      'minlength': 'full  name must  be  greater than 2 characters.',
      'maxlength': 'full  name must  be  less than 10 characters.'

    },

    'email':{

      'required': 'email  is required.',

    },
    'skillName':{
      'required': 'Skill  name  is required.',

    },
    'experienceInYears':{
      'required': 'Experience  name  is required.',

    },
    'proficiency':{
      'required': 'proficiency  name  is required.',

    },
  };

  formErrors = {
    'fullName': '',
    'email':'',
    'skillName':'',
    'experienceInYears':'',
    'proficiency':''
  };





  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2) , Validators.maxLength(10)]],
      email: ['',Validators.required],
      skills: this.fb.group({
        skillName: ['',Validators.required],
        experienceInYears: ['',Validators.required],
        proficiency: ['',Validators.required]
      })
    });

    this.employeeForm.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.employeeForm);

    });

  }

  logValidationErrors(group:FormGroup = this.employeeForm):void{

    Object.keys(group.controls).forEach((Key: string)=>{
   const abstractControl =  group.get(Key);

   if(abstractControl  instanceof  FormGroup){

    this.logValidationErrors(abstractControl);


   }
   else{
     this.formErrors[Key] = '';


    if(abstractControl && !abstractControl.valid){
      const  messages = this.validationMessages[Key];
  
      for(const  errorKey  in  abstractControl.errors){
        if(errorKey){
          this.formErrors[Key]+=messages[errorKey]+'';

        }
      }
      
      
    }

  }

    }
    );
    
  }

  onLoadDataClick(): void {
    // this.logValidationErrors(this.employeeForm);

    // console.log(this.formErrors);
    
   
  }
  onSubmit(): void{
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);

  }

}