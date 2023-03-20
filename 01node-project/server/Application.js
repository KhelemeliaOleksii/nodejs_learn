const http = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middleware = [];
    }

    use(middleware) {
         this.middleware.push(middleware)
    } 

    listen(port, callback) {
        this.server.listen(port, callback);
    }

    addRouter(router){
        Object.keys(router.endpoints).forEach(path=>{
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method)=>{
                this.emitter.on(this._getRouterMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    this.middleware.forEach(middleware => middleware(req, res));
                    handler(req, res);
                })
            })
        })
    }

    _createServer() {
        return http.createServer((req, res)=> {
            const isEmitted = this.emitter.emit(this._getRouterMask(req.url, req.method), req, res)
            if (!isEmitted) {
                res.end()
            }    
        })
    }
    _getRouterMask(path, method) {
        return `[${path}]:[${method}]`
    }
}