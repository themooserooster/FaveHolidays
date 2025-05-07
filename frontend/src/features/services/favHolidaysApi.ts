import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7080/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})

export type HolidayDto = {
    countryCode: string,
    name: string
}

const favHolidaysApi = {
    async getAll():Promise<HolidayDto[]> {
        const res = await api.get("FavoriteHolidays/All");
        return res.data as HolidayDto[];
    },
    async getByCountryCode(countryCode: string):Promise<HolidayDto[]> {
        const res = await api.get(`FavoriteHolidays/ByCountryCode/${countryCode}`);

        return res.data as HolidayDto[];
    },
    async addFavHoliday(holiday: HolidayDto):Promise<HolidayDto[]> {
        const res = await api.post("FavoriteHolidays/Add", holiday);

        return res.data as HolidayDto[];
    },
    async removeFavHoliday(holiday: HolidayDto):Promise<void> {
        await api.delete(`FavoriteHolidays/Remove/${holiday.countryCode}/${holiday.name}`);
    }
} 

export default favHolidaysApi;