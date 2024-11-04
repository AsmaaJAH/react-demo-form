namespace RoombBooking.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public required string Phone { get; set; }
        public required string Room { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
