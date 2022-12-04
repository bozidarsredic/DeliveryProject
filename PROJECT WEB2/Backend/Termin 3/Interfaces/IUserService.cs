using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Termin_3.Dto;
using Termin_6.Dto;

namespace Termin_3.Interfaces
{
    public interface IUserService
    {
        string CreateUser(UserDto newUser);
        TokenDto Login(LoginDto dto);

        

        List<UserDto> GetAllUsers();
        void UpdateUser(UserDto newUser);

      
    }
}

