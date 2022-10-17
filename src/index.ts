import 'dotenv/config';

import { Client } from 'discord.js';

import { fetchPlayerCount } from './fetch';

const VERSION = 'v1.0.0';
const INTERVAL_SEC = 10.0;

async function intervalCallback(): Promise<void> {
    const status = await fetchPlayerCount();

    client.user?.setActivity({
        name: status
            ? `現在 ${status.games.jg.modes.sclat}人がプレイ中 | ${VERSION} `
            : `エラーが発生しました | ${VERSION} `,
    });
}

const client = new Client({
    intents: [],
});

// intervalの設定
client.on('ready', () => {
    intervalCallback();
    setInterval(intervalCallback.bind(this), INTERVAL_SEC * 1000);
});

// botの起動
client.login(process.env.BOT_TOKEN);
