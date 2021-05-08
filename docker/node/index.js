const fs = require('fs');
const fastify = require('fastify')({
    logger: false,
});

const Port = 300;
const HtmlPath = '/node/index.html';
const PathPrefix = process.env.PATH_PREFIX || '/';

let html = fs.readFileSync(HtmlPath, 'utf8');

fastify.get(PathPrefix, (req, reply) => {
    // 可以在这里动态处理html，插入js变量、修改资源地址等
    reply.type('text/html').send(html);
});

fastify.listen(Port, (err, address) => {
    // if (err) {
    //     fastify.log.error(err);
    //     process.exit(1);
    // }
    if (err) throw err;
    fastify.log.info(`server listening on ${address}`);
});
