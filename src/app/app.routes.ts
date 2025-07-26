import { About } from './components/about/about';
import { Component } from '@angular/core';
import { Home } from './components/home/home';
import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
  {path:'' , redirectTo: 'home', pathMatch:"full"},
  {path:'home', component:Home , title:'home'},
  {path:'about', component:About, title:'about'},
  {path:'portfolio', component:Portfolio, title:'Portfolio'},
  {path:'contact', component:Contact, title:'Contact'},
  {path:'**' , component:Notfound, title:'notfound'}
];
