import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricsDataService {
  private baseUrl = environment.apiUrl + "/metrics";

  constructor(private http: HttpClient) { }

  getRevenuePerShopType(shopType: string): Observable<any> {
    let params = new HttpParams();
    let options = null;

    params = params.append('shopType', shopType);

    options =
      {
        params: params,
        responseType: 'json'
      }

    return this.http.get(this.baseUrl + '/revenue_per_shop_type', options);
  }

  getNumberOfProductsBoughtPerShopType(shopType: string): Observable<any> {
    let params = new HttpParams();
    let options = null;

    params = params.append('shopType', shopType);

    options =
      {
        params: params,
        responseType: 'json'
      }

    return this.http.get(this.baseUrl + '/number_of_products_bought', options);
  }

  getNumberOfProductsPerTreatment(treatment: string): Observable<any> {
    let params = new HttpParams();
    let options = null;

    params = params.append('treatment', treatment);

    options =
      {
        params: params,
        responseType: 'json'
      }

    return this.http.get(this.baseUrl + '/products_per_treatment', options);
  }



  getRevenuePerTreatment(treatment: string): Observable<any> {
    let params = new HttpParams();
    let options = null;

    params = params.append('treatment', treatment);

    options =
      {
        params: params,
        responseType: 'json'
      }

    return this.http.get(this.baseUrl + '/revenue_per_treatment', options);
  }

}