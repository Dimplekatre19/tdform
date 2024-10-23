import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //  setTimeout(() => {
    //      this.signUp.controls['userName'].valueChanges
    //         .subscribe(data=>{
    //            if(data>=12){
    //               this.maxlenflag=true
    //            }else{
    //                this.maxlenflag=false
    //            }
    //         })
    //  },500);
  }
  


  @ViewChild('signUp')signUp!:NgForm
 maxlenflag:boolean=false;
  title = 'tdformtest';

  
  onmaxlength(eve:Event){
   let valLength=(eve.target as HTMLInputElement).value.length;
   if(valLength>=12){
       this.maxlenflag=true
   }else{
    this.maxlenflag=false
   }
  }
  
  contactMode=[
    {mode:'Phone', id:1},
    {mode:'Email', id:2}
  ]


  onSignin(){
     if(this.signUp.status=='VALID'){
    console.log(this.signUp.value)
    this.signUp.reset()
     }
  }
}
