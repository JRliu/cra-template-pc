const path = require('path');

const t1 = [
    {
        api: 'https://petstore.swagger.io/v2/swagger.json',
        sdkDir: path.join(__dirname, './src/api/pet'),
        namespace: 'ApiPet',
        // filter: [
        //     (api) => {
        //         const allowPrePaths = ['/api/mall-3rd/v1/oa/'];
        //         api.ns = '';
        //         if (api.tags && api.tags.length) {
        //             api.ns = String(api.tags[0] || '').replace(
        //                 'Controller',
        //                 ''
        //             );
        //             // api.tags[0] = api.ns
        //         }

        //         const apiPath = String(api.path);

        //         for (const allow of allowPrePaths) {
        //             if (apiPath.startsWith(allow)) {
        //                 return true;
        //             }
        //         }
        //         return false;
        //     },
        // ],
    },
];

module.exports = t1;
