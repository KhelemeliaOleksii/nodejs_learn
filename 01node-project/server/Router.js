module.exports = class Router {
    constructor () {
        //endpoints ={
        //    '/user': {
        //      'GET':handler1,
        //      'POST':handler2,
        //      'DELETE': handler3
        //    }
        //}
        this.endpoints = {}
    }

    request(method='GET', path, handler) {
        //to check if such endpoint exist
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        
        //to check if such method in the current endpoint exist
        const endpoint = this.endpoints[path];
        if (endpoint[method]) {
            throw new Error(`ERROR: Create method. [${method}] is already exist on ${path}`)
        }

        //to create eventlistener
        endpoint[method] = handler;
    }

    get(path, handler){
        this.request('GET', path, handler);
    }

    post(path, handler){
        this.request('POST', path, handler);
    }

    put(path, handler){
        this.request('PUT', path, handler);
    }

    delete(path, handler) {
        this.request('DELETE', path, handler);
    }
}
