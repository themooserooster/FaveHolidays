# Use the official .NET 8 SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app

# Copy the project files
COPY ./FavHolidays.Web/*.csproj ./FavHolidays.Web/
COPY ./FavHolidays.Data/*.csproj ./FavHolidays.Data/

# Restore dependencies
RUN dotnet restore ./FavHolidays.Web/FavHolidays.Web.csproj

# Copy the rest of the application files
COPY . ./

# Build the application
RUN dotnet publish ./FavHolidays.Web/FavHolidays.Web.csproj -c Release -o out

# Use the runtime image for running the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copy the published output from the build stage
COPY --from=build-env /app/out .

# Expose the port the app runs on
EXPOSE 80

# Start the application
ENTRYPOINT ["dotnet", "FavHolidays.Web.dll"]