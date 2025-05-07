import favHolidaysApi from "../../services/favHolidaysApi"
import type { HolidayDto } from "../../services/favHolidaysApi"
import { useEffect, useState } from "react"
import { FavHolidayCard } from "./FavHolidayCard"
import { CircularProgress, Container } from "@mui/material"

export const FavoriteHolidays = () => {
  const [loading, setLoading] = useState(true)
  const [favHolidays, setFavHolidays] = useState<HolidayDto[]>([])

  const loadFavorites = async () => {
    const favorites = await favHolidaysApi.getAll()
    setFavHolidays(favorites);
  }

  const removeFavorite = async (holiday: HolidayDto):Promise<void> => {
    await favHolidaysApi.removeFavHoliday(holiday)
    setFavHolidays(favHolidays.filter(h => h.countryCode !== holiday.countryCode && h.name !== holiday.name))
  }

  // Initial Setup
  useEffect(() => {
    void (async () => {
      await loadFavorites()
      setLoading(false)
    })()
  }, [])

  return (
    <Container>
      <h2>Favorite Holidays</h2>
      {favHolidays.map(h => (
        <FavHolidayCard 
          countryCode={h.countryCode} 
          name={h.name} 
          removeDelegate={removeFavorite}
        />
      ))}
      {loading && (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Container>
      )}
    </Container>
  )
}
