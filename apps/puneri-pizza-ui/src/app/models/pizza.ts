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
  cheese: Cheese[];
  selectedCheese: Cheese;
  toppings: Topping[]
  selectedToppings: Topping[]
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

export interface Topping {
  name: string;
  price: number;
  imageUrl: string;
}

export interface Cheese {
  size: string;
  price: number;
}