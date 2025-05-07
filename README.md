# FavHolidays

A demonstration app using React/Redux Toolkit, ASP.NET Core 8, and the Nager.Date API.

## Requirements

* .NET SDK 8.x
* Node.js LTS
* Docker/Docker desktop

## Running The Thing

### Start The MSSQL Container

From the repo root, execure `docker compose up` to create and start the MSSQL container.

### Start The Backend

From `./backend/FavHolidays.Web`, execute `dotnet run` or `dotnet watch run`.

### Start The Frontend

From `./frontend`, execute `npm run dev`. The frontend will run on the standard Vite port (5173).
