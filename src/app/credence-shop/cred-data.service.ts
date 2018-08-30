import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CredDataService {
  private urlGetProducts = environment.apiUrl + "/product";

  private urlGetRandomProducts = environment.apiUrl + "/product/random?shop=credence&page=0&size=20&category=Rating";

  private urlGetProduct = environment.apiUrl + "/product?shop=credence&id=";

  private urlCreateCart = environment.apiUrl + "/cart";

  private urlGetCart = environment.apiUrl + "/cart?";

  private urlAddToCart = environment.apiUrl + "/cart/item";

  private urlDeleteCart = environment.apiUrl + "/cart/item?";

  private urlGetRelatedProducts = environment.apiUrl + "/product/related?id=";

  private urlPostRatings = environment.apiUrl + "/user/rating";

  private urlGetRecommendations = environment.apiUrl + "/user/recommendation?shop=credence&user=";

  private urlSurveyResults = environment.apiUrl + "/user/product-survey";

  private defaultIndex: string = '1';

  private defaultSize: string = '10';

  private shopType: string = 'credence';

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

    searchTerm = searchTerm ? searchTerm.trim() : null;

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

  searchProductsByCategory(index, pageSize, category, order?) {
    let url;
    if (order) {
      console.log('order is set: ' + order);
      url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize
        + '&category=' + category + '&order=' + order;
    } else {
      url = this.urlGetProducts + 'page=' + index + '&size=' + pageSize
        + '&category=' + category;
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

  createCart(product: any, quantity: number, userId: string): Observable<any> {
    let url = this.urlCreateCart;
    console.log(url);
    return this.http.post(url,
      { 'productId': product.Id, 'quantity': quantity, 'userId': userId }, {
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
    let params = new HttpParams();
    let options = null;

    params = params.append('shop', this.shopType);
    params = userId ? params.append('user', userId) : params;
    params = recommendationType ? params.append('recType', recommendationType) : params;

    options =
      {
        params: params,
        responseType: 'json'
      }

    return this.http.get(this.urlGetRecommendations, options);
  }


  addToCart(cartId, product: any, quantity: number): Observable<any> {
    let url = this.urlAddToCart;
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

  getSurveyResults(userId: string, productId: number): Observable<any> {
    let params = new HttpParams();
    let options = null;

    params = params.append('userId', userId);
    params = params.append('productId', productId.toString());

    options =
      {
        params: params,
        responseType: 'json'
      }

    return this.http.get(this.urlSurveyResults, options);
  }

  createSurveyResults(userId: string, productId: number, surveyAnswers: any): Observable<any> {
    let body =
    {
      userId: userId,
      productId: productId,
      surveyAnswers: surveyAnswers
    };

    return this.http.post(this.urlSurveyResults,
      body, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      });
  }
}