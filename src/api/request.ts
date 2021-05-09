import axios, { Method, ResponseType, AxiosError } from 'axios';
// import qs from 'qs';

const ax = axios.create({
    timeout: 30000,
    responseType: 'json',
});

// 拦截器
ax.interceptors.request.use(async (options) => {
    return options;
});

const msgTimer: {
    [msg: string]: number;
} = {};

const isPrd = process.env.NODE_ENV === 'production';

// function getContentType(headers: { [key: string]: string }) {
//     const keys = Object.keys(headers);
//     for (const k of keys) {
//         if (k.toLocaleLowerCase() === 'content-type') {
//             return headers[k];
//         }
//     }

//     return '';
// }

/**
 * request lib
 */
export default async function request<T>(
    url: string,
    options: {
        method?: Method;
        params?: any;
        headers?: {
            [key: string]: string;
        };
        data?: any;
        responseType?: ResponseType;
    } = {},
    ns?: string
) {
    let { headers = {}, data = {}, params = {} } = options;
    console.log(ns, '===ns');
    switch (ns) {
        case 'pet':
            if (isPrd) {
                url = 'https://petstore.swagger.io/v2' + url;
            }
            break;
    }
    return ax
        .request<T>({
            url,
            ...options,
            headers,
            data,
            params,
            // transformRequest:[(data, headers) => {
            //     console.log(data)

            //     return data
            // }],
            responseType: options.responseType || 'json',
        })
        .then((res) => {
            // @ts-ignore
            const code = res.data.code;
            if (code) {
                // eslint-disable-next-line no-throw-literal
                throw {
                    response: res,
                };
            }
            return res.data;
        })
        .catch((res: AxiosError) => {
            let msg = '未知错误';
            if (res.response && res.response.data) {
                if (res.response.data.msg) {
                    msg = res.response.data.msg;
                } else if (res.response.data.message) {
                    msg = res.response.data.message;
                }
            }

            if (!msgTimer[msg]) {
                console.log('发生错误');
                msgTimer[msg] = 1;
                setTimeout(() => {
                    delete msgTimer[msg];
                }, 3000);
            }
            if (res.response) {
                const httpCode = res.response.status;

                switch (httpCode) {
                    case 401:
                        break;
                    case 403:
                        console.log('没有权限，先不做处理');
                        break;
                    default:
                        // notification.error({
                        //     message: '提示',
                        //     description: res.response.data.msg,
                        // })
                        break;
                }
            }
            // @ts-ignore
            throw new Error(res);
        });
}
