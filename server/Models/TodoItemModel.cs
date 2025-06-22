namespace server.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public TodoItem(int id, string title, string content, string author)
        {
            Id = id;
            Title = title;
            Content = content;
            Author = author;
        }
    }    
}