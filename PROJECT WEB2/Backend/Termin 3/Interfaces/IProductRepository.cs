using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_6.Dto;

namespace Termin_6.Interfaces
{
   public  interface IProductRepository
    {
        List<ProductDto> GetAllProducts();
        void AddProduct(ProductDto dto);
    }
}
