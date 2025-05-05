using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace FavHolidays.Data.Entities;

public class User
{

    [Key]
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;
}