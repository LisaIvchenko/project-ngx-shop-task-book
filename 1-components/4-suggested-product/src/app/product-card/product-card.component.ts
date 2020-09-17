import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() public product = {} as IProduct;
  @Output() public goToProduct: EventEmitter<any> = new EventEmitter<any>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
