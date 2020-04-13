import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';


declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 videos:any[]=[];
 videoSeleccionado:any;
 
  constructor(private _ys:YoutubeService) { 
    this._ys.getvideos().subscribe(res=>{
      this.videos=res;

      console.log(this.videos);
    });
  }

  ngOnInit(): void {
  }

verVideo(video:any){
this.videoSeleccionado=video;
$('#myModal').modal({
  show: true
})
}
cerrarModal(){
  this.videoSeleccionado=null;
  $('#myModal').modal('hide')
}

cargarMas(){

}
}
