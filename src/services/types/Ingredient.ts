import type Categories from 'types/Categories';

type Ingredient = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: Categories;
  image: File;
};

export default Ingredient;
