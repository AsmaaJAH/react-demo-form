// Models/Booking.cs
using System;
using System.ComponentModel.DataAnnotations;

public class Booking
{
    [Key]
    public int Id { get; set; }
    public string Phone { get; set; }
    public string Room { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}
