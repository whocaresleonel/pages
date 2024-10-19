
self.__uv$config = {
    prefix: '/classwork/',

    /* Bare server URL */ 
    bare: 'https://dw5pdmvyc2fs-dw5ibg9ja2vy.io2lx7.workers.dev/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/classwork/uv.handler.js',
    client: '/classwork/uv.client.js',
    bundle: '/classwork/uv.bundle.js',
    config: '/classwork/uv.config.js',
    sw: '/classwork/uv.sw.js',
};
