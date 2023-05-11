export const foodData = [
  {
    id: 1,
    name: 'Pizza margarita',
    img: '/img/pizza-margarita.jpg',
    section: 'pizzas',
    price: 1500,
    description: 'una descripción descritiva',
  },
  {
    id: 2,
    name: 'Pizza napolitana',
    img: '/img/pizza-napolitana.jpg',
    section: 'pizzas',
    price: 1500,
    description: 'una descripción descritiva',
  },
  {
    id: 3,
    name: 'Pizza margarita vegana',
    img: '/img/pizza-margarita.jpg',
    section: 'pizzas',
    price: 1500,
    description: 'una descripción descritiva',
  },
  {
    id: 4,
    name: 'Pizza napolitana vegana',
    img: '/img/pizza-napolitana.jpg',
    section: 'pizzas',
    price: 1500,
    description: 'una descripción descritiva',
  },
  {
    id: 5,
    name: 'Pizza ananá vegana',
    img: '/img/pizza-napolitana.jpg',
    section: 'pizzas',
    price: 1500,
    description: 'una descripción descritiva',
  },
  {
    id: 6,
    name: 'Pizza ananá',
    img: '/img/pizza-napolitana.jpg',
    section: 'pizzas',
    price: 1500,
    description: 'una descripción descritiva',
  },
  {
    id: 7,
    name: 'Hamburguesa vegana completa',
    img: '/img/hamburgesa-vegana.jpg',
    section: 'hamburguesas',
    price: 1100,
    description: 'una descripción descritiva',
  },
  {
    id: 8,
    name: 'Hamburguesa doble completa',
    img: '/img/hamburguesa.jpg',
    section: 'hamburguesas',
    price: 1100,
    description: 'una descripción descritiva',
  },
  {
    id: 9,
    name: 'Hamburguesa simple completa',
    img: '/img/hamburguesa.jpg',
    section: 'hamburguesas',
    price: 1100,
    description: 'una descripción descritiva',
  },
  {
    id: 10,
    name: 'Sandwich vegano',
    img: '/img/sandwich-vegano.jpg',
    section: 'sandwiches',
    price: 1100,
    description: 'una descripción descritiva',
  },
  {
    id: 11,
    name: 'Sandwich vegetariano',
    img: '/img/sandwich-vegano.jpg',
    section: 'sandwiches',
    price: 1100,
    description: 'una descripción descritiva',
  },
  {
    id: 12,
    name: 'Sandwich de milanesa',
    img: '/img/sandwich-vegano.jpg',
    section: 'sandwiches',
    price: 1100,
    description: 'una descripción descritiva',
  },
];

export const arraySections = [
  { section: 'pizzas', imgTag: 'img/sandwich-vegano.jpg' },
  { section: 'hamburguesas', imgTag: 'img/hamburguesa.jpg' },
  { section: 'sandwiches ', imgTag: 'img/sandwich-vegano.jpg' },
];

export const FoodItems = foodData.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }

  res[food.section] = [...res[food.section], food];

  return res;
}, {});
