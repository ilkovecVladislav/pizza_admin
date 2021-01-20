import { protectedGet, protectedPost, protectedPut, protectedDelete } from './protectedAxios';
import type Ingredient from './types/Ingredient';

const BASE_URL = '/ingredients';

export const getIngredients = (): Promise<Ingredient[]> => protectedGet(BASE_URL);

export const postIngredient = (data: FormData): Promise<void> => protectedPost(BASE_URL, data);

export const getIngredientById = (id: string): Promise<Ingredient> =>
  protectedGet(`${BASE_URL}/${id}`);

export const putIngredient = ({ id, data }: { id: string; data: FormData }): Promise<void> =>
  protectedPut(`${BASE_URL}/${id}`, data);

export const deleteIngredient = (id: string): Promise<void> => protectedDelete(`${BASE_URL}/${id}`);
