const config = {
  dev: {
    api: 'http://latte.lae.test/api/',
    auth: 'http://latte.lae.test',

    ws_gateway: 'ws://latte.lae.test:8282',
    // gateway: 'http://www.lae.test:3000/',
    gateway: 'http://latte.lae.test/api/modules',

    ws_host: 'latte.lae.test',
    ws_port: 6001,
    ws_auth_endpoint: 'http://latte.lae.test/broadcasting/auth',
    pusher_key: 'app-key',

    avatar: 'https://cravatar.cn/avatar/',

    status: 'https://api.laecloud.com/ngx_status',

    modules: {
      gct: {
        panel: 'http://192.168.81.107',
      },
    },
  },
  prod: {
    api: 'https://api.laecloud.com/api/',
    auth: 'https://api.laecloud.com',

    ws_gateway: 'wss://ws.gateway.laecloud.com',
    // gateway: 'https://gateway.laecloud.com/',
    gateway: 'https://api.laecloud.com/api/modules',

    ws_host: 'socket.laecloud.com',
    ws_port: 443,
    ws_auth_endpoint: 'https://api.laecloud.com/broadcasting/auth',
    pusher_key: 'Q6SEgerhsgMVz',

    avatar: 'https://cravatar.cn/avatar/',

    status: 'https://api.laecloud.com/ngx_status',

    modules: {
      gct: {
        panel: 'https://ptero.laecloud.com',
      },
    },
  },
  locyan: {
    api: 'https://api.locyanfrp.cn/',
    auth: 'https://oauth.locyanfrp.cn/login',

    // ws_gateway: 'wss://ws.gateway.laecloud.com',
    // gateway: 'https://gateway.laecloud.com/',
    // gateway: 'https://api.laecloud.com/api/modules',

    // ws_host: 'socket.laecloud.com',
    // ws_port: 443,
    // ws_auth_endpoint: 'https://api.laecloud.com/broadcasting/auth',
    // pusher_key: 'Q6SEgerhsgMVz',

    avatar: 'https://cravatar.cn/avatar/',

    status: 'https://api.laecloud.com/ngx_status',

    // 目测是莱云的容器系统，联合映射不需要
    // modules: {
    //   gct: {
    //     panel: 'https://ptero.laecloud.com',
    //   },
    // },
  },
}

let current = config.prod;

if (process.env.NODE_ENV === 'production') {
    current = config.prod;
}

console.log('api endpoint: ' + current.api);

export default current;