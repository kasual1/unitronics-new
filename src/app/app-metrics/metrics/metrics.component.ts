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

  revenuePerTreatementNone: string = '0,00 €';
  revenuePerTreatementRandom: string = '0,00 €';
  revenuePerTreatementSalesRank: string = '0,00 €';
  revenuePerTreatementColabFilter: string = '0,00 €';

  productsPerTreatmentNone: number = 0;
  productsPerTreatmentRandom: number = 0;
  productsPerTreatmentSalesRank: number = 0;
  productsPerTreatmentColabFilter: number = 0;


  constructor(private metricsDataService: MetricsDataService) { }

  ngOnInit() {
    this.queryData();
    setInterval(() => {
      this.queryData();
    }, 120 * 1000);
  }

  private queryData() {

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


    // No. of products per treatment
    this.metricsDataService.getNumberOfProductsPerTreatment('none').subscribe((amount) => {
      this.productsPerTreatmentNone = amount;
    });

    this.metricsDataService.getNumberOfProductsPerTreatment('random').subscribe((amount) => {
      this.productsPerTreatmentRandom = amount;
    });

    this.metricsDataService.getNumberOfProductsPerTreatment('salesRank').subscribe((amount) => {
      this.productsPerTreatmentSalesRank = amount;
    });

    this.metricsDataService.getNumberOfProductsPerTreatment('colabFilter').subscribe((amount) => {
      this.productsPerTreatmentColabFilter = amount;
    });
  }

}
