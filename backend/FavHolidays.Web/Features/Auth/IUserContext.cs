using FavHolidays.Data.Entities;

namespace FavHolidays.Web.Features.Auth;

public interface IUserContext
{
    User User { get; }
}
