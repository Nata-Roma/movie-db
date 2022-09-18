import { ApiSettings } from './apiSettings';

export class Api extends ApiSettings {
    async getResource(url: string) {
        const resp = await fetch(url);
        const res = await resp.json().catch((err) => console.log('Error', err));

        return res;

        
    }

    // async getImageResource(url: string) {
    //     //image/jpeg
    //     const resp = await fetch(url);
    //     console.log(resp);
        
    // }
}
