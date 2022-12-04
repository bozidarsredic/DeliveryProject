using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Termin_3.Dto
{
    public class UserDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string NameAndLastName { get; set; }
        public string DateOfBirth { get; set; }
        public string Address { get; set; }
        public string Type { get; set; }
        public string Password2 { get; set; }
        public bool ValidationDeliverers { get; set; }
        public bool IdDeliverer { get; set; }
        public string Image { get; set; }


    }
}
