using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Termin_3.Dto;
using Termin_3.Interfaces;
using Termin_6.Dto;
using Termin_6.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Termin_3.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IConfiguration conf;

        public UserController(IUnitOfWork uow, IConfiguration conf)
        {
            this.uow = uow;
            this.conf = conf;
        }

       [HttpPost("registration")]
        public IActionResult Create([FromBody] UserDto dto)
        {
            
            if (uow.UserRepository.CreateUser(dto) == "postoji")
                return Ok();
            return Ok(new { Value = "value" });
        }

        [HttpPost("login")]
        public   IActionResult Post([FromBody] LoginDto dto)
        {
            var users = uow.UserRepository.GetAllUsers();
            foreach(var u in users)
            {
                if (u.Email == dto.Email)
                {
                    if (BCrypt.Net.BCrypt.Verify(dto.Password, u.Password))
                    {
                        SymmetricSecurityKey secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(conf.GetSection("SecretKey").Value));
                        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                        var tokeOptions = new JwtSecurityToken(
                            issuer: "https://localhost:44398", //url servera koji je izdao token
                            claims: new List<Claim>(), //claimovi
                            expires: DateTime.Now.AddMinutes(20), //vazenje tokena u minutama
                            signingCredentials: signinCredentials //kredencijali za potpis
                        );
                        string tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                        return Ok(new TokenDto{ Token = tokenString });
                    }
                    return null;
                }
            }
            return null;
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {

            return Ok(uow.UserRepository.GetAllUsers());
        }

        [HttpGet("{email}")]
        public IActionResult GetByUsername(string email)
        {
            return Ok(uow.UserRepository.GetUserByEmail(email));
        }

        [HttpPost("update")]
        public IActionResult UpdateAsync([FromBody] UserDto dto)
        {
           uow.UserRepository.UpdateUserAsync(dto);
           return Ok();
        }

        [HttpPost("update2")]
        public IActionResult UpdateAsync2([FromBody] UserDto dto)
        {
            uow.UserRepository.UpdateUserAsync(dto);
            
            return Ok();
        }

      

     
    }
}
