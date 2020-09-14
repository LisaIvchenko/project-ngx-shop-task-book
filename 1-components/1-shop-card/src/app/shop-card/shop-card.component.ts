import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input() public product: ICartProduct;
  @Output() public increment: EventEmitter<any> = new EventEmitter<any>();
  @Output() public decrement: EventEmitter<any> = new EventEmitter<any>();

  public decrementProductInCart(): void {
    this.decrement.emit();
  }

  public incrementProductInCart(): void {
    this.increment.emit();
  }

}
