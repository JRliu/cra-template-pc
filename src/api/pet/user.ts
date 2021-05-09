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
  Create user This can only be done by the logged in user.
*/
export function postCreateUser(data: ApiPet.User, options: Options = {}) {
    return request<any>(
        `/user`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
            ...options,
        },
        'user'
    )
}

/**
  Creates list of users with given input array
*/
export function postCreateUsersWithArrayInput(
    data: ApiPet.User[],
    options: Options = {}
) {
    return request<any>(
        `/user/createWithArray`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
            ...options,
        },
        'user'
    )
}

/**
  Creates list of users with given input array
*/
export function postCreateUsersWithListInput(
    data: ApiPet.User[],
    options: Options = {}
) {
    return request<any>(
        `/user/createWithList`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
            ...options,
        },
        'user'
    )
}

/**
  Delete user This can only be done by the logged in user.
*/
export function deleteUser(
    params: ApiPet.ParamsuserDeleteUser,
    options: Options = {}
) {
    const { username } = params
    delete params.username
    return request<any>(
        `/user/${username}`,
        {
            method: `DELETE`,
            params,
            ...options,
        },
        'user'
    )
}

/**
  Get user by user name
*/
export function getUserByName(
    params: ApiPet.ParamsuserGetUserByName,
    options: Options = {}
) {
    const { username } = params
    delete params.username
    return request<ApiPet.User>(
        `/user/${username}`,
        {
            method: `GET`,
            params,
            ...options,
        },
        'user'
    )
}

/**
  Logs user into the system
*/
export function getLoginUser(
    params: ApiPet.ParamsuserGetLoginUser,
    options: Options = {}
) {
    return request<string>(
        `/user/login`,
        {
            method: `GET`,
            params,
            ...options,
        },
        'user'
    )
}

/**
  Logs out current logged in user session
*/
export function getLogoutUser(options: Options = {}) {
    return request<any>(
        `/user/logout`,
        {
            method: `GET`,
            ...options,
        },
        'user'
    )
}

/**
  Updated user This can only be done by the logged in user.
*/
export function putUpdateUser(
    params: ApiPet.ParamsuserPutUpdateUser,
    data: ApiPet.User,
    options: Options = {}
) {
    const { username } = params
    delete params.username
    return request<any>(
        `/user/${username}`,
        {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
            },
            params,
            data,
            ...options,
        },
        'user'
    )
}
