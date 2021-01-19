import { publicGet, publicPost, publicPut, publicDelete } from './publicAxios';
import type Ingredient from './types/Ingredient';

const BASE_URL = '/ingredients';

export const getIngredients = (): Promise<Ingredient[]> => publicGet(BASE_URL);

export const postIngredient = (data: FormData): Promise<void> => publicPost(BASE_URL, data);

export const getIngredientById = (id: string): Promise<Ingredient> =>
  publicGet(`${BASE_URL}/${id}`);

export const putIngredient = ({ id, data }: { id: string; data: FormData }): Promise<void> =>
  publicPut(`${BASE_URL}/${id}`, data);

export const deleteIngredient = (id: string): Promise<void> => publicDelete(`${BASE_URL}/${id}`);
