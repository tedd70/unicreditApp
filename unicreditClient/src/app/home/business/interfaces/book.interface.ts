export interface BookInterface {
  id: number;
  categoryId: number;
  price: string;
  quantity: number;
  description?: string;
  location: string;
  author: string;
  name: string;
  editMode?: boolean;
}