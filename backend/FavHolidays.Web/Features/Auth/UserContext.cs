using FavHolidays.Data;
using FavHolidays.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace FavHolidays.Web.Features.Auth;

public class UserContext : IUserContext
{

    public User User { get; protected set; }

    public UserContext(IDbContextFactory<HolidaysContext> ctxFactory)
    {
        using var ctx = ctxFactory.CreateDbContext();
        User = ctx.Users.First();
    }

}