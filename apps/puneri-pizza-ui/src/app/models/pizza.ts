export interface Pizza {
  id: number;
  name: string;
  description: string;
  veg: boolean;
  imageUrl: string;
  basePrice: number;
  size: Size[];
  crust: Crust[];
  selectedSize: Size;
  selectedCrust: Crust;
}

export interface Size {
  type: string;
  price: number
}

export interface Crust {
  type: string;
  price: number
}

export interface CartPizza extends Pizza {
  type: string;
}