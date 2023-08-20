using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using User.BL.Model;
using User.DAL;
using User.DAL.Database;
using User.DAL.Entity;

namespace User.BL.Repository
{
    public class UserRepository : IUser
    {
        private readonly UserDbContext context;
        private readonly IMapper _mapper;



        public UserRepository(UserDbContext _context , IMapper mapper)
        {
            
            context = _context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Users>> GetUsersAsync()
        {
            var users = await context.users.Where(u => u.IsActive).ToListAsync();
            return users;

           

        }

        public async Task<Users> GetUserByIdAsync(int id)
        {
            return await context.users.FindAsync(id);

            //return await context.users.SingleOrDefaultAsync(u => u.Id == id);
        }

        public async Task CreateUserAsync(UserVM userVM)
        {
         

            var newUser = _mapper.Map<Users>(userVM);
            context.users.Add(newUser);
            await context.SaveChangesAsync();


            //await context.AddAsync(userVM);
            //var user = mapper.Map<Users>(userVM);
            //await context.users.AddAsync(user);
            //await context.SaveChangesAsync();
        }

        public async Task UpdateUserAsync(int id, UserVM userVM)
        {
            var existingUser = await context.users.FindAsync(id);
            if (existingUser == null) return;

            _mapper.Map(userVM, existingUser);
            await context.SaveChangesAsync();

            
        }

        public async Task DeleteUserAsync(int id)
        {

            var user = await context.users.FindAsync(id);
            if (user == null) return;
            user.IsActive = false;
            ;
            
            await context.SaveChangesAsync();
           
        }
    }
}
