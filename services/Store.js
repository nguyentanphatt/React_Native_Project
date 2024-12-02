import { configureStore } from '@reduxjs/toolkit';
import fruitsSlice from './slices/FruitsSlice';
import electronicsSlice from "./slices/ElectronicsSlice";
import beautySlice from "./slices/BeautySlice";
import fashionSlice from "./slices/FashionSlice";
import CartSlice from "./slices/CartSlice";
import cartSlice from "./slices/CartSlice";

export const store = configureStore({
    reducer: {
        electronics: electronicsSlice,
        fruits: fruitsSlice,
        beauty: beautySlice,
        fashion: fashionSlice,
        cart: cartSlice,
    },
});
