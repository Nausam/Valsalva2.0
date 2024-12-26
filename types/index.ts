export type Fin = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  isAvailable: boolean;
  footpocketColor: string;
  categoryId: string;
  //   createdAt: string;
};

export type Category = {
  _id: string;
  name: string;
};
