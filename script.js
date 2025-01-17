$(document).ready(function(){

$("#cell-1").click(function(){
  var click = $('#cell-1').text();
  if(click == ''){
    $("#cell-1").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'X' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    } 
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-1').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == 'X' && val4 == 'O' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val2 == 'X' && val3 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if (val6 == '') {
        $('#cell-6').append("O");
      }{
      };
    }
    else if (val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val3 == '') {
        $('#cell-3').append("O");
      };
    }
    else if (val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'O' && val7 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val3 == 'X' && val5 == 'O' && val6 == 'O' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'O' && val8 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val2 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val2 == 'X' && val5 == 'O' && val4 == 'O' && val9 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }
    }
    else if (val2 == 'O' && val5 == 'O' && val4 == 'X' && val8 == 'X') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }
    }
    else if (val2 == 'O' && val5 == 'O') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val2 == 'O' && val3  == 'O') {
      if(val4 == ''){
        $('#cell-4').append("O");
      }
    }
    else if (val4 == 'X') {
      if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }
    }
    else if (val2 == 'X') {
      if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }
    }
    else if (val5 == 'X'){
      if(val9 == ''){
        $('#cell-9').append("O");
      }
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }else if (val7 == 'X' && val5 == 'O') {
      if(val4 == ''){
      $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

}
  }
);





$("#cell-2").click(function(){
  var click = $('#cell-2').text();
  if(click == ''){
    $("#cell-2").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'X' && val2 == 'X' && val3 == '' && val4 == 'O' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == '' && val5 == 'X' && val6 == '' && val7 == 'O' && val8 == '' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'X' && val6 == '' && val7 == 'O' && val8 == '' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'O' && val4 == 'X' && val5 == 'X' && val6 == 'O' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == 'O' && val5 == 'X' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val8 == 'O' && val9 == 'X'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'O' && val5 == 'X' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'X' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val4 == 'O' && val5 == 'O' && val7 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val5 == 'O' && val6 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");

      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if(val5 == 'O' && val1  == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if(val5 == 'O' && val6  == 'O') {
      if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }
    }
    else if(val5 == 'O' && val4  == 'O') {
      if(val6 == ''){
      $('#cell-6').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }
    }
    else if (val5 == 'X' && val1 == 'O') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val3 == 'X' && val5 == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }
    }
    else if (val5 == 'X' && val7 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val5 == 'O' && val7 == 'O') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val7 == 'X' && val8 == 'X') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }
    }
    else if (val8 == 'X' && val9 == 'O') {
      if (val5 == '') {
        $('#cell-5').append("O");
      }
    }
    else if (val5 == '') {
      $('#cell-5').append("O");
    }
    else if (val5 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val4 == '') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }
    }
    else if (val3 == 'X') {
      if (val3 == '') {
        $('#cell-1').append("O");
      }
    }
    else if(val8 == ''){
      $('#cell-8').append("O");
    }
    else if (val8 == 'X') {
      if (val5 == '') {
        $('#cell-5').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O")
      }
    }
    else if (val5 == 'X') {
      if(val8 == ''){
      $('#cell-8').append("O");
      }
    }
    else if (val4 == '') {
      $('#cell-4').append("O");
    }
    else if (val5 == 'X') {
      $('#cell-8').append("O");
    }
    else if (val3 == 'X') {
      if(val1 == ''){
        $('#cell-1').append("O");
      }
    } 
    else if(val1 == 'X'){
      $('#cell-3').append("O");
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

}
  }
);



$("#cell-3").click(function(){
  var click = $('#cell-3').text();
  if(click == ''){
    $("#cell-3").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == '' && val2 == 'X' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    } 
    else if (val1 == '' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == 'X' && val4 == 'O' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == '' && val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-1').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'X' && val4 == 'O' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val6 == '') {
        $('#cell-9').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'X' && val4 == 'O' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if(val2 == 'O' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }
    }
    else if(val1 == 'O' && val2 == 'X' && val4 == 'X' && val5 == 'O' && val7 == 'X' && val9 == 'O'){
      if(val8 == ''){
        $('#cell-8').append("O");
      }
    }
    else if (val2 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val6 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val6 == '' && val7 == '' && val4 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val4 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'O' && val8 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'X' && val8 == 'O'){
      if (val7 == '') {
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val4 == 'O' && val7 == 'X' && val6 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val5 == 'X' && val8 == 'X' && val7 == 'O' && val9 == 'O') {
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val5 == 'O' && val9 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      };
      
    }
    else if (val5 == 'X' && val9 == 'X' && val1 == 'O' && val7 == 'O') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }else if(val2 == 'X' && val5  == 'O' && val4 == 'X' && val1 == 'O'){
      if(val9 == ''){
        $('#cell-9').append("O");
      };
    }else if(val5 == 'O' && val8  == 'X') {
      if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }
    }
    else if (val4 == 'O' && val5 == 'O') {
      if (val6 == '') {
        $('#cell-6').append("O");
      };
      
    }
    else if (val5 == 'X') {
      if (val7 == '') {
        $('#cell-7').append("O");
      };
      
    }
    else if (val6 == 'X') {
      if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val5 == '') {
      $('#cell-5').append("O");
    }
    else if (val2 == '') {
      $('#cell-2').append("O");
    }
    else if (val9 == 'X') {
      $('#cell-6').append("O");
    }
    else if (val5 == '') {
      $('#cell-5').append("O");
    }
    else if (val5 == 'X') {
      $('#cell-7').append("O");
    }
    else if (val2 == '') {
      if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val6 == 'X') {
      if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val5 == 'X') {
      $('#cell-7').append("O");
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val2 == 'X' && val5  == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

}
  }
);


$("#cell-4").click(function(){
  var click = $('#cell-4').text();
  if(click == ''){
    $("#cell-4").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'X' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'X' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val5 == 'X' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'O' && val5 == 'X' && val7 == 'X' && val8 == 'O'){
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'X' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val7 == '') {
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'X' && val5 == 'X' && val6 == 'O' && val7 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }
    else if(val5 == 'X' && val7  == 'X' && val3 == 'O' && val1 == 'O') {
      if(val2 == ''){
        $('#cell-2').append("O");
      }
    }
    else if (val7 == 'X' && val8 == 'X' && val9 == 'O' && val5 == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }
    else if (val1 == 'O' && val2 == 'O') {
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O")
      }
    }
    else if (val6 == 'X' && val8 == 'X') {
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }
    }
    else if (val2 == 'O' && val5 == 'O') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }
    }
    else if (val5 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }
    }
    else if (val1 == 'X') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }
    }
    else if (val7 == 'X' && val5 == 'O') {
      if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val5 == '') {
      $('#cell-5').append("O");
    }
    else if (val5 == 'X') {
      if(val6 == ''){
        $('#cell-6').append("O");
      }
    }
    else if (val1 == 'X') {
      if(val7 == ''){}
      $('#cell-7').append("O");
    }
    else if(val1 == ''){
      $('#cell-1').append("O");
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

}
  }
);



$("#cell-5").click(function(){
  var click = $('#cell-5').text();
  if(click == ''){
    $("#cell-5").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'O' && val2 == 'O') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
      
    }
    else if (val1 == 'O' && val4 == 'O') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }
      
    }
    else if (val7 == 'X' && val4 == 'O') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val2 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val8 == 'X') {
      if (val2 == '') {
        $('#cell-2').append("O");
      }
    }
    else if (val9 == 'X') {
      if(val1 == ''){
        $('#cell-1').append("O");
      }
    }
    else if(val3 == 'X' && val9 == 'X'){
      $('#cell-6').append("O");
      }
    else if (val7 == 'X') {
      if(val3 != 'X' && val3 != 'O'){
        $('#cell-3').append("O");
      }
    }
    else if (val8 == 'X') {
      $('#cell-2').append("O");
    }
    else if (val4 == 'X') {
      $('#cell-6').append("O");
    }
    else if(val1 != 'O' && val1 != 'X'){
      $('#cell-1').append("O");
    }
    else if (val1 == 'X'){
      if(val9 == ''){
        $('#cell-9').append("O");
      }
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }
    else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

  }
  }
);


$("#cell-6").click(function(){
  var click = $('#cell-6').text();
  if(click == ''){
    $("#cell-6").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == '' && val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val3 == '' && val4 == '' && val5 == 'X' && val6 == 'X' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'X' && val6 == 'X' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == '' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val3 == 'X' && val5 == 'O' && val4 == 'X' && val7 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val3 == '' && val7 == '' && val4 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'X' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val7 == '') {
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val5 == 'O'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O")
      };
    }
    else if (val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val2 == 'X' && val4 == 'O' && val5 == 'X' && val8 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val2 == 'X' && val3 == 'X' && val4 == 'O' && val5 == 'X' && val7 == 'O' && val8 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val5 == 'O' && val7 == 'O' && val8 == 'X' && val9 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val4 == 'O' && val7 == 'X' && val8 == 'O' && val5 == 'X' && val2 == 'X' && val3 == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }
    else if(val1 == 'X' && val5  == 'X' && val7 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val8 == 'X' && val9 == 'X') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }
    }
    else if (val1 == 'O' && val2 == 'O' && val4 == 'X' && val7 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val5 == 'X') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }
    }
    else if (val9 == 'X') {
      if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }
    }
    else if (val5 == 'X') {
      $('#cell-4').append("O");
    }
    else if (val3 == 'X') {
      if(val9 == ''){
        $('#cell-9').append("O");
      }
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }else if(val5 == 'O' && val8  == 'X') {
      $('#cell-9').append("O");
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else if(val9 != 'O' && val9  != 'X') {
      $('#cell-9').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }
}
  }
);


$("#cell-7").click(function(){
  var click = $('#cell-7').text();
  if(click == ''){
    $("#cell-7").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'X' && val2 == 'O' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }
    } 
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    } 
    else if (val1 == '' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'O' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'X' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == 'O' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == 'O' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'X' && val9 == ''){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == 'X' && val8 == 'X' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == '' && val7 == 'X' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val8 == '' && val9 == ''){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val8 == 'O' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val8 == 'X' && val5 == 'O') {
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
        
      }
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == 'O' && val5 == 'O' && val6 == 'X') {
      if (val9 == '') {
        $('#cell-9').append("O");
      }
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val6 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val6 == '' && val3 == '' && val4 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val5 == 'O'){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val3 == 'X' && val5 == 'O' && val6 == 'O' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val2 == 'X' && val3 == 'O' && val5 == 'O' && val6 == 'X' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == 'O') {
      if (val5 == '') {
        $('#cell-5').append("O");
      }
    }
    else if(val2 == 'X' && val4  == 'O' && val5 == 'O' && val8 == 'X') {
      $('#cell-6').append("O");
    }
    else if (val5 == 'X' && val4 == 'X' && val6 == 'O' && val1 == 'O') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if(val2 == 'X' && val5  == 'O' && val4 == 'X' && val1 == 'O' && val9 == 'O'){
      if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val4 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val2 == 'X' && val4 == 'X' && val5 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val4 == 'X' && val5 == 'X') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }
    else if (val5 == 'O' && val6 == 'O') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val5 == 'O' && val1 == 'X') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }
    }
    else if (val6 == 'X' && val9 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val5 == 'O' && val6 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
      
    }
    else if (val4 == 'O' && val5 == 'O') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }
    }
    else if (val2 == 'O' && val5 == 'O') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val8 == 'O' && val9 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val4 == 'X' && val5 == 'X' && val1 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }else if(val1 == 'O' && val2 == 'X' && val4 == 'X' && val5 == 'O'){
      if(val9 == ''){
        $('#cell-9').append("O");
      }
    }else if (val1 == 'X') {
      if (val4 == '') {
        $('#cell-4').append("O");
      }
    }else if (val4 == 'X') {
      if (val1 == '') {
        $('#cell-1').append("O");
      }
    }else if (val9 == 'X') {
      if(val8 == ''){
        $('#cell-8').append("O");
      }
    }else if(val5 == 'X'){
      if(val3 == ''){
        $('#cell-3').append("O");
      }
    }else if(val5 == ''){
      $('#cell-5').append("O");
    }
    else if(val4 == ''){
      $('#cell-4').append("O");
    }
    else if (val9 == 'X') {
      $('#cell-8').append("O");
    }
    else if (val1 == 'X') {
      $('#cell-4').append("O");
    }
    else if (val8 == 'X') {
      if (val9 == '') {
        $('#cell-9').append("O");
      }
    }
    else if(val1 != 'O' && val4  == ''){
      $('#cell-4').append("O");
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

}
  }
);


$("#cell-8").click(function(){
  var click = $('#cell-8').text();
  if(click == ''){
    $("#cell-8").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'X' && val2 == '' && val3 == '' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == '' && val8 == 'X' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    } 
    else if (val1 == 'O' && val2 == '' && val3 == 'X' && val4 == '' && val5 == 'X' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == '' && val4 == '' && val5 == 'X' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == 'X' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'X' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == ''){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val9 == '') {
        $('#cell-9').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == 'X' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == '' && val4 == 'O' && val5 == 'X' && val6 == 'X' && val7 == '' && val8 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == 'O' && val7 == '' && val9 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val7 == 'X') {
      if (val9 == '') {
        $('#cell-9').append("O");
      }
    }
    else if (val3 == 'X' && val5 == 'O' && val6 == 'O' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O")
      };
    }
    else if (val1 == 'O' && val2 == 'O' && val4 == 'X' && val7 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == 'O' && val6 == 'X' && val9 == 'O'){
      if (val7 == '') {
        $('#cell-7').append("O");
      };
    }
    else if (val2 == 'O' && val4 == 'X' && val5 == 'X' && val6 == 'O'){
      if (val3 == '') {
        $('#cell-3').append("O");
      };
    }
    else if (val1 == 'X' && val4 == 'O' && val5 == 'O' & val7 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val2 == 'X' && val1 == 'O' && val5 == 'O'){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val3 == 'X' && val5 == 'O' && val8 == 'X' && val9 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }else if (val2 == 'X' && val4 == 'O' && val5 == 'O' && val7 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val1 ==  ''){
        $('#cell-1').append("O");
      };
    }else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == 'O' && val5 == 'O' && val7 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }else if (val9 == 'X' && val2 == 'X' && val5 == 'O' && val4 == 'O') {
      if (val6 == '') {
        $('#cell-6').append("O");
      };
    }else if (val1 == 'O' && val2 == 'O' && val4 == 'X' && val5 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      };
    }else if (val4 == 'O' && val5 == 'O') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }else if(val5 == 'O' && val2  == 'X'){
      if(val3 == ''){
        $('#cell-3').append("O");
      };
    }else if (val5 == 'X') {
      if(val2 == ''){
        $('#cell-2').append("O");
      };
    }else if (val2 == 'X') {
      if (val5 == '') {
        $('#cell-5').append("O");
      };
    }else if (val9 == 'X') {
      if(val7 == ''){
        $('#cell-7').append("O");
      };
    }else if(val2  == '' && val3 == 'O' && val1 == 'O'){
      $('#cell-2').append("O");
    }else if (val5 == 'O' && val6 == 'X') {
      if(val7 == ''){
      $('#cell-7').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }
    }else if (val5 == 'X') {
      $('#cell-2').append("O");
    }else if(val7 == 'X' && val8  == 'X' && val3 == 'O' && val2 == 'O'){
      $('#cell-1').append("O");
    }else if(val5 == ''){
      $('#cell-5').append("O");
    }else if(val7 == 'X' && val8  == 'X'){
      if(val9 == ''){
        $('#cell-9').append("O");
      };
    }else if(val5 == 'O' && val3  == 'X') {
      if(val7 == ''){
        $('#cell-7').append("O");
      }else{
        $('#cell-9').append("O")
      }
    }else if(val7 != 'O' && val8  == ''){
      $('#cell-4').append("O");
    }else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else if(val6 == 'O'){
      $('#cell-6').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }
}
  }
);


$("#cell-9").click(function(){
  var click = $('#cell-9').text();
  if(click == ''){
    $("#cell-9").append("X");
    var val1 = $('#cell-1').text();
    var val2 = $('#cell-2').text();
    var val3 = $('#cell-3').text();
    var val4 = $('#cell-4').text();
    var val5 = $('#cell-5').text();
    var val6 = $('#cell-6').text();
    var val7 = $('#cell-7').text();
    var val8 = $('#cell-8').text();
    var val9 = $('#cell-9').text();
    if (val1 == 'X' && val2 == '' && val3 == 'O' && val4 == 'O' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == 'O' && val3 == '' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == '' && val2 == 'O' && val3 == 'X' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == 'O' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      };
    }
    else if (val1 == '' && val2 == 'X' && val3 == '' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == '' && val8 == 'X' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == '' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == 'O' && val4 == 'X' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val9 == ''){
        $('#cell-9').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == '' && val7 == '' && val8 == '' && val9 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'X' && val4 == '' && val5 == 'O' && val6 == 'O' && val7 == '' && val8 == 'X' && val9 == 'X'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val7 == ''){
        $('#cell-7').append("O");
      };
    }
    else if (val1 == '' && val2 == '' && val3 == '' && val4 == 'X' && val5 == 'O' && val6 == '' && val7 == 'O' && val8 == 'X' && val9 == 'X'){
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      };
    }
    else if (val1 == 'X' && val2 == '' && val3 == 'O' && val4 == 'O' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == '' && val9 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == 'X' && val8 == ''){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val8 == ''){
        $('#cell-4').append("O");
      };
    }else if (val1 == '' && val2 == 'X' && val3 == 'O' && val4 == '' && val5 == 'O' && val6 == 'X' && val7 == '' && val8 == ''){
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'O' && val2 == '' && val3 == 'O' && val4 == 'X' && val5 == 'X' && val6 == 'O' && val7 == 'X'){
      if (val2 == '') {
        $('#cell-2').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val4 == 'O' && val5 == 'O' && val8 == 'X'){
      if (val7 == '') {
        $('#cell-7').append("O");
      };
    }
    else if (val1 == 'O' && val2 == 'X' && val3 == 'O' && val5 == 'X' && val7 == 'X' && val8 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      };
    }
    else if (val1 == 'O' && val3 == 'X' && val5 == 'X' && val7 == 'O'){
      if (val4 == '') {
        $('#cell-4').append("O");
      }else if(val2 == ''){
        $('#cell-2').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'X' && val3 == 'O' && val4 == 'O' && val5 == 'O' && val6 == 'X') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }
    }
    else if (val1 == 'X' && val2 == 'O' && val5 == 'O' && val6 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }
    }
    else if (val1 == 'X' && val2 == 'O' && val4 == 'O' && val5 == 'O' && val6 == 'X' && val7 == 'X'){
      if (val8 == '') {
        $('#cell-8').append("O");
      };
    }
    else if (val1 == 'X' && val2 == 'O' && val3 == 'X' && val5 == 'O'){
      if (val8 == '') {
        $('#cell-8').append("O");
      }else if(val6 == ''){
        $('#cell-6').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      };
    }
    else if (val2 == 'O' && val3 == 'O' && val4 == 'X' && val5 == 'X' && val6 == 'O' && val8 == 'X'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val2 == 'X' && val3 == 'O' && val4 == 'O' && val5 == 'X' && val7 == 'X' && val8 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }
    else if (val2 == 'X' && val3 == 'X' && val4 == 'O' && val5 == 'X' && val7 == 'O' && val8 == 'O'){
      if (val1 == '') {
        $('#cell-1').append("O");
      };
    }else if(val3 == 'X' && val4  == 'O' && val5 == 'O' && val7 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val1 == '') {
        $('#cell-1').append("O");
      }
    }
    else if(val1 == 'O' && val2  == 'O' && val4 == 'X' && val7 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val1 == 'O' && val2  == 'O' && val4 == 'X' && val7 == 'X' && val5 == 'O'){
        if (val8 == '') {
          $('#cell-8').append("O");
        }
      }
    }
    else if (val1 == 'O' && val2 == 'O' && val5 == 'X' && val8 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }else if (val2 == 'O' && val5 == 'O' && val6 == 'X' && val8 == 'X') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }else if(val4 == ''){
        $('#cell-4').append("O");
      }else if(val3 == ''){
        $('#cell-3').append("O")
      }
      
    }else if(val3 == 'X' && val5  == 'O' && val8 == 'X' && val7 == 'O') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }else if(val1 == ''){
        $('#cell-1').append("O");
      }
    }else if(val5 == 'O' && val3  == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }else{
        $('#cell-7').append("O");
      }
    }
    else if (val6 == 'X' && val5 == 'O') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }else if(val8 == ''){
        $('#cell-8').append("O");
      }else if(val1 ==  ''){
        $('#cell-1').append("O");
      }
      
    }
    else if (val5 == 'X' && val7 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val5 == 'X' && val1 == 'O') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }
    }
    else if (val5 == 'X' && val6 == 'X') {
      if (val3 == '') {
        $('#cell-3').append("O");
      }
    }
    else if (val2 == 'X' && val5 == 'X') {
      if (val6 == '') {
        $('#cell-6').append("O");
      }
    }
    else if (val5 == 'X') {
      if (val8 == '') {
        $('#cell-8').append("O");
      }
    }
    else if (val5 == 'O' && val4 == 'O') {
      if(val6 == ''){
        $('#cell-6').append("O");
      }
    }
    else if (val7 == 'X') {
      if(val8 == ''){
        $('#cell-8').append("O");
      }
    }
    else if (val7 == 'X') {
      if(val8 == ''){
        $('#cell-8').append("O");
      }
    }
    else if (val9 == '') {
      if(val3 == ''){
        $('#cell-3').append("O");
      }
    }
    else if (val5 == '') {
      $('#cell-5').append("O");
    }
    else if (val3 == 'X') {
      if(val6 == ''){
        $('#cell-6').append("O");
      }
    }
    else if(val7 != 'O' && val8  == ''){
      $('#cell-8').append("O");
    }
    else if (val5 != 'O' && val5  != 'X'){
      $('#cell-5').append("O");
    }else if (val5 == 'O' && val8 == 'X') {
      if (val7 == '') {
        $('#cell-7').append("O");
      }
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-2').append("O");
    }
    else if(val2 != 'O' && val2  != 'X') {
      $('#cell-3').append("O");
    }else if(val3 != 'O' && val3  != 'X') {
      $('#cell-3').append("O");
    }else if(val4 != 'O' && val4  != 'X') {
      $('#cell-4').append("O");
    }else if(val5 != 'O' && val5  != 'X') {
      $('#cell-5').append("O");
    }else if(val6 != 'O' && val6  != 'X') {
      $('#cell-6').append("O");
    }else if(val7 != 'O' && val7  != 'X') {
      $('#cell-7').append("O");
    }else if(val8 != 'O' && val8  != 'X') {
      $('#cell-8').append("O");
    }else{
      if (val1 == '' && val2 == '' && val3 == '' && val4 == '' && val5 == '' && val6 == '' && val7 == '' && val8 == '' && val9 == '') {
        if(val1 == ''){
          $('#cell-1').append("O");
        }else if(val2 == ''){
          $('#cell-2').append("O");
        }else if(val3 == ''){
          $('#cell-3').append("O");
        }else if(val4 == ''){
          $('#cell-4').append("O");
        }else if(val5 == ''){
          $('#cell-5').append("O");
        }else if(val6 == ''){
          $('#cell-6').append("O");
        }else if(val7 == ''){
          $('#cell-7').append("O");
        }else if(val8 == ''){
          $('#cell-8').append("O");
        }else if(val9 == ''){
          $('#cell-9').append("O");
        }
      }
    }

}
  }
);



$("#cell-1 , #cell-2 , #cell-3 ,#cell-4 , #cell-5 , #cell-6 , #cell-7 , #cell-8 , #cell-9").click(function(){

  var val1 = $('#cell-1').text();
  var val2 = $('#cell-2').text();
  var val3 = $('#cell-3').text();
  var val4 = $('#cell-4').text();
  var val5 = $('#cell-5').text();
  var val6 = $('#cell-6').text();
  var val7 = $('#cell-7').text();
  var val8 = $('#cell-8').text();
  var val9 = $('#cell-9').text();
  var check = false;
  if (val1 == 'O' && val4 == 'O' && val7 == 'O') {
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val2 == 'O' && val5 == 'O' && val8 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val3 == 'O' && val6 == 'O' && val9 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val1 == 'O' && val5 == 'O' && val9 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val3 == 'O' && val5 == 'O' && val7 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val1 == 'O' && val2 == 'O' && val3 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val4 == 'O' && val5 == 'O' && val6 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val7 == 'O' && val8 == 'O' && val9 == 'O'){
    toastr.error('Computer Wins!!');
    check = true;
  }else if(val1 != '' && val2 != '' && val3 != '' && val4 != '' && val5 != '' && val6 != '' && val7 != '' && val8 != '' && val9 != '' ){
    toastr.warning("Match was Draw try again!!");
  }

  if(check){
    // Get all elements with class name "myClass"
    var num = 1;
    for (var i = 0; i < 10 ; i++) {
      var elements = document.getElementById("cell-"+num);
      elements.id = "cells";
      num++;
    }
  }
});

});
// To remove all value

  $(document).ready(function(){
    $("#resetButton").click(function(){
      $(".cell").empty();
      window.location.reload();
    });
  });
