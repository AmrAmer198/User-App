using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User.DAL.Entity
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        [Required,MaxLength(50),DisplayName("Enter The User Name")]
        public string Name { get; set; }
        [Required]
        public bool IsActive { get; set; }
    }
}
