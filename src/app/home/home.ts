import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  srcImg:string="/imgs/assassins_creed_iv_black_flag-wallpaper-1920x1080.jpg";
  flag:boolean=true;
  changeImg(){
    if(this.flag===true){
  this.srcImg="/imgs/assassins_creed_iv_black_flag_6-wallpaper-1920x1080.jpg";
    }

else{ this.srcImg='imgs/assassins_creed_iv_black_flag-wallpaper-1920x1080.jpg';

}
 this.flag=!this.flag
  }
  
  
 }


