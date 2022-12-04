using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_3.Dto;
using Termin_6.Interfaces;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Termin_3.Models;
using Termin_6.Dto;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Termin_6.Data.Repo
{
    public class UserRepository : IUserRepository
    {
        private readonly IMapper mapper;
      
        private readonly DataContext dc;
        

        public UserRepository(IMapper mapper, DataContext dc)
        {
            this.mapper = mapper;
          
            this.dc = dc;
        }
        public string CreateUser(UserDto newUser)
        {
           

            foreach (var pom in mapper.Map<List<UserDto>>(dc.Users.ToList()))
            {
                if (pom.Email == newUser.Email)
                {
                    return "postoji";
                }
            }


           // newUser.type = "ADMINISTRATOR";
            newUser.Password = BCrypt.Net.BCrypt.HashPassword(newUser.Password);
            newUser.Password2 = BCrypt.Net.BCrypt.HashPassword(newUser.Password2);

            dc.Users.Add(mapper.Map<User>(newUser));
            dc.SaveChanges();

            return "";
        }



        public List<UserDto> GetAllUsers()
        {
            return mapper.Map<List<UserDto>>(dc.Users.ToList());
        }

        public void UpdateUserAsync(UserDto newUser)
        {
            var user = dc.Users.FirstOrDefault(x => x.Email == newUser.Email);
            //

            if (newUser.Password != user.Password) {
                newUser.Password = BCrypt.Net.BCrypt.HashPassword(newUser.Password);
            }


            mapper.Map( newUser, user);


            dc.SaveChanges();
           
           
        }


     

        public UserDto GetUserByEmail(string email)
        {

            return mapper.Map<UserDto>(dc.Users.FirstOrDefault(x => x.Email == email));
          
        }
    }
}
