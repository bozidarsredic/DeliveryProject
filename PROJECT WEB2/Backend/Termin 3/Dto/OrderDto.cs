using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_6.Models;

namespace Termin_6.Dto
{
    public class OrderDto
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int Quantity { get; set; }
        public string Comment { get; set; }
        public int Price { get; set; }
        public string NameOfProduct { get; set; }
        public int PriceOfProduct { get; set; }
        public string Ingredients { get; set; }
        public string Customer { get; set; }
        public string Deliverer { get; set; }
        public bool Delivered { get; set; }
        public string Time { get; set; }
        public double Lon { get; set; }
        public double Lat { get; set; }
    }
}
