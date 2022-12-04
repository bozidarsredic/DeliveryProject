using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_6.Dto;
using Termin_6.Interfaces;

namespace Termin_6.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController : Controller { 

         private readonly IUnitOfWork uow;
         private readonly IConfiguration conf;

         public OrderController(IUnitOfWork uow, IConfiguration conf)
            {
                this.uow = uow;
                this.conf = conf;
         }
    
        [HttpGet("all")]
        public  IActionResult GetAllorders()
        {
            return Ok(uow.OrderRepository.GetAllOrders());
        }

        [HttpPost("addorder")]
        public  IActionResult AddOrder([FromBody] OrderDto dto)
        {
            uow.OrderRepository.AddOrder(dto);
                return Ok();
           
        }
        [HttpPost("updateorder")]
        public IActionResult updateOrder([FromBody] OrderDto dto)
        {
            uow.OrderRepository.UpdateOrder(dto);
            return Ok();

        }
    }
}
