type ProductType = {
 _id: string;
 name: string;
 description: string;
 image:string;
 price: number;
 oldPrice: null | number;
 sizes: ["XS", "S", "M", "L", "XL", "XXL"];
 category:string;
 subCategory: string;
 sale: boolean;
 richCollection: boolean;
};
