import { Card, CardActions, CardContent, IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react";
import type { HolidayDto } from "../../services/favHolidaysApi";

export const FavHolidayCard = (props: {
  countryCode:string, 
  name:string
  removeDelegate:(dto: HolidayDto) => Promise<void>
}) => {
  const [loading, setLoading] = useState(true);

  const remove = async () => {
    setLoading(true);
    await props.removeDelegate({
      countryCode: props.countryCode, 
      name: props.name
    });
  }

  return (
    <Card elevation={3} sx={{ mb: "1em" }}>
      <CardContent>
        <div>Local Name: {props.name}</div>
        <div>Country Code: {props.countryCode}</div>
      </CardContent>
      <CardActions>
          <Tooltip title="Remove from favorites">
            <IconButton loading={loading} onClick={() => {void remove()}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
      </CardActions>
    </Card>
  )
}
