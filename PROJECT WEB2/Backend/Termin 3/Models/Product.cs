using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Termin_6.Models
{
    public class Product
    {

        public int Id { get; set; }
        public string NameOfProduct { get; set; }
        public int Price { get; set; }
        //public List<string> ingredients { get; set; }

        public string Ingredients { get; set; }



    }
}
