import {useState, useEffect} from 'react';
import cafeApi from '../api/cafeApi';
import {Categoria, CategoriesResponse} from '../interfaces/appInterfaces';

export const useCategories = () => {
  const [isLoading, setIsloading] = useState(true);
  const [categories, setCategories] = useState<Categoria[]>([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const resp = await cafeApi.get<CategoriesResponse>('/categorias');
    setCategories(resp.data.categorias);
  };
  return {
    isLoading,
    categories,
  };
};
