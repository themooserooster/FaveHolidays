using System.ComponentModel.DataAnnotations;

namespace FavHolidays.Data.Entities;

public class UserPublicHoliday {

    [Key]
    public Guid Id {get;set;}
    public string HolidayName {get;set;} = string.Empty;
    public string HolidayCountryCode {get;set;} = string.Empty;
    public Guid UserId {get;set;}

}