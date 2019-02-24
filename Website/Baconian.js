function encode(){
    var input = document.getElementById("message").value;
    var output = "";
    for (var i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == "a")
        {
            output = output + "aaaaa";
        }
        else if(input.charAt(i) == "b")
        {
            output = output + "aaaab";
        }
        else if(input.charAt(i) == "c")
        {
            output = output + "aaaba";
        }
        else if(input.charAt(i) == "d")
        {
            output = output + "aaabb";
        }
        else if(input.charAt(i) == "e")
        {
            output = output + "aabaa";
        }
        else if(input.charAt(i) == "f")
        {
            output = output + "aabab";
        }
        else if(input.charAt(i) == "g")
        {
            output = output + "aabba";
        }
        else if(input.charAt(i) == "h")
        {
            output = output + "aabbb";
        }
        else if(input.charAt(i) == "i")
        {
            output = output + "abaaa";
        }
        else if(input.charAt(i) == "j")
        {
            output = output + "abaab";
        }
        else if(input.charAt(i) == "k")
        {
            output = output + "ababa";
        }
        else if(input.charAt(i) == "l")
        {
            output = output + "ababb";
        }
        else if(input.charAt(i) == "m")
        {
            output = output + "abbaa";
        }
        else if(input.charAt(i) == "n")
        {
            output = output + "abbab";
        }
        else if(input.charAt(i) == "o")
        {
            output = output + "abbba";
        }
        else if(input.charAt(i) == "p")
        {
            output = output + "abbbb";
        }
        else if(input.charAt(i) == "q")
        {
            output = output + "baaaa";
        }
        else if(input.charAt(i) == "r")
        {
            output = output + "baaab";
        }
        else if(input.charAt(i) == "s")
        {
            output = output + "baaba";
        }
        else if(input.charAt(i) == "t")
        {
            output = output + "baabb";
        }
        else if(input.charAt(i) == "u")
        {
            output = output + "babaa";
        }
        else if(input.charAt(i) == "v")
        {
            output = output + "babab";
        }
        else if(input.charAt(i) == "w")
        {
            output = output + "babba";
        }
        else if(input.charAt(i) == "x")
        {
            output = output + "babbb";
        }
        else if(input.charAt(i) == "y")
        {
            output = output + "bbaaa";
        }
        else if(input.charAt(i) == "z")
        {
            output = output + "bbaab";
        }
        else if (input.charAt(i) == " ")
        {
            output = output + " ";
        }
        else
        {
          alert("Error: unknown character");
        }
    }
    document.getElementById("output").innerHTML = output;
}
