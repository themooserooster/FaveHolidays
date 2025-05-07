# FavHolidays

A demonstration app using React/Redux Toolkit, ASP.NET Core 8, and the Nager.Date API.

## Requirements

* .NET SDK 8.x
* Node.js LTS
* Docker/Docker desktop

## Running The Thing

### Start The MSSQL Container

From the repo root, execute `docker compose up` to create and start the MSSQL container.

### Start The Backend

From `./backend/FavHolidays.Web`, execute `dotnet run` or `dotnet watch run`.
The backend should run from port 7080 in https.

### Start The Frontend

From `./frontend`, execute `npm run dev`. The frontend will run on the standard Vite port (5173).

## TODOS

* Wire up round trip saving of favorite holidays from the Explore Holidays screen
* Create Azure function for pulling down all holidays from the previous and next 10 years for more intensive search capabilities in the backend. (i.e. Next upcoming instance of a holiday)
* Real routing
* Dark theme for crying out loud.
