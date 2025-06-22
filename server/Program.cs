var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
var app = builder.Build();

if (app.Environment.IsDevelopment())
    Console.WriteLine("server_info: on dev mode!");

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod());
app.MapDefaultControllerRoute();
app.MapControllers();
app.Run();