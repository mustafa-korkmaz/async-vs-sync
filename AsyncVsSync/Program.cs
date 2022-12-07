var builder = WebApplication.CreateBuilder(args);

//make it more minimal :)
builder.Logging.ClearProviders();

var app = builder.Build();

app.MapGet("/syncfoo", () =>
{
    // wait 0.5 sec
    Thread.Sleep(500);
    return "bar";
});

app.MapGet("/asyncfoo", async () =>
{
    // wait 0.5 sec
    await Task.Delay(500);
    return "bar";
});

app.Run();