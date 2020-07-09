import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   model: any = {};
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  Login(){
    this.authservice.login(this.model).subscribe(next => {
      console.log('logged in successfull');
    }, error => {
      console.log('Error While Logging in ');
    }
    );
  }

  Loggedin(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  Logout(){
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
