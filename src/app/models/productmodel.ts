import { CategoryModel } from "./categorymodel";

export interface ProductModel{
    id:number;
    tittle:string;
    description:string;
    price:number;
    category:CategoryModel;
    images:string[];
}