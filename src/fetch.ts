import axios, { AxiosResponse } from 'axios';

import { CountsResponse } from './types/Response';

const instance = axios.create({
    baseURL: 'https://api-ktor.azisaba.net/',
    headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
    },
});

/**
 * アジ鯖の現在のプレイヤー数を取得します
 * @returns レスポンス
 */
export async function fetchPlayerCount(): Promise<CountsResponse | undefined> {
    return await instance.get('/counts')
        .then((res: AxiosResponse<CountsResponse>) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return undefined;
        });
}
