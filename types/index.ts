export type Fin = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  isAvailable: boolean;
  footpocketColor: string;
  categoryId: {
    _id: string;
    name: string;
  };
  //   createdAt: string;
};

export type Category = {
  _id: string;
  name: string;
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type UpdateProductParams = {
  id: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  isAvailable?: boolean;
  footpocketColor?: string;
  categoryId?: string;
  path?: string;
};
