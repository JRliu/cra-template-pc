// tslint:disable
/* eslint-disable */

export as namespace ApiPet

export interface ApiResponse {
    code?: number
    type?: string
    message?: string
}

export interface Category {
    id?: number
    name?: string
}

export interface Pet {
    id?: number
    category?: Category
    name: string
    photoUrls: string[]
    tags?: Tag[]
    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold'
}

export interface Tag {
    id?: number
    name?: string
}

export interface Order {
    id?: number
    petId?: number
    quantity?: number
    shipDate?: string
    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered'
    complete?: boolean
}

export interface User {
    id?: number
    username?: string
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    phone?: string
    /** User Status */
    userStatus?: number
}

export interface ParamspetDeletePet {
    // header
    api_key?: string
    // path
    /** Pet id to delete */
    petId: number
}

export interface ParamspetGetFindPetsByStatus {
    // query
    /** Status values that need to be considered for filter */
    status: 'available' | 'pending' | 'sold'[]
}

export interface ParamspetGetFindPetsByTags {
    // query
    /** Tags to filter by */
    tags: string[]
}

export interface ParamspetGetPetById {
    // path
    /** ID of pet to return */
    petId: number
}

export interface ParamspetPostUpdatePetWithForm {
    // path
    /** ID of pet that needs to be updated */
    petId: number
}

export interface BodypetPostUpdatePetWithForm extends Object {
    /** Updated name of the pet */
    name?: string
    /** Updated status of the pet */
    status?: string
}

export interface ParamspetPostUploadFile {
    // path
    /** ID of pet to update */
    petId: number
}

export interface BodypetPostUploadFile extends Object {
    /** Additional data to pass to server */
    additionalMetadata?: string
    /** file to upload */
    file?: string
}

export interface ParamsstoreDeleteOrder {
    // path
    /** ID of the order that needs to be deleted */
    orderId: number
}

export interface ParamsstoreGetOrderById {
    // path
    /** ID of pet that needs to be fetched */
    orderId: number
}

export interface ParamsuserDeleteUser {
    // path
    /** The name that needs to be deleted */
    username: string
}

export interface ParamsuserGetUserByName {
    // path
    /** The name that needs to be fetched. Use user1 for testing.  */
    username: string
}

export interface ParamsuserGetLoginUser {
    // query
    /** The user name for login */
    username: string
    /** The password for login in clear text */
    password: string
}

export interface ParamsuserPutUpdateUser {
    // path
    /** name that need to be updated */
    username: string
}
