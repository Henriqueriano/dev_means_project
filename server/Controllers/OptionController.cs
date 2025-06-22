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
            Option[] option = new Option[10];
            for (int i = 0; i < 10; i++)
            {
                Option opt = new(false, "Facebook", "https://www.facebook.com/");
                option[i] = opt;
            }
            return option;
        }
    }
}
