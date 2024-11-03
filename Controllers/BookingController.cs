using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class BookingController : ControllerBase
{
    private readonly BookingContext _context;

    public BookingController(BookingContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Booking>> GetBookings()
    {
        return _context.Bookings.ToList();
    }

    [HttpPost]
    public ActionResult<Booking> CreateBooking(Booking booking)
    {
        _context.Bookings.Add(booking);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetBookings), new { id = booking.Id }, booking);
    }
}
