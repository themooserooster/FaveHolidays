import type { TextFieldProps } from "@mui/material"
import {
  Autocomplete,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material"
import { useEffect, useState } from "react"
import type { Country} from "../../services/nagerDateApi"
import { holidaysApi } from "../../services/nagerDateApi"
import type { HolidayCardProps } from "./HolidayCard";
import { HolidayCard } from "./HolidayCard"

export const Explore = () => {
  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [years, setYears] = useState<number[]>([])
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [holidays, setHolidays] = useState<HolidayCardProps[]>([])

  const loadCountries = async () => {
    const countries = await holidaysApi.getCountries()
    setCountries(countries)
  }

  const setupYears = () => {
    const year = new Date().getFullYear()

    const prev10years = [...Array(10).keys()].map(y => year - y - 1).reverse()
    const next10Years = [...Array(10).keys()].map(y => year + y + 1)

    setSelectedYear(year)
    setYears([...prev10years, year, ...next10Years])
  }

  // Initial Setup
  useEffect(() => {
    void (async () => {
      if (!countries.length) await loadCountries()

      if (!years.length) setupYears()

      setLoading(false)
    })()
  }, [countries.length, years.length])

  // Handle Year/Country Changes
  useEffect(() => {
    void (async () => {
      setHolidays([])
      if (!selectedYear || !selectedCountry) return;
      
      setLoading(true)

      const holidays = await holidaysApi.getPublicHolidays(
        selectedYear,
        selectedCountry.countryCode,
      )

      const holidayCardProps = holidays.map(h => ({
        holiday: h,
        favorited: false
      } as HolidayCardProps)) 

      setHolidays(holidayCardProps)
      setLoading(false);
    })()
  }, [selectedCountry, selectedYear])

  const renderSelectCountryInput = (params: TextFieldProps) => (
    <TextField {...params} label="Select Country" variant="standard" />
  )

  const renderSelectYearInput = (params: TextFieldProps) => (
    <TextField {...params} label="Select Year" variant="standard" />
  )

  return (
    <Container>
      <h2>Explore Holidays</h2>
      {countries.length && (
        <Autocomplete
          value={selectedCountry}
          options={countries}
          getOptionLabel={o => o.name}
          getOptionKey={o => o.countryCode}
          renderInput={renderSelectCountryInput}
          onChange={(_e, v) => {
            setSelectedCountry(v)
          }}
        />
      )}
      {years.length && (
        <Autocomplete
          value={selectedYear}
          options={years}
          getOptionLabel={o => o.toString()}
          renderInput={renderSelectYearInput}
          onChange={(_e, v) => {
            setSelectedYear(v)
          }}
          sx={{ mb: '2em' }}
        />
      )}
      {holidays.map(h => (
        <HolidayCard {...h}/>
      ))}
      {(loading) && (
        <CircularProgress sx={{m: '2em auto'}} />
      )}
    </Container>
  )
}
