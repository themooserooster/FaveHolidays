using FavHolidays.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace FavHolidays.Data;

public class HolidaysContext(DbContextOptions<HolidaysContext> options) : DbContext(options) {
    
    public DbSet<PublicHoliday> PublicHolidays {get;set;}
    public DbSet<User> Users {get;set;}
    public DbSet<UserPublicHoliday> FavoriteHolidays {get;set;}

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasData(new User {
                Id = new Guid("4ad02232-ee97-4a4f-b9db-572795a4d9cb"),
                Name = "Test User",
            });
    }
}