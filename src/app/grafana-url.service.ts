import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrafanaURLService {

  private grafanaServerUrl: string = 'http://192.168.100.252:3000'; // Dirección por defecto

  getGrafanaServerUrl(): string {
    return this.grafanaServerUrl;
  }

  setGrafanaServerUrl(newUrl: string): void {
    this.grafanaServerUrl = newUrl;
  }
}
