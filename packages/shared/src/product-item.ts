export interface ProductItem {
    _id?: string;
    title: string,
    price: number,
    description?: string,
    category?: string[],
    weight?: string,
    manufacturer?: string
    mainImage?: {url: string, alt: string},
    moreImages?: [{url: string, alt: string}]
    
}