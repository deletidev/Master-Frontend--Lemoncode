import { render, screen } from '@testing-library/vue';
import Header from './Header.vue';
import { createPinia, setActivePinia } from 'pinia';
import { Product } from '~/types';

describe('Header', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('should render the header', () => {
    //Arrange
    //Act
    render(Header);

    //Assert
    screen.getByText('Cart 0');
  });
  it('shoud reflects correctly the number of products in the cart after the store has been updated', async () => {
    //Arrange
    const fakeProduct: Product = {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: '',
      discountPercentage: 1,
      rating: 2,
      stock: 1,
      brand: '',
      category: '',
      thumbnail: '',
      images: []
    };

    //Act
    const cart = useCartStore();
    const { getByText } = render(Header);
    getByText('Cart 0');
    await cart.addToCart(fakeProduct);

    //Assert
    getByText('Cart 1');
  });
});
