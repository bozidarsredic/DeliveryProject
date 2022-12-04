using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_6.Dto;
using Termin_6.Interfaces;
using Termin_6.Models;

namespace Termin_6.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IUnitOfWork uow;
        private readonly IConfiguration conf;

        public ProductController(IUnitOfWork uow, IConfiguration conf)
        {
            this.uow = uow;
            this.conf = conf;
        }

        [HttpGet("all")]
        public IActionResult GetAllProducts()
        {
            return Ok(uow.ProductRepository.GetAllProducts());
        }

        [HttpPost("addproduct")]
        public IActionResult AddProduct([FromBody] ProductDto dto)
        {
            uow.ProductRepository.AddProduct(dto);
                return Ok();
        }
    }
}
