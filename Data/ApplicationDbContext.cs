using Microsoft.EntityFrameworkCore;
using RoombBooking.Models;

namespace RoombBooking.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Booking> Bookings { get; set; }
    }
}
