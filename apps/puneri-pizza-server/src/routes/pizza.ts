import { Request, Response, Router } from 'express';

const router = Router();

const pizzaList = [
  {
    "id": 1,
    "name": "Veggie Paradise",
    "description": "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/8a9f4cab-4f46-4b71-8e9b-55bba0b96366_new_veggie_paradise.jpg"
  },
  {
    "id": 2,
    "name": "Margherita",
    "description": "Classic delight with 100% real mozzarella cheese",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/79bc3609-690b-440e-b8be-74694b1f3215_new_margherita_2502.jpg"
  },
  {
    "id": 3,
    "name": "Blazing Onion & Paprika",
    "description": "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/10ddf620-ae20-477f-b4b2-9bce1ded021d_BlazingOnionPaprikacartmenu.jpeg"
  },
  {
    "id": 4,
    "name": "Fiery Sausage & Paprika",
    "description": "Spiciest non veg pizza with spicy & herby chicken sausage and red paprika toppings on a new spicy peri peri sauce base.",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4d42a594-14be-48d2-ac4a-adcd0034a08f_FierySausagePaprikadef.jpeg"
  },
  {
    "id": 5,
    "name": "Farmhouse",
    "description": "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/1b892978-f689-4199-90d2-47df4e261235_farmhouse.png"
  },
  {
    "id": 6,
    "name": "Peppy Paneer",
    "description": "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/f65964c6-de96-475d-a5a9-3f3698d66ee7_new_peppy_paneer.jpg"
  },
  {
    "id": 7,
    "name": "The 4 Cheese Pizza",
    "description": "Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/7f78135a-c94a-4586-b9c2-35e955924e57_The4CheesePizza.jpg"
  },
  {
    "id": 8,
    "name": "Veg Extravaganza",
    "description": "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/5f8ad75f-22d0-4dfb-80e1-852fe2f1caf9_new_veg_extravaganza.jpg"
  },
  {
    "id": 9,
    "name": "Cheese n Corn",
    "description": "A delectable combination of sweet & juicy golden corn",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/a94524cf-3acc-476a-a3a8-f0209ea9d4b2_new_cheese_n_corn.jpg"
  },
  {
    "id": 10,
    "name": "Indi Tandoori Paneer",
    "description": "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/17bc2a18-73f5-49d7-95eb-327091806cd6_IndianTandooriPaneer.jpg"
  },
  {
    "id": 11,
    "name": "Pepper Barbecue Chicken",
    "veg": false,
    "description": "Pepper barbecue chicken for that extra zing",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/caa88590-9486-4a8b-be77-36e7403aa301_new_pepper_barbeque_chicken.jpg"
  },
  {
    "id": 12,
    "name": "Chicken Sausage",
    "veg": false,
    "description": "American classic! Spicy, herbed chicken sausage on pizza",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/d563d188-486e-4b09-9037-bf183ae70de0_new_chicken_sausage.jpg"
  },
  {
    "id": 13,
    "name": "Chicken Dominator",
    "veg": false,
    "description": "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/97011d39-db6b-4665-a486-73aeb504da23_new_chicken_dominator.jpg"
  },
  {
    "id": 14,
    "name": "Fiery Sausage & Paprika",
    "veg": false,
    "description": "Spiciest non veg pizza with spicy & herby chicken sausage and red paprika toppings on a new spicy peri peri sauce base.",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4d42a594-14be-48d2-ac4a-adcd0034a08f_FierySausagePaprikadef.jpeg"
  },
  {
    "id": 15,
    "name": "Indi Chicken Tikka",
    "veg": false,
    "description": "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/b7209ffc-db0f-4c30-9504-b11a11771819_IndianTandooriChickenTikka.jpg"
  },
  {
    "id": 16,
    "name": "Non Veg Supreme",
    "veg": false,
    "description": "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/925d19dc-9737-4e96-9d31-3cce09083b13_new_non_veg_supreme.jpg"
  },
  {
    "id": 17,
    "name": "Spiced Double Chicken",
    "veg": false,
    "description": "Delightful combination of our spicy duo- Pepper Barbecue Chicken and Peri Peri Chicken for Chicken Lovers.",
    "imageUrl": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/8c83ba68-879e-47aa-911c-4b523844a025_SpicedDoubleChicken.jpg"
  },
];

router.get('/', async (req: Request, res: Response) => {
  res.json(pizzaList);
});

export default router;