using FavHolidays.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace FavHolidays.Data;

public class HolidaysContext: DbContext {
    
    public DbSet<PublicHoliday> PublicHolidays {get;set;}
    public DbSet<User> Users {get;set;}
    public DbSet<UserPublicHoliday> FavoriteHolidays {get;set;}

} 