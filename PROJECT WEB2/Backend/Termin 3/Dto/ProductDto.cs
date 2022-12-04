using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Termin_6.Dto
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string NameOfProduct { get; set; }
        public int Price { get; set; }
        public string Ingredients { get; set; }
    }
}
