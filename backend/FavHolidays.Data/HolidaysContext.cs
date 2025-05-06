using FavHolidays.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace FavHolidays.Data;

public class HolidaysContext(DbContextOptions<HolidaysContext> options) : DbContext(options) {
    
    public DbSet<PublicHoliday> PublicHolidays {get;set;}
    public DbSet<User> Users {get;set;}
    public DbSet<UserPublicHoliday> FavoriteHolidays {get;set;}
} 