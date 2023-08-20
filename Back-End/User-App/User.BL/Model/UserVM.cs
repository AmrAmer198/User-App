using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User.BL.Model
{
    public class UserVM
    {
   
        public int Id { get; set; }

        public string Name { get; set; }
      
        public bool IsActive { get; set; }
    }
}

