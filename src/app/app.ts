import { Apout } from './apout/apout';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Portfollio } from './portfollio/portfollio';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Home ,Navbar , Footer , Apout,Portfollio ,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fristapp');
}
