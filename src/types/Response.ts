export interface CountsResponse {
    total_players: number;
    games: {
        life: {
            players: number;
            modes: {
                life: number;
                pve: number;
                other: number;
            };
        };
        jg: {
            players: number;
            modes: {
                sclat: number;
                jg: number;
            };
        };
        diverse: {
            players: number;
        };
        lgw: {
            players: number;
        };
        pg: {
            players: number;
        };
        vanilife: {
            players: number;
        };
        despawn: {
            players: number;
        };
        coretol: {
            players: number;
        };
        test: {
            players: number;
        };
        lobby: {
            players: number;
        };
        afk: {
            players: number;
        };
    };
}
