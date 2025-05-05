import axios from 'axios'

const api = axios.create({
    baseURL: "https://date.nager.at/api/v3/"
})

export type Country = {
    countryCode: string,
    name: string
}

export enum HolidayTypes {
    Public,
    Bank, 
    School, 
    Authorities, 
    Optional, 
    Observance
}

export type PublicHoliday = {
    date: string,
    localName: string,
    name: string,
    countryCode: string,
    global: boolean,
    counties: string[] | null,
    launchYear: number | null,
    types: HolidayTypes[]
}

export const holidaysApi = {
    async getCountries():Promise<Country[]> {
        const res = await api.get("AvailableCountries");

        return res.data as Country[];
    },
    async getPublicHolidays(year: number, countryCode: string):Promise<PublicHoliday[]> {
        const res = await api.get(`PublicHolidays/${year.toString()}/${countryCode}`);

        return res.data as PublicHoliday[];
    }
}