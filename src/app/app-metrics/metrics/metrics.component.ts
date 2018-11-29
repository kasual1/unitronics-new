import { Component, OnInit } from '@angular/core';
import { MetricsDataService } from '../metrics-data.service';
import { formatCurrency } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

// the second parameter 'fr' is optional
registerLocaleData(localeDe);

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  revenuePerShopTypeHedonic: string = '0,00 €';
  revenuePerShopTypeUtilitarian: string = '0,00 €';
  revenuePerShopTypeExperienced: string = '0,00 €';
  revenuePerShopTypeSearch: string = '0,00 €';

  revenuePerTreatementNone: string = '0,00 €';
  revenuePerTreatementRandom: string = '0,00 €';
  revenuePerTreatementSalesRank: string = '0,00 €';
  revenuePerTreatementColabFilter: string = '0,00 €';

  productsPerShopHedonic: number = 0;
  productsPerShopUtilitarian: number = 0;
  productsPerShopExperienced: number = 0;
  productsPerShopSearch: number = 0;



  constructor(private metricsDataService: MetricsDataService) { }

  ngOnInit() {
    this.queryData();
    setInterval(() => {
      this.queryData();
    }, 20 * 1000);
  }

  private queryData() {
    this.metricsDataService.getRevenuePerShopType('hedonic').subscribe((revenue) => {
      this.revenuePerShopTypeHedonic = formatCurrency(revenue / 100, 'de', '€');
    });

    this.metricsDataService.getRevenuePerShopType('utilitarian').subscribe((revenue) => {
      this.revenuePerShopTypeUtilitarian = formatCurrency(revenue / 100, 'de', '€');;
    });

    this.metricsDataService.getRevenuePerShopType('experienced').subscribe((revenue) => {
      this.revenuePerShopTypeExperienced = formatCurrency(revenue / 100, 'de', '€');;
    });

    this.metricsDataService.getRevenuePerShopType('credence').subscribe((revenue) => {
      this.revenuePerShopTypeSearch = formatCurrency(revenue / 100, 'de', '€');;
    });


    this.metricsDataService.getRevenuePerTreatment('none').subscribe((revenue) => {
      this.revenuePerTreatementNone = formatCurrency(revenue / 100, 'de', '€');;
    });

    this.metricsDataService.getRevenuePerTreatment('random').subscribe((revenue) => {
      this.revenuePerTreatementRandom = formatCurrency(revenue / 100, 'de', '€');;
    });

    this.metricsDataService.getRevenuePerTreatment('salesRank').subscribe((revenue) => {
      this.revenuePerTreatementSalesRank = formatCurrency(revenue / 100, 'de', '€');;
    });

    this.metricsDataService.getRevenuePerTreatment('colabFilter').subscribe((revenue) => {
      this.revenuePerTreatementColabFilter = formatCurrency(revenue / 100, 'de', '€');;
    });

    // No. of Products per Shop

    this.metricsDataService.getNumberOfProductsBoughtPerShopType('hedonic').subscribe((amount) => {
      this.productsPerShopHedonic = amount;
    });

    this.metricsDataService.getNumberOfProductsBoughtPerShopType('utilitarian').subscribe((amount) => {
      this.productsPerShopUtilitarian = amount;
    });

    this.metricsDataService.getNumberOfProductsBoughtPerShopType('experienced').subscribe((amount) => {
      this.productsPerShopExperienced = amount;
    });

    this.metricsDataService.getNumberOfProductsBoughtPerShopType('credence').subscribe((amount) => {
      this.productsPerShopSearch = amount;
    });
  }

}
