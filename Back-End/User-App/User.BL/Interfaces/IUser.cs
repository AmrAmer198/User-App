using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using User.BL.Model;
using User.DAL.Entity;

namespace User.DAL
{
    public interface IUser
    {
        Task<IEnumerable<Users>> GetUsersAsync();
        Task<Users> GetUserByIdAsync(int id);
        Task CreateUserAsync(UserVM userVM);
        Task UpdateUserAsync(int id ,UserVM userVM);
        Task DeleteUserAsync(int id);
    }
}
