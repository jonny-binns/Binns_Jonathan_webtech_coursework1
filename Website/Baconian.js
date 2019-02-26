function encode(){
    var input = document.getElementById("message").value;
    var output = "";
    try
    {
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
          else if(input.charAt(i) == "A")
          {
              output = output + "AAAAA";
          }
          else if(input.charAt(i) == "B")
          {
              output = output + "AAAAb";
          }
          else if(input.charAt(i) == "C")
          {
              output = output + "AAABA";
          }
          else if(input.charAt(i) == "D")
          {
              output = output + "AAABB";
          }
          else if(input.charAt(i) == "E")
          {
              output = output + "AABAA";
          }
          else if(input.charAt(i) == "F")
          {
              output = output + "AABAB";
          }
          else if(input.charAt(i) == "G")
          {
              output = output + "AABBA";
          }
          else if(input.charAt(i) == "H")
          {
              output = output + "AABBB";
          }
          else if(input.charAt(i) == "I")
          {
              output = output + "ABAAA";
          }
          else if(input.charAt(i) == "J")
          {
              output = output + "ABAAB";
          }
          else if(input.charAt(i) == "K")
          {
              output = output + "ABABA";
          }
          else if(input.charAt(i) == "L")
          {
              output = output + "ABABB";
          }
          else if(input.charAt(i) == "M")
          {
              output = output + "ABBAA";
          }
          else if(input.charAt(i) == "N")
          {
              output = output + "ABBAB";
          }
          else if(input.charAt(i) == "O")
          {
              output = output + "ABBBA";
          }
          else if(input.charAt(i) == "P")
          {
              output = output + "ABBBB";
          }
          else if(input.charAt(i) == "Q")
          {
              output = output + "BAAAA";
          }
          else if(input.charAt(i) == "R")
          {
              output = output + "BAAAB";
          }
          else if(input.charAt(i) == "S")
          {
              output = output + "BAABA";
          }
          else if(input.charAt(i) == "T")
          {
              output = output + "BAABB";
          }
          else if(input.charAt(i) == "U")
          {
              output = output + "BABAA";
          }
          else if(input.charAt(i) == "V")
          {
              output = output + "BABAB";
          }
          else if(input.charAt(i) == "W")
          {
              output = output + "BABBA";
          }
          else if(input.charAt(i) == "X")
          {
              output = output + "BABBB";
          }
          else if(input.charAt(i) == "Y")
          {
              output = output + "BBAAA";
          }
          else if(input.charAt(i) == "Z")
          {
              output = output + "BBAAB";
          }
          else
          {
              output = output + input.charAt(i);
          }
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
