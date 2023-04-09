using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class BasicTestController : ControllerBase
{
    private static int clickCount = 0;
    [HttpGet("message")]
    public ActionResult<string> GetMessage()
    {
        clickCount++;
        return ("suh dude " + " " + clickCount);
    }
}