export interface ProductReview {
    comment: string
    date: string
    rating: 2
    reviewerEmail: string
    reviewerName: string
}

export interface Product {
    id: number;
    availabilityStatus: string
    brand: string
    category: string
    description: string
    discountPercentage: number
    minimumOrderQuantity: number
    price: number
    rating: number
    returnPolicy: string
    shippingInformation: string
    sku: string
    stock: number
    thumbnail: string
    title: string
    warrantyInformation: string
    weight: number
    tags: string[] 
    reviews: ProductReview[]
}
