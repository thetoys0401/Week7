import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return [
      new Product(1,"Fried Chicken",100,20,"https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZDZHF5KNP4VME/hero/77a3ee94dc9343fa943071d6eb44b723_1587703117640000397.jpeg"),
      new Product(2,"Nugget",100,20,"https://cf.shopee.co.th/file/9e590c5425d013f7b602e482ce9f6aa3"),
      new Product(3,"Mashed",100,20,"https://images-gmi-pmc.edge-generalmills.com/1156f4ec-29c8-4cd9-80db-7d4ee330b1d0.jpg"),
      new Product(4,"Egg Tart",100,20,"https://prods3.imgix.net/images/articles/2017_08/Non-Feature-Portuguese-Egg-Tart-Recipe.jpg"),
      new Product(5,"Chicken Burger",100,20,"https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"),
    ];
  }
}
