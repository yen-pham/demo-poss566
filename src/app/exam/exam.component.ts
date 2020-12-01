import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  public employees = [
    {
      id: "1",
      name: " Pham van A",
      age: 27
    },
    {
      id: "2",
      name: " Pham van B",
      age: 27
    },
    {
      id: "3",
      name: " Pham van C",
      age: 27
    }
  ];
  public idEdit = "";
  public empForm = new FormGroup({
      'name':new FormControl("",[
        Validators.required
      ]),
      'age' : new FormControl(0,[
        Validators.required,
        Validators.max(100),
        Validators.min(0)

      ])
    });
    public empFormEdit= new FormGroup({
      'nameEdit':new FormControl("",[
        Validators.required
      ]),
      'ageEdit' : new FormControl(0,[
        Validators.required,
        Validators.max(100),
        Validators.min(0)

      ])
    })
 
  constructor() {}

  ngOnInit() {}
  delete(id:string) {
    this.employees = this.employees.filter(item => item.id != id);
  }
  edit(id:string) {
    this.idEdit = id;
    let index = this.employees.findIndex(item => item.id == id);
    this.empFormEdit.setValue({nameEdit:this.employees[index].name,ageEdit:this.employees[index].age})
  }
  save() {
    let index = this.employees.findIndex(item => item.id == this.idEdit);

    this.employees[index].name = this.empFormEdit.value.nameEdit;
    this.employees[index].age = this.empFormEdit.value.ageEdit;
    this.idEdit = "";
    alert("Cap nhap thanh cong!!");
  }
  

  onSubmit() {
    let id =
      Math.random()
        .toString(36)
        .substring(2) + new Date().getTime().toString();
    this.employees.push({...this.empForm.value, id });
    this.empForm.reset();
    // console.log(this.empForm);
    

  }
}



