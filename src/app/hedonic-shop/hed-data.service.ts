import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HedDataService {

  private urlGetProducts = environment.apiUrl + "/product?shop=hedonic&";

  private urlGetRandomProducts = environment.apiUrl + "/product/random?shop=hedonic&page=0&size=20&category=Rating";

  private urlGetProduct = environment.apiUrl + "/product?shop=hedonic&id=";

  private urlCreateCart = environment.apiUrl + "/cart";

  private urlGetCart = environment.apiUrl + "/cart?";

  private urlAddToCart = environment.apiUrl + "/cart/item";

  private urlDeleteCart = environment.apiUrl + "/cart/item?";

  private urlGetRelatedProducts = environment.apiUrl + "/product/related?id=";

  private urlPostRatings = environment.apiUrl + "/user/rating";

  private urlGetRecommendations = environment.apiUrl + "/user/recommendation?shop=hedonic&user=";





  constructor(private http: HttpClient) { }

  readProducts(index, pageSize, category): Observable<any> {
    let url;
    if (category == null) {
      url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize;
    } else {
      url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize
        + '&category=' + category;
    }
    return this.http.get(url, { responseType: 'json' });
  }

  readProduct(id): Observable<any> {
    let url = this.urlGetProduct + id;
    return this.http.get(url, { responseType: 'json' });
  }

  readRelatedProducts(id: number): Observable<any> {
    let url = this.urlGetRelatedProducts + id;
    return this.http.get(url, { responseType: 'json' });
  }

  searchProducts(index, pageSize, searchTerm, order?): Observable<any> {
    let url;
    if (searchTerm == null) {
      url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize;
    } else {
      if (order) {
        console.log('order is set: ' + order);
        url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize
          + '&searchTerm=' + searchTerm + '&order=' + order;
      } else {
        url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize
          + '&searchTerm=' + searchTerm;
      }
    }
    console.log(url);
    return this.http.get(url, { responseType: 'json' });
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

  createCart(product: any, quantity: number): Observable<any> {
    let url = this.urlCreateCart;
    console.log(url);
    return this.http.post(url,
      { 'productId': product.Id, 'quantity': quantity }, {
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
