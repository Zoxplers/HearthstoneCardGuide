import { create } from "zustand";
import ky from 'ky';

const APILINK = "https://us.api.blizzard.com/hearthstone";
interface APIServiceState {
    PARAMS: URLSearchParams;
    TOKEN: string | null;
    CARDS: any; //Object | string;
    CURRENTCARD: any; //Object | string;
    ISFETCHINGCARDS: boolean;
    fetchToken: () => Promise<void>;
    fetchCards: () => void;
    fetchCard: (cardid: string) => any;
    clearCard: () => void;
}

const useAPIService = create<APIServiceState>((set, get) => ({
    PARAMS: new URLSearchParams({
        textFilter: "",
        locale: "en_US",
        page: "1"
    }),
    TOKEN: null,
    CARDS: "Loading...",
    CURRENTCARD: "Loading...",
    ISFETCHINGCARDS: false,
    fetchToken: async () => {
        if(!get().TOKEN){
            const token:any = await ky.post("https://oauth.battle.net/token", {
                headers: {
                    "Authorization": `Basic ${btoa("12e8413f3f344256a984d99529f986cb:0DrlTWAP6rTXpAYCu1SyeXIEFb0ubfAe")}`
                },
                body: new URLSearchParams({
                    grant_type: 'client_credentials'
                }),
            }).json();
            set({ TOKEN: token["access_token"] });
        }
    },
    fetchCards: async () => {
        if(!get().TOKEN){
            await get().fetchToken();
        }
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
    fetchCard: async (id:string) => {
        if(!get().TOKEN){
            await get().fetchToken();
        }
        ky.get(`${APILINK}/cards/${id}?${new URLSearchParams({
            locale: get().PARAMS.get("locale") || "en_US",
        })}`,{
            headers: {
                "Authorization": `Bearer ${get().TOKEN}`
            }
        }).then(resp => {
            resp.json().then((content:any) => {
                set({ CURRENTCARD: content });
            });
        }).catch(err => {
            console.error(err);
            if(err.response.status == 404){
                set({CURRENTCARD: "Card not found."})
            }
        })
    },
    clearCard: () => {
        set({CURRENTCARD: "Loading..."});
    }
}));

export default useAPIService;