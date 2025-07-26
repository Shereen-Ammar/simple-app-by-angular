import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  navPadding={padding:'22px 0'};
  @HostListener('window:scroll' ,[])
  onWindowScroll(){
    const scrollY = window.scrollY || window.pageYOffset;

    if(scrollY >100){
      this.navPadding = {padding:'6px 0'};
    }
    else{
      this.navPadding = {padding:'22px 0'};
    }
  }

}
