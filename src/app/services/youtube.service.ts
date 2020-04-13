import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  //token
  private token: string = "AIzaSyCxZL4t3C60jxLcn5x306x-zLuMiIDG4zI";

  private YoutubeUrl: string = "https://www.googleapis.com/youtube/v3";

  private playlistId: string = "UUJQQVLyM6wtPleV4wFBK06g";

  private nextToken: string = "";

  constructor(private http: HttpClient) { }

  getvideos() {

    const parametros = new HttpParams().set('part', 'snippet').set('maxResults', '10')
      .set('playlistId', this.playlistId)
      .set('key', this.token);
   
    const url = `${this.YoutubeUrl}/playlistItems`;
    return this.http.get(url, { params: parametros }).pipe(map((res: any) => {
      this.nextToken = res.nextPageToken
      let videos: any[] = [];
     for(let video of res.items){
             let snippet = video.snippet;

             videos.push(snippet);

     }

      return videos;
     }));
        
    
    }
  }

