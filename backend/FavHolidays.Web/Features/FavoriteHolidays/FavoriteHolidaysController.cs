using FavHolidays.Data;
using FavHolidays.Data.Entities;
using FavHolidays.Web.Features.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace FavHolidays.Web.Features.FavoriteHolidays;

[ApiController]
public class FavoriteHolidaysController(HolidaysContext holidaysContext, UserContext userContext):Controller  {

    [HttpGet("FavoritesByCountryCode/{countryCode}")]
    public async Task<ActionResult<IEnumerable<FavoriteHolidayDTO>>> GetFavoritesByCountryCode ([FromRoute]string countryCode) {
        var userFavorites = await holidaysContext.FavoriteHolidays
            .Where(h => h.Id == userContext.User.Id && h.HolidayCountryCode == countryCode)
            .ToListAsync();

            var dtos = userFavorites.Select(h => new FavoriteHolidayDTO {
                CountryCode = h.HolidayCountryCode,
                Name = h.HolidayName    
            });

        return Ok(userFavorites);
    }

    [HttpPut("AddToFavorites")]
    public async Task<ActionResult> AddHolidayToFavorites([FromBody] FavoriteHolidayDTO dto) {
        var preexsitingEntity = await holidaysContext.FavoriteHolidays
            .SingleOrDefaultAsync(h => h.HolidayCountryCode == dto.CountryCode && h.HolidayName == dto.Name && h.UserId == userContext.User.Id);

        if (preexsitingEntity is not null) return Ok();

        var entity = new UserPublicHoliday {
            Id = Guid.NewGuid(),
            HolidayCountryCode = dto.CountryCode,
            HolidayName = dto.Name,
            UserId = userContext.User.Id,
        };
        holidaysContext.Add(entity);
        await holidaysContext.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("RemoveFromFavorites")]
    public async Task<ActionResult> RemoveHolidayFromFavorites ([FromBody] FavoriteHolidayDTO dto) {
        var entity = await holidaysContext.FavoriteHolidays
            .SingleOrDefaultAsync(h => h.HolidayCountryCode == dto.CountryCode && h.HolidayName == dto.Name && h.UserId == userContext.User.Id);

        if (entity is null) return Ok();

        holidaysContext.FavoriteHolidays.Remove(entity);
        await holidaysContext.SaveChangesAsync();

        return Ok();
    }

}