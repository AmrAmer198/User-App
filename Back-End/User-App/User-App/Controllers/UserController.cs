using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using User.BL.Model;
using User.BL.Repository;
using User.DAL;
using User.DAL.Entity;

namespace User_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser userRepository;
        private readonly IMapper _mapper;


        public UserController(IUser _userRepository, IMapper mapper)
        {
            userRepository = _userRepository;
            _mapper = mapper;
        }

        [HttpGet("GetAllUser")]
        public async Task<ActionResult> GetUsers()
        {
            var users = await userRepository.GetUsersAsync();
            return Ok(users);

           
        }

        [HttpGet("GetUserById")]
        public async Task<ActionResult<Users>> GetUserById(int id)
        {
            var user = await userRepository.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult> CreateUser(UserVM userVM)
        {

         await   userRepository.CreateUserAsync(userVM);
           
      

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(  int id, [FromBody] UserVM userVM)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await userRepository.UpdateUserAsync(id, userVM);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            await userRepository.DeleteUserAsync(id);
            return Ok();
        }


        
    }
}
