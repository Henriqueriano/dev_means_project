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
            this.Id = id;
            this.Title = title;
            this.Content = content;
            this.Author = author;
        }
    }    
}