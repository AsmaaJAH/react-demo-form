namespace RoombBooking.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string Phone { get; set; }
        public string Room { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}