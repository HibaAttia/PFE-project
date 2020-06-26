import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http:HttpClient) { }

  downloadFile(data) {
    const REQUEST_PARAMS = new HttpParams().set('fileName',data.fileName);
    const REQUEST_URI = '/server/download';
    return this.http.get(REQUEST_URI,{
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer' 
    })
  }
}
