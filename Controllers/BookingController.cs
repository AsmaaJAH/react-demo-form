using Microsoft.AspNetCore.Mvc;
using RoombBooking.Data;
using RoombBooking.Models;
using System.Linq;

namespace RoombBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookingController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetBookings()
        {
            return Ok(_context.Bookings.ToList());
        }

        [HttpPost]
        public IActionResult CreateBooking([FromBody] Booking booking)
        {
            if (ModelState.IsValid)
            {
                _context.Bookings.Add(booking);
                _context.SaveChanges();
                return Ok(booking);
            }
            return BadRequest(ModelState);
        }
    }
}
