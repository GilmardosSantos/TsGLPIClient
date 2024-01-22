export type WebRequestContentTypes = 
"application/json" | "application/xml" | "application/x-www-form-urlencoded" | "application/pdf" | 
"application/octet-stream" | "application/javascript" | "application/zip" | "application/graphql" |
"application/rss+xml" | "multipart/form-data" | "image/jpeg" | "image/png" | "image/gif" |
"audio/mpeg" | "audio/wav" | "video/mp4" | "video/ogg" |
"text/plain" | "text/xml" | "text/css";
export type WebRequestMethods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH"
export type HeadersInit = {}
export interface WebRequestInit {
    params?: any;
    method?: WebRequestMethods;
    body?: any;
    headers?: HeadersInit |  Record<"Content-Type", WebRequestContentTypes>
}
export const defaultWebRequestInit: Record<WebRequestMethods, WebRequestInit> = {
    GET: {
        headers: { "Content-Type": "application/json"},
        method: "GET"
    },
    DELETE: {
        headers: { "Content-Type": "application/json"},
        method: "DELETE"
    },
    PATCH: {
        headers: { "Content-Type": "application/json"},
        method: "PATCH"
    },
    POST: {
        headers: { "Content-Type": "application/json"},
        method: "POST"
    },
    PUT: {
        headers: { "Content-Type": "application/json"},
        method: "PUT"
    }
}