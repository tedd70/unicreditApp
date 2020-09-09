using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace unicreditServicesApi.Models
{
    public class Book
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Author { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
    }
}
