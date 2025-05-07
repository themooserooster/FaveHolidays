using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace FavHolidays.Data.Entities;

[PrimaryKey(nameof(Name), nameof(CountryCode))]
public class PublicHoliday
{

    [Key, Column(Order = 0)]
    public string Name { get; set; } = string.Empty;
    [Key, Column(Order = 1)]
    public string CountryCode {get;set;} = string.Empty;

}
