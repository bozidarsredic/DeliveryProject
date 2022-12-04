using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_6.Dto;

namespace Termin_6.Interfaces
{
   public  interface IOrderRepository
    {
        List<OrderDto> GetAllOrders();
        void AddOrder(OrderDto dto);
        void UpdateOrder(OrderDto dto);
    }
}
