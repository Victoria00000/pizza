export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

export const foodData = [
  {
    name: 'Pizza margarita',
    img: 'img/pizza-margarita.jpg',
    section: 'Pizzas',
    price: 1500,
  },
  {
    name: 'Pizza napolitana',
    img: 'img/pizza-napolitana.jpg',
    section: 'Pizzas',
    price: 1500,
  },
  {
    name: 'Pizza margarita vegana',
    img: 'img/pizza-margarita.jpg',
    section: 'Pizzas',
    price: 1500,
  },
  {
    name: 'Pizza napolitana vegana',
    img: 'img/pizza-napolitana.jpg',
    section: 'Pizzas',
    price: 1500,
  },
  {
    name: 'Hamburguesa vegana completa',
    img: 'img/hamburgesa-vegana.jpg',
    section: 'Hamburguesa',
    price: 1100,
  },
  {
    name: 'Hamburguesa doble completa',
    img: 'img/hamburguesa.jpg',
    section: 'Hamburguesa',
    price: 1100,
  },
  {
    name: 'Sandwich vegano',
    img: 'img/sandwich-vegano.jpg',
    section: 'Sandwich',
    price: 1100,
  },
];

export const FoodItems = foodData.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }

  res[food.section] = [...res[food.section], food];

  return res;
}, {});
