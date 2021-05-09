// @ts-nocheck
/* eslint-disable */

/**
 * ------------------------------------
 * !!! 不要修改,这是生成的代码 !!!
 * ------------------------------------
 */
import request from '../request'

type Options = Parameters<typeof request>['1']

/**
  Add a new pet to the store
*/
export function postAddPet(data: ApiPet.Pet, options: Options = {}) {
    return request<any>(
        `/pet`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
            ...options,
        },
        'pet'
    )
}

/**
  Deletes a pet
*/
export function deletePet(
    params: ApiPet.ParamspetDeletePet,
    options: Options = {}
) {
    const { petId } = params
    delete params.petId
    return request<any>(
        `/pet/${petId}`,
        {
            method: `DELETE`,
            headers: {},
            params,
            ...options,
        },
        'pet'
    )
}

/**
  Finds Pets by status Multiple status values can be provided with comma separated strings
*/
export function getFindPetsByStatus(
    params: ApiPet.ParamspetGetFindPetsByStatus,
    options: Options = {}
) {
    return request<ApiPet.Pet[]>(
        `/pet/findByStatus`,
        {
            method: `GET`,
            params,
            ...options,
        },
        'pet'
    )
}

/**
  Finds Pets by tags Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
*/
export function getFindPetsByTags(
    params: ApiPet.ParamspetGetFindPetsByTags,
    options: Options = {}
) {
    return request<ApiPet.Pet[]>(
        `/pet/findByTags`,
        {
            method: `GET`,
            params,
            ...options,
        },
        'pet'
    )
}

/**
  Find pet by ID Returns a single pet
*/
export function getPetById(
    params: ApiPet.ParamspetGetPetById,
    options: Options = {}
) {
    const { petId } = params
    delete params.petId
    return request<ApiPet.Pet>(
        `/pet/${petId}`,
        {
            method: `GET`,
            params,
            ...options,
        },
        'pet'
    )
}

/**
  Update an existing pet
*/
export function putUpdatePet(data: ApiPet.Pet, options: Options = {}) {
    return request<any>(
        `/pet`,
        {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
            ...options,
        },
        'pet'
    )
}

/**
  Updates a pet in the store with form data
*/
export function postUpdatePetWithForm(
    params: ApiPet.ParamspetPostUpdatePetWithForm,
    data: ApiPet.BodypetPostUpdatePetWithForm,
    options: Options = {}
) {
    const { petId } = params
    delete params.petId
    return request<any>(
        `/pet/${petId}`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params,
            data,
            ...options,
        },
        'pet'
    )
}

/**
  uploads an image
*/
export function postUploadFile(
    params: ApiPet.ParamspetPostUploadFile,
    data: ApiPet.BodypetPostUploadFile,
    options: Options = {}
) {
    const { petId } = params
    delete params.petId
    return request<ApiPet.ApiResponse>(
        `/pet/${petId}/uploadImage`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            params,
            data,
            ...options,
        },
        'pet'
    )
}
