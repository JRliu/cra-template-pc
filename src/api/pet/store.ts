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
  Delete purchase order by ID For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
*/
export function deleteOrder(
    params: ApiPet.ParamsstoreDeleteOrder,
    options: Options = {}
) {
    const { orderId } = params
    delete params.orderId
    return request<any>(
        `/store/order/${orderId}`,
        {
            method: `DELETE`,
            params,
            ...options,
        },
        'store'
    )
}

/**
  Returns pet inventories by status Returns a map of status codes to quantities
*/
export function getInventory(options: Options = {}) {
    return request<{ [key: string]: number }>(
        `/store/inventory`,
        {
            method: `GET`,
            ...options,
        },
        'store'
    )
}

/**
  Find purchase order by ID For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
*/
export function getOrderById(
    params: ApiPet.ParamsstoreGetOrderById,
    options: Options = {}
) {
    const { orderId } = params
    delete params.orderId
    return request<ApiPet.Order>(
        `/store/order/${orderId}`,
        {
            method: `GET`,
            params,
            ...options,
        },
        'store'
    )
}

/**
  Place an order for a pet
*/
export function postPlaceOrder(data: ApiPet.Order, options: Options = {}) {
    return request<ApiPet.Order>(
        `/store/order`,
        {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
            ...options,
        },
        'store'
    )
}
