function encode(){
    var input = document.getElementById("message").value;
    var output = "";
    try
    {
        for (var i = 0; i < input.length; )
        {
          output = output + input.charAt(i);
            i = i + 4;
        }
        for (var i = 1; i< input.length;)
        {
            output = output + input.charAt(i);
            i = i + 4;
        }
        for (var i = 2; i< input.length;)
        {
            output = output + input.charAt(i);
            i = i + 4;
        }
        for (var i = 3; i< input.length;)
        {
            output = output + input.charAt(i);
            i = i + 4;
        }
        for (var i = 4; i< input.length;)
        {
            output = output + input.charAt(i);
            i = i + 4;
        }
    }
    catch
    {
        alert("Error: unknown character");
    }
    finally
    {
        document.getElementById("output").innerHTML = output;
    }
}
