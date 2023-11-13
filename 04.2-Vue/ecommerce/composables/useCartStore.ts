import { syncRef } from '@vueuse/core';
import { Product } from '~/types';

export type CartItem = { quantity: number; data: Product };
export type CartItemRecord = Record<Product['id'], CartItem>;

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItemRecord>({});

  const { getCart, setCart } = useCartApi();

  const totalItems = computed(() => {
    if (!items.value) {
      return 0;
    }
    return Object.values(items.value).reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  });

  const addToCart = async (item: Product) => {
    await setCart({
      ...items.value,
      [item.id]: {
        quantity: 1,
        data: item
      }
    });

    if (items.value && items.value[item.id]?.quantity) {
      await setCart({
        ...items.value,
        [item.id]: {
          quantity: items.value[item.id].quantity + 1,
          data: item
        }
      });
    }

    items.value = await getCart();
  };

  //funciona pero está mal no se puede usar en el test da error
  useAsyncData('cart', async () => {
    items.value = await getCart();
  });
  // const actualizar = async () => {
  //   items.value = await getCart();
  // };
  // actualizar();
  return {
    items,
    totalItems,
    addToCart
  };
});
