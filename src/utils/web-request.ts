import { WebRequestInit, defaultWebRequestInit } from "../interfaces/utils/web-request";

class WebRequest {
    private baseURL: string | undefined = undefined;
    private webRequestInit: WebRequestInit | undefined = undefined;
    public create(baseURL: string, webRequestInit?: WebRequestInit) {
        this.baseURL = baseURL;
        if (webRequestInit) this.webRequestInit = webRequestInit;
        return {
            get: this.get.bind(this),
            post: this.post.bind(this),
            patch: this.patch.bind(this),
            put: this.put.bind(this),
            delete: this.delete.bind(this)
        }
    }

    public async get<ResponseType>(urlRequest: URL | string, webRequest?: WebRequestInit){
        const { url, init } = this.initRequest(urlRequest, { ...defaultWebRequestInit['GET'], ...webRequest});
        return fetch(url, init).then( async (response) => {
            return {
                ...response,
                data:await response.json() as ResponseType,
            }
        })
    }

    public async post<ResponseType>(urlRequest: URL | string, webRequest?: WebRequestInit){
        const { url, init } = this.initRequest(urlRequest, {...defaultWebRequestInit['POST'],...webRequest});
        return fetch(url, init).then( async (response) => {
            return {
                ...response,
                data: await response.json() as ResponseType
            }
        })
    }

    
    public async put<ResponseType>(urlRequest: URL | string, webRequest?: WebRequestInit){
        const { url, init } = this.initRequest(urlRequest, { ...defaultWebRequestInit['PUT'], ...webRequest});
        return fetch(url, init).then( async (response) => {
            return {
                ...response,
                data:await response.json() as ResponseType,
            }
        })
    }

    public async patch<ResponseType>(urlRequest: URL | string, webRequest?: WebRequestInit){
        const { url, init } = this.initRequest(urlRequest, { ...defaultWebRequestInit['PATCH'], ...webRequest});
        return fetch(url, init).then( async (response) => {
            return {
                ...response,
                data:await response.json() as ResponseType,
            }
        })
    }

    public async delete<ResponseType>(urlRequest: URL | string, webRequest?: WebRequestInit){
        const { url, init } = this.initRequest(urlRequest, { ...defaultWebRequestInit['DELETE'], ...webRequest});
        return fetch(url, init).then( async (response) => {
            return {
                ...response,
                data:await response.json() as ResponseType,
            }
        })
    }

    private initRequest(url: URL | string, webRequest?: WebRequestInit){
        console.log("InitRequest WebRequest", webRequest)
        const generateBaseURL = (url: URL | String): URL => {
            if (this.baseURL && this.baseURL !== '') {
                if (url === typeof 'string' && url.startsWith('/'))
                    url = url.substring(1);
                return new URL(this.baseURL + "/" + url);
            }

            return new URL(String(url));
        }

        const generateParams = <ParamsType extends {[key:string]: any}>(initUrl: URL, params: ParamsType): URL => {
            const url = new URL(initUrl.toString());
            for (const key in params) {
                url.searchParams.append(key, params[key]);
            }
            return url;
        }

        const setBody = <BodyType>(body: BodyType) => {
            return JSON.stringify(body);
        }
        url = generateBaseURL(url)
        if (this.webRequestInit) {
            webRequest = { ...this.webRequestInit };
        }
        webRequest?.body ? webRequest.body = setBody(webRequest.body) : null
        webRequest?.params ? url = generateParams(url, webRequest.params) : null;
        return {url, init: webRequest}
    }

}

export default WebRequest;

new WebRequest().get('https://jsonplaceholder.typicode.com/todos/1')