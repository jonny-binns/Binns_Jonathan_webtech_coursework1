function encode(){
    //takes in text from the text box and sets it equal to input
    var input = document.getElementById("message").value;
    //removes any non alphabetical entered
    input = input.replace(/[^a-z]/gi, '');
    //creates the output string
    var output = "";
    try
    {
      //loops through the code
      for (var i = 0; i < input.length; i++)
      {
          //adds the 5 letter code for each alphabetical letter to the output string
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
              //if the character isnt in the alphabet throws an error
              throw "Unknown Character";
          }
      }
      //prints output to the correct text box
      document.getElementById("EncipheredTextBox").innerHTML = output;
    }
    //catches any errors thrown
    catch(err)
    {
        //shows any errors thrown as an alert
        alert("Error: " + err);
    }
}


function decode(){
  //takes the text from the text box and sets it equal to input
  var input = document.getElementById("message").value;
  //removes any non alphabetical characters
  var input_alphanumeric = input.replace(/[^a-z]/gi, '');
  //splits input_alphanumeric to an array of 5 character strings
  var input_array = input_alphanumeric.match(/.{1,5}/g);
  //calculates the length of the array
  var input_array_length = input_array.length;
  //creates the output string
  var output = "";

  try
  {
      //loops through the array of 5 letter codes
      for (var i = 0; i < input_array_length; i++)
      {
        //adds the corresponding letter of the alphabet to the output string
        if(input_array[i] == "aaaaa")
        {
            output = output + "a";
        }
        else if(input_array[i] == "aaaab")
        {
            output = output + "b";
        }
        else if(input_array[i] == "aaaba")
        {
            output = output + "c";
        }
        else if(input_array[i] == "aaabb")
        {
            output = output + "d";
        }
        else if(input_array[i] == "aabaa")
        {
            output = output + "e";
        }
        else if(input_array[i] == "aabab")
        {
            output = output + "f";
        }
        else if(input_array[i] == "aabba")
        {
            output = output + "g";
        }
        else if(input_array[i] == "aabbb")
        {
            output = output + "h";
        }
        else if(input_array[i] == "abaaa")
        {
            output = output + "i";
        }
        else if(input_array[i] == "abaab")
        {
            output = output + "j";
        }
        else if(input_array[i] == "ababa")
        {
            output = output + "k";
        }
        else if(input_array[i] == "ababb")
        {
            output = output + "l";
        }
        else if(input_array[i] == "abbaa")
        {
            output = output + "m";
        }
        else if(input_array[i] == "abbab")
        {
            output = output + "n";
        }
        else if(input_array[i] == "abbba")
        {
            output = output + "o";
        }
        else if(input_array[i] == "abbbb")
        {
            output = output + "p";
        }
        else if(input_array[i] == "baaaa")
        {
            output = output + "q";
        }
        else if(input_array[i] == "baaab")
        {
            output = output + "r";
        }
        else if(input_array[i] == "baaba")
        {
            output = output + "s";
        }
        else if(input_array[i] == "baabb")
        {
            output = output + "t";
        }
        else if(input_array[i] == "babaa")
        {
            output = output + "u";
        }
        else if(input_array[i] == "babab")
        {
            output = output + "v";
        }
        else if(input_array[i] == "babba")
        {
            output = output + "w";
        }
        else if(input_array[i] == "babbb")
        {
            output = output + "x";
        }
        else if(input_array[i] == "bbaaa")
        {
            output = output + "y";
        }
        else if(input_array[i] == "bbaab")
        {
            output = output + "z";
        }
        else if(input_array[i] == "AAAAA")
        {
            output = output + "A";
        }
        else if(input_array[i] == "AAAAB")
        {
            output = output + "B";
        }
        else if(input_array[i] == "AAABA")
        {
            output = output + "C";
        }
        else if(input_array[i] == "AAABB")
        {
            output = output + "D";
        }
        else if(input_array[i] == "AABAA")
        {
            output = output + "E";
        }
        else if(input_array[i] == "AABAB")
        {
          output = output + "F";
        }
        else if(input_array[i] == "AABBA")
        {
            output = output + "G";
        }
        else if(input_array[i] == "AABBB")
        {
            output = output + "H";
        }
        else if(input_array[i] == "ABAAA")
        {
            output = output + "I";
        }
        else if(input_array[i] == "ABAAB")
        {
            output = output + "J";
        }
        else if(input_array[i] == "ABABA")
        {
            output = output + "K";
        }
        else if(input_array[i] == "ABABB")
        {
            output = output + "L";
        }
        else if(input_array[i] == "ABBAA")
        {
            output = output + "M";
        }
        else if(input_array[i] == "ABBAB")
        {
            output = output + "N";
        }
        else if(input_array[i] == "ABBBA")
        {
            output = output + "O";
        }
        else if(input_array[i] == "ABBBB")
        {
            output = output + "P";
        }
        else if(input_array[i] == "BAAAA")
        {
            output = output + "Q";
        }
        else if(input_array[i] == "BAAAB")
        {
            output = output + "R";
        }
        else if(input_array[i] == "BAABA")
        {
            output = output + "S";
        }
        else if(input_array[i] == "BAABB")
        {
            output = output + "T";
        }
        else if(input_array[i] == "BABAA")
        {
            output = output + "U";
        }
        else if(input_array[i] == "BABAB")
        {
            output = output + "V";
        }
        else if(input_array[i] == "BABBA")
        {
            output = output + "W";
        }
        else if(input_array[i] == "BABBB")
        {
            output = output + "X";
        }
        else if(input_array[i] == "BBAAA")
        {
            output = output + "Y";
        }
        else if(input_array[i] == "BBAAB")
        {
            output = output + "Z";
        }
        else
        {
            //throws error if the character code isnt recognised
            throw "Unknown character";
        }
      }
      //shows output character in the correct text box
      document.getElementById("DecipheredTextBox").innerHTML = output;
  }
  //catches any errors thrown
  catch(err)
  {
      //shows any errors as an alert
      alert("Error: " + err);
  }
}
