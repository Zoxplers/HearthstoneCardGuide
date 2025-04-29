// import { create } from "zustand";
// import ky from 'ky';

// const APILINK = "https://us.api.blizzard.com/hearthstone";
// interface APIServiceState {
//     cards: Arra
//     fetchToken: () => Promise<void>;
// }

// const useAPIService = create<APIServiceState>((set) => ({
//     cards: null,
//     fetchToken: async () => {
//       const token:any = await ky.post("https://oauth.battle.net/token", {
//         headers: {
//             "Authorization": `Basic ${btoa("12e8413f3f344256a984d99529f986cb:0DrlTWAP6rTXpAYCu1SyeXIEFb0ubfAe")}`
//         },
//         body: new URLSearchParams({
//             grant_type: 'client_credentials'
//         }),
//       }).json();
//       const cards:any = await ky.get(`${APILINK}/cards?${}`)
//       set({ TOKEN: token["access_token"] });
//     },
//   }));

// export default useAPIService;

import { create } from "zustand";
import ky from 'ky';

const APILINK = "https://us.api.blizzard.com/hearthstone";
interface APIServiceState {
    PARAMS: URLSearchParams;
    TOKEN: string | null;
    CARDS: any | null;
    CURRENTCARD: any | null;
    fetchToken: () => Promise<void>;
    fetchCards: () => void;
    fetchCard: (cardid: string) => any;
    setParams: (params: URLSearchParams) => void;
    clearCard: () => void;
}

const useAPIService = create<APIServiceState>((set, get) => ({
    PARAMS: new URLSearchParams({
        textFilter: "",
        locale: "en_US",
        page: "1"
    }),
    TOKEN: null,
    CARDS: null,
    CURRENTCARD: null,
    fetchToken: async () => {
        const token:any = await ky.post("https://oauth.battle.net/token", {
            headers: {
                "Authorization": `Basic ${btoa("12e8413f3f344256a984d99529f986cb:0DrlTWAP6rTXpAYCu1SyeXIEFb0ubfAe")}`
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials'
            }),
        }).json();
        set({ TOKEN: token["access_token"] });
        console.log(token)
        await get().fetchCards();
    },
    fetchCards: async () => {
        ky.get(`${APILINK}/cards?${get().PARAMS}`, {
            headers: {
                "Authorization": `Bearer ${get().TOKEN}`
            }
        }).then(resp => {
            resp.json().then((content:any) => {
                set({ CARDS: content });
            });
        });
    },
    fetchCard: (id:string) => {
        ky.get(`${APILINK}/cards/${id}?${new URLSearchParams({
            locale: get().PARAMS.get("locale") || "en_US",
        })}`,{
            headers: {
                "Authorization": `Bearer ${get().TOKEN}`
            }
        }).then(card => {
            card.json().then((content:any) => {
                set({ CURRENTCARD: content });
            })
        });
    },
    setParams: (params: URLSearchParams) => {
        set({PARAMS: params});
    },
    clearCard: () => {
        set({CURRENTCARD: null});
    }
}));

export default useAPIService;