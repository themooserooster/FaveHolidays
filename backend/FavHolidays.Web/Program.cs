using FavHolidays.Data;
using FavHolidays.Web.Features.Auth;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;
var configuration = builder.Configuration;

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

var holidaysContextConnectionString = configuration.GetConnectionString(nameof(HolidaysContext))
    ?? throw new InvalidOperationException($"Connection string '{nameof(HolidaysContext)}' not found");

services.AddDbContextFactory<HolidaysContext>(o => 
    o.UseSqlServer(holidaysContextConnectionString));

services.AddScoped<IUserContext, UserContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.Run();

