import 'dotenv/config';
import express, { Request, Response } from 'express';

import { setupBot } from './bot';

// バージョン情報
export const VERSION = 'v1.0.0';

// botを起動
setupBot();

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({ version: VERSION });
});

app.listen(3000, () => {
    console.log('Start on port 3000.');
});
