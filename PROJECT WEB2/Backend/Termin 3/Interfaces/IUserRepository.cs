using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_3.Dto;
using Termin_3.Models;
using Termin_6.Dto;

namespace Termin_6.Interfaces
{
    public interface IUserRepository
    {
        string CreateUser(UserDto newUser);

        //TokenDto Login(LoginDto dto);

        UserDto GetUserByEmail(string email);

        List<UserDto> GetAllUsers();
        void UpdateUserAsync(UserDto newUser);

       
    }
}
