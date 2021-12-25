import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

 mobileBtn:HTMLElement = document.getElementById('mobile-menu');
  nav:HTMLElement = document.querySelector('nav');
  mobileBtnExit:HTMLElement = document.getElementById('mobile-exit');

  menutoggle:boolean = false;



  constructor() { 


  }

  ngOnInit(): void {
  }

  openMenu(){
    this.menutoggle = true;
    

  }

  closeMenu(){

    this.menutoggle= false;
  }

}
