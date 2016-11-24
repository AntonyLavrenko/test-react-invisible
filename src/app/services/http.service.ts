/**
 * This service for REST API
 * @class HttpService
 */
export class HttpService {

    /**
     * Check status
     * @param response
     * @returns {*}
     */
    checkStatusResponse (response) {

        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {

            let error:any = new Error(response.status);
            error.response = response.status.toString();

            throw error;
        }
    };

    /**
     * Parse JSON
     * @param response
     * @returns {*}
     */
    parseJSON (response) {
        return response.json();
    }

    /**
     * Get GET request
     * @param url
     * @returns {Promise<T>}
     */
    get(url: string): Promise {

        return new Promise( (resolve, reject ) => {

            self.fetch(
                url, {
                    method: "GET",
                })
                .then(this.checkStatusResponse)
                .then(this.parseJSON)
                .then(resolve)
                .catch(reject);
        });
    }

    /**
     * Get POST request
     * @param url
     * @param data
     * @returns {Promise<T>}
     */
    post(url: string, data: any){

        return new Promise( (resolve, reject ) => {

            self.fetch(
                url, {
                    method: "POST",
                    body: JSON.stringify(data)
                })
                .then(this.checkStatusResponse)
                .then(this.parseJSON)
                .then(resolve)
                .catch(reject);
        });
    }
}