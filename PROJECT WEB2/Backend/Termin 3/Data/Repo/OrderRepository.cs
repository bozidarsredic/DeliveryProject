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
    public class OrderRepository : IOrderRepository
    {
       

        private readonly IMapper mapper;
        // private readonly IConfigurationSection _secretKey;
        private readonly DataContext dc;

        public OrderRepository(IMapper mapper, DataContext dc)
        {
            this.mapper = mapper;
            //this._secretKey = config.GetSection("SecretKey");
            this.dc = dc;
        }

        public List<OrderDto> GetAllOrders()
        {
            return mapper.Map<List<OrderDto>>(dc.Orders.ToList());
        }

        public void AddOrder(OrderDto dto)
        {
            dc.Orders.Add(mapper.Map<Order>(dto));
            dc.SaveChanges();
        }

        public void UpdateOrder(OrderDto dto)
        {
            //foreach (var o in orreds) {

            //    if (o.id == dto.id) {

            //        o.delivered = dto.delivered;
            //        o.deliverer = dto.deliverer;
            //    }

            //}
            //Console.WriteLine("");

            var order = dc.Orders.FirstOrDefault(x => x.Id == dto.Id);
           

            mapper.Map(dto, order);

            dc.SaveChanges();
        }

    }
}
