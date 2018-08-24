import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtDataService {
  private urlGetProducts = environment.apiUrl + "/product";

  private urlGetRandomProducts = environment.apiUrl + "/product/random?shop=utilitarian&page=0&size=20&category=Rating";

  private urlGetProduct = environment.apiUrl + "/product?shop=utilitarian&id=";

  private urlCreateCart = environment.apiUrl + "/cart";

  private urlGetCart = environment.apiUrl + "/cart?";

  private urlAddToCart = environment.apiUrl + "/cart/item";

  private urlDeleteCart = environment.apiUrl + "/cart/item?";

  private urlGetRelatedProducts = environment.apiUrl + "/product/related?id=";

  private urlPostRatings = environment.apiUrl + "/user/rating";

  private urlGetRecommendations = environment.apiUrl + "/user/recommendation?shop=utilitarian&user=";

  private defaultIndex: string = '1';

  private defaultSize: string = '10';

  private shopType: string = 'utilitarian';

  constructor(private http: HttpClient) { }

  readProducts(index, pageSize, category): Observable<any> {
    let params = new HttpParams();
    let options = null;

    params = params.append('shop', this.shopType);
    params = index ? params.append('page', index) : params.append('page', this.defaultIndex);
    params = pageSize ? params.append('size', pageSize) : params.append('size', this.defaultSize);
    params = category ? params.append('category', category) : params;

    options = 
    {
      params: params,
      responseType: 'json'
    }

    return this.http.get(this.urlGetProducts, options);
  }

  readProduct(id): Observable<any> {
    let url = this.urlGetProduct + id;
    return this.http.get(url, { responseType: 'json' });
  }

  readRelatedProducts(id: number): Observable<any> {
    let url = this.urlGetRelatedProducts + id;
    return this.http.get(url, { responseType: 'json' });
  }

  searchProducts(index, pageSize, searchTerm?, order?, category?): Observable<any> {
   
    searchTerm = searchTerm ? searchTerm.trim(): null;

    let params = new HttpParams();
    let options = null;

    params = params.append('shop', this.shopType);
    params = index ? params.append('page', index) : params.append('page', this.defaultIndex);
    params = pageSize ? params.append('size', pageSize) : params.append('size', this.defaultSize);
    params = searchTerm ? params.append('searchTerm', searchTerm) : params;
    params = order ? params.append('order', order) : params;
    params = category ? params.append('category', category) : params;

    options = 
    {
      params: params,
      responseType: 'json'
    }

    console.log(options);
    return this.http.get(this.urlGetProducts, options);
  }

  getRandomProducts(): Observable<any> {
    return this.http.get(this.urlGetRandomProducts, { responseType: 'json' });
  }

  submitUserRatings(userId: string, ratedProducts: any): Observable<any> {
    let url = this.urlPostRatings;
    console.log({ 'userId': userId, 'ratings': ratedProducts });
    return this.http.post(url,
      { 'userId': userId, 'ratings': ratedProducts }, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      });
  }

  createCart(product: any, quantity: number, userId: string): Observable<any> {
    let url = this.urlCreateCart;
    console.log(url);
    return this.http.post(url,
      { 'productId': product.Id, 'quantity': quantity , 'userId': userId}, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      });
  }

  getCart(cartId): Observable<any> {
    let url = this.urlGetCart + 'id=' + cartId;
    return this.http.get(url, { responseType: 'json' });
  }

  // Recommendation Type: (random, salesRank, ColabFilter)
  getRecommendedProducts(userId: string, recommendationType: string) {
    let url = this.urlGetRecommendations + userId + '&recType=' + recommendationType;
    console.log(url);
    return this.http.get(url, { responseType: 'json' });
  }


  addToCart(cartId, product: any, quantity: number): Observable<any> {
    let url = this.urlAddToCart;
    console.log(url);
    return this.http.put(url,
      { 'cartId': cartId, 'productId': product.Id, 'quantity': quantity }, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      });
  }

  deleteFromCart(cartId, item: any): Observable<any> {
    let url = this.urlDeleteCart + 'cartId=' + cartId + '&cartItemId=' + item.Id;
    console.log(url);
    return this.http.delete(url, { responseType: 'json' });
  }
}
