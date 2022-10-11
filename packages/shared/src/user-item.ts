export interface UserItem {
    full_name: string,
    password: string,
    email: string,
    phone_number: number,
    address: string[]
    orders?: string[]
}