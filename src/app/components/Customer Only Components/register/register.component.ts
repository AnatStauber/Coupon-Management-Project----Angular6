import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Exception } from 'src/app/models/exception';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CustomerService]
})


export class RegisterComponent {

  public customer = new Customer();
  // private exception = new Exception();
  constructor (private router: Router, private customerService: CustomerService) { }

  public register(): void {
    const observable = this.customerService.register(this.customer);
    observable.subscribe(registered => {
      alert( 
        'you have registered successfully!');
        this.router.navigate(["/login"]);
       }); 
  }


//   public getErrorMessage(): Observable {

//     .catch
//   }

}
