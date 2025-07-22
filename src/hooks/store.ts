import { create } from "zustand";
import getResponse from "../components/utils/getResponse";
import { getMonthNumeric } from "../components/utils/dateHelpers";

type CharsSeries ={
  id: string,
  data: {
    x: string | number,
    y: number,
  }[]
}
interface DataState {
  request: string;
  response: any,
  data: CharsSeries[],
  setRequest: (req: string) => void;
  fetchData: (req: string) => Promise<void>;
  setTemp: () => void;
  setHudimity: () => void;
  setWind: ()=> void;

}


export const useDataStore = create<DataState>((set, get) => ({
  request: "Bataysk",
  response: null,
  data: [
    {
      id: "japan",
      data: [],
    },
  ],
  setRequest: (req) => set({ request: req }),

  fetchData: async (req) => {
    const response = await getResponse(req, "weather");
    const month = getMonthNumeric(response.list[0].dt_txt.slice(0,10))
    set({response: response})
    const prepareData: CharsSeries[] = [
      {      
      id: 'Темп.',
      data: response.list
      .filter( (_: any, index: number) => index % 8 === 0)
      .map((entry: any) => ({
       x: `${entry.dt_txt.slice(8, 10)}${month}`, y: Math.round(entry.main.temp) 
      }))
    },
    ];
    set({data: prepareData})
    
},
  setTemp(){
        const response = get().response
        const month = getMonthNumeric(response.list[0].dt_txt.slice(0,10))
        const prepareData: CharsSeries[] = [
      {      
      id: 'Темп.',
      data: response.list
      .filter( (_: any, index: number) => index % 8 === 0)
      .map((entry: any) => ({
       x: `${entry.dt_txt.slice(8, 10)}${month}`, y: Math.round(entry.main.temp) 
      }))
    },
    ];
    set({data: prepareData})
  
  },
  setHudimity(){
        const response = get().response
        const month = getMonthNumeric(response.list[0].dt_txt.slice(0,10))
        const prepareData: CharsSeries[] = [
      {      
      id: 'Влажность',
      data: response.list
      .filter( (_: any, index: number) => index % 8 === 0)
      .map((entry: any) => ({
       x: `${entry.dt_txt.slice(8, 10)}${month}`, y: Math.round(entry.main.humidity) 
      }))
    },
    ];
    set({data: prepareData})
  
  
  },
  setWind() {
      const response = get().response
      const month = getMonthNumeric(response.list[0].dt_txt.slice(0,10))
      const prepareData: CharsSeries[] = [
      {      
      id: 'Ветер',
      data: response.list
      .filter( (_: any, index: number) => index % 8 === 0)
      .map((entry: any) => ({
       x: `${entry.dt_txt.slice(8, 10)}${month}`, y: Math.round(entry.wind.speed) 
      }))
    },
    ];
    set({data: prepareData})
  },

}));


  