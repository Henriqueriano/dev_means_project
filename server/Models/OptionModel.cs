namespace server.Models
{
    public class Option
    {
        public bool UserPermission { get; set; }
        public string Content { get; set; }
        public string Link { get; set; }
        public Option(bool userPermission, string content, string link)
        {
            UserPermission = userPermission;
            Content = content;
            Link = link;
        }
    }
}