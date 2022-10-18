import { Client } from 'discord.js';

import { VERSION } from '.';
import { fetchPlayerCount } from './fetch';

// intervalの遅延間隔 (秒)
const INTERVAL_SEC = 10.0;

// clientの設定
const CLIENT = new Client({
    intents: [],
});

async function intervalCallback(): Promise<void> {
    const status = await fetchPlayerCount();

    CLIENT.user?.setActivity({
        name: status
            ? `現在 ${status.games.jg.modes.sclat}人がプレイ中 | ${VERSION} `
            : `エラーが発生しました | ${VERSION} `,
    });
}

export function setupBot(): void {
    // intervalの設定
    CLIENT.on('ready', () => {
        intervalCallback();
        setInterval(intervalCallback, INTERVAL_SEC * 1000);
    });

    // botの起動
    CLIENT.login(process.env.BOT_TOKEN);
}
