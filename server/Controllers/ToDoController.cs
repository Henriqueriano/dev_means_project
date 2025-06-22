using Microsoft.AspNetCore.Mvc;
using server.Models;
namespace server.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ToDoController : Controller
    {
        [HttpGet]
        public TodoItem[] GetTodoItens()
        {
            TodoItem[] itens = new TodoItem[10];
            for (int i = 0; i < 10; i++)
                itens[i] = new TodoItem(i, $"Item {i}", $"Describe item {i}", "Daniel H.");
            return itens;
        }
    }
}