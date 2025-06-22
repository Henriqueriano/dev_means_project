namespace server.Models
{
    public class Option
    {
        public bool UserPermission { get; set; }
        public string Content { get; set; }
        public string Link { get; set; }

        public Option(bool userPermission, string content, string link)
        {
            this.UserPermission = userPermission;
            this.Content = content;
            this.Link = link;
        }
    }
}