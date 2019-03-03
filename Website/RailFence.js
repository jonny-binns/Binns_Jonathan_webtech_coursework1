function encode()
{
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

function decode()
{
    var input = document.getElementById("message").value;
    var input_length1 = Math.ceil(input.length/4);
    var input_length2 = Math.floor(input.length/2);
    var input_length3 = input_length1 + input_length2;
    var input1 = "";
    var input2 = "";
    var input3 = "";
    var output = "";

    for(i=0; i<input.length; i++)
    {
        if(i<=input_length1-1)
        {
            input1 = input1 + input.charAt(i);
        }
        if(i>input_length1-1 && i<=input_length3-1)
        {
            input2 = input2 + input.charAt(i);
        }
        if(i>input_length3-1)
        {
          input3 = input3 + input.charAt(i);
        }
    }

    for(i=0; i<input.length/3; i++)
    {
        output = output + input1.charAt(i);
        output = output + input2.charAt(i);
        output = output + input3.charAt(i);
        output = output + input2.charAt(i+1);
    }

    document.getElementById("output").innerHTML = output;

}
