using Microsoft.AspNetCore.Mvc;
using server.Models;
namespace server.Controllers
{
    [Route("/[controller]/[action]")]
    [ApiController]
    public class OptionController : Controller
    {
        [HttpGet]
        public Option[] GetOptions()
        {
            Option[] option = new Option[5];
            for (int i = 0; i < 5; i++)
                option[i] = new Option (false, "Facebook", "https://www.facebook.com/");
            return option;
        }
    }
}
