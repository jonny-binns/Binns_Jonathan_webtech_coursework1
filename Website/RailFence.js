function encode(){
    var input = document.getElementById("message").value;
    var output1 = "";
    var output2 = "";
    var output3 = "";
    var output = "";
    try
    {
        for (var i = 0; i < input.length;)
        {
            output1 = output1 + input.charAt(i);
            i= i + 4;
        }
        for (var i = 1; i< input.length;)
        {
            output2 = output2 + input.charAt(i);
            i= i + 2;
        }
        for (var i = 2; i< input.length;)
        {
          output3 = output3 + input.charAt(i);
          i= i + 4;
        }
    }
    catch
    {
        alert("Error: unknown character");
    }
    finally
    {
        document.getElementById("output").innerHTML = output1 + output2 + output3;
    }
}
