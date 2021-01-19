import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import toString from 'lodash/toString';
import { useMutation } from 'react-query';

import { postIngredient } from 'services/ingredients';
import type Categories from 'types/Categories';

type FormValues = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: Categories;
  image: File[];
};

const CreateIngredient = (): ReactElement => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      price: 0,
      category: 'vegetables',
    },
  });

  const { mutateAsync: createIngredient } = useMutation(postIngredient);

  const onSubmit = handleSubmit(async (values) => {
    const { image, name, slug, price, category } = values;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', toString(price));
    formData.append('category', category);

    if (image) {
      formData.append('image', image[0]);
    }

    await createIngredient(formData);
    history.push('/ingredients');
  });

  return (
    <div>
      <h2>Новый игредиент</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Название
          <input id="name" type="text" name="name" ref={register} />
        </label>
        <label htmlFor="slug">
          Идентификатор
          <input id="slug" type="text" name="slug" ref={register} />
        </label>
        <label htmlFor="price">
          Цена
          <input id="price" type="number" name="price" ref={register} />
        </label>
        <label htmlFor="category">
          Категория
          <select id="category" name="category" ref={register}>
            <option value="vegetables">Овощи</option>
            <option value="sauces">Соус</option>
            <option value="cheese">Сыр</option>
            <option value="meat">Мясо</option>
          </select>
        </label>
        <label htmlFor="image">
          Картинка
          <input id="image" type="file" name="image" ref={register} />
        </label>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default CreateIngredient;
