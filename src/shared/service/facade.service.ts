import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'any' })
export class ServiceFacade {

    constructor(private http: HttpClient) {
    }

    protected getUrl(url: string) {
        let base = 'https://jsonplaceholder.typicode.com';
        if (environment.production) {
            base = '/api/v1';
        }
        return `${ base }${ url }`;
    }

    private doRequest<T>(method: string, url: string, params: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.http[method](url, params).subscribe(resolve, reject);
        });
    }

    /**
     * Make a post request to the server
     *
     */
    doPost<T>(url: string, params: any): Promise<T> {
        return this.doRequest('post', this.getUrl(url), params);
    }

    /**
     * Make a get request to the server
     *
     */
    public doGet<T>(url: string, params?: any): Promise<T> {
        return this.doRequest('get', this.getUrl(url), params);
    }

    /**
     * Make a put request to the server
     *
     */
    doPut<T>(url: string, params?: any): Promise<T> {
        return this.doRequest('put', this.getUrl(url), params);
    }

    /**
     * Make a delete request to the server
     *
     */
    public doDelete<T>(url: string, params?: any): Promise<T> {
        return this.doRequest('delete', this.getUrl(url), params);
    }
}
