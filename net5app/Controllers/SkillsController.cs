using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using net5app.Models;

namespace net5app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        public SkillsController()
        {
        }

        [HttpGet("")]
        public ActionResult<List<Skill>> GetSkills()
        {
            var list = new List<Skill>();
            list.Add(new Skill{Id= 1, Name= "DevOps", Credits=5 });
            list.Add(new Skill{Id= 2, Name= "M365 Dev", Credits=5 });
            return list;
        }
    }
}