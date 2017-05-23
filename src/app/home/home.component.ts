import { Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-collection';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userServ: UserService, 
    private router: Router
  ){ 

  }

  ngOnInit() {
   //  let stage = new createjs.Stage("demo");
   //  let stageWidth = stage.width;
   //  let stageHeight = stage.height;
   //  let queue = new createjs.LoadQueue(false);
   //  // let stage = new createjs.Stage("demo");       
   // //  let circle = new createjs.Shape();
   // //  circle.graphics.beginFill("#FFF").drawCircle(0, 0, 50);
   // //  circle.x = 100;
   // //  circle.y = 100;
   // //  console.log(circle);
   //  stage.addChild(circle);
   //  queue.addEventListener("complete", this.imagesLoadedHandler);
   //  queue.loadManifest([
   //    { id: "spritesheet", src: "assets/slot_machine_fruit.png" }
   //  ]);
   //  let frame_img = queue.getResult("frame");
   //  let frame_bmp = new createjs.Bitmap(frame_img);
   //  frame_bmp.x = (stageWidth - frame_bmp.image.width) / 2;
   //  frame_bmp.y = (stageHeight - frame_bmp.image.height) / 2;
   //  stage.addChild(frame_bmp);
  }
  imagesLoadedHandler() {

  }
  logout(){
    this.userServ.logout();
    this.router.navigate(['']);
  }

}
