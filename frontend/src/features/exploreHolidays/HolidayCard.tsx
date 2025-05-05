import { 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    IconButton,
    Tooltip
} from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import type { PublicHoliday } from "./holdidaysApi"

export type HolidayCardProps = {
    holiday: PublicHoliday,
    favorited: boolean
}

export const HolidayCard = (props:HolidayCardProps) => {

    return (
        <Card elevation={3} sx={{mb: '1em'}}>
            <CardHeader title={props.holiday.name}/>
            <CardContent>
                <div>Local Name: {props.holiday.localName}</div>
                <div>Date: {props.holiday.date}</div>
                {(props.holiday.launchYear) && (
                    <div>Year began: {props.holiday.launchYear}</div>
                )}
                <div>Nationwide: {(props.holiday.global) && "Yes"} {(!props.holiday.global) && "No"}</div>
                <div>Type(s): {props.holiday.types.join(", ")}</div>
            </CardContent>
            <CardActions>
                {(props.favorited) && (
                    <Tooltip title="Remove from favorites">
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                )}
                {(!props.favorited) && (
                    <Tooltip title="Add To Favorites">
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </CardActions>
        </Card>
    )
}