export const foodData = [
  {
    name: 'Pizza margarita',
    img: 'img/pizza-margarita.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Pizza napolitana',
    img: 'img/pizza-napolitana.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Pizza margarita vegana',
    img: 'img/pizza-margarita.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Pizza napolitana vegana',
    img: 'img/pizza-napolitana.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Hamburguesa vegana completa',
    img: 'img/hamburguesa-vegana.jpg',
    section: 'Hamburguesa',
  },
  {
    name: 'Hamburguesa doble completa',
    img: 'img/hamburguesa.jpg',
    section: 'Hamburguesa',
  },
  {
    name: 'Sandwich vegano',
    img: 'img/sandwich-vegano.jpg',
    section: 'Sandwich',
  },
];

export const FoodItems = foodData.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  } else {
    res[food.section] = [...res[food.section], food];
  }
  return res;
}, {});
