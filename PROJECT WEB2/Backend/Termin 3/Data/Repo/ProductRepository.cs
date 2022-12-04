using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_6.Dto;
using Termin_6.Interfaces;
using Termin_6.Models;

namespace Termin_6.Data.Repo
{
    public class ProductRepository:IProductRepository
    {
        private readonly IMapper mapper;
        // private readonly IConfigurationSection _secretKey;
        private readonly DataContext dc;

     

        public ProductRepository(IMapper mapper, DataContext dc)
        {
            this.mapper = mapper;
            //this._secretKey = config.GetSection("SecretKey");
            this.dc = dc;
        }

        public void AddProduct(ProductDto dto)
        {
            dc.Products.Add(mapper.Map<Product>(dto));
            dc.SaveChanges();

           
        }

        public List<ProductDto> GetAllProducts()
        {
            return mapper.Map<List<ProductDto>>(dc.Products.ToList());
          
        }
    }
}
