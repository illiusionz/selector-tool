 $(function () {

   //Line Number Count
    for (i = 0; i < 80; i++) {
       $('.line-list').append('<li>' + [i] + '</li>')
       //text += "The number is " + i + "<br>";
    }

    var colorCoded = true;
    var IdSelected = false;

    function convertArraysToResults() {
       var fileNameArray = [];
       var fullFileNameArray = [];
       var nameList = $(".startTextArea").val();

       if ($('#idChoice').is(':checked')) {
          console.log("Convert to IDS");
          IdSelected = true;
       } else {
          console.log("Convert to CLASSES");
          IdSelected = false;
       }

       //Checks for extension and strips it. (.jpg, .png, etc)
       $.each(nameList.split(/\n/), function (i, name) {
          var fileName = name.replace(/\.[^/.]+$/, "");
          // empty string check
          if (name != "") {
             fileNameArray.push(fileName);
          }
       });

       //Create Array to make full file name list (includes 
       $.each(nameList.split(/\n/), function (i, name) {
          var fullFileName = name;
          fullFileNameArray.push(' &nbsp; \'' + fullFileName + '\'');

       });

       console.log('fileNameArray: ' + fileNameArray);
       console.log('fullFileNameArray: ' + fullFileNameArray);

       //Creates Selector Statement in Array
       let newJsArray = fileNameArray.map(function (fileName) {
          const prefix1 = ' = ';
          const prefix2 = '$';
          const prefix3 = '(';
          const prefix4 = '"div[id^=\'';
          const prefix4b = '\'.';
          const prefix5 = '\']"';
          const prefix5b = '\''; //use backslah to include single and double quotes
          const prefix6 = ');';

          if (IdSelected) {
             var result = fileName + prefix1.fontcolor('#c3bc25') + prefix2.fontcolor('#b1778d') + prefix3 +
                prefix4.fontcolor('#b4c978') + fileName.fontcolor('#b4c978') + prefix5.fontcolor('#b4c978') + prefix6 + '</br>';
          } else {
             var result = fileName + prefix1.fontcolor('#c3bc25') + prefix2.fontcolor('#b1778d') + prefix3 +
                prefix4b.fontcolor('#b4c978') + fileName.fontcolor('#b4c978') + prefix5b.fontcolor('#b4c978') + prefix6 + '</br>';
          }

          return result;
       });

       let newCssArray = fileNameArray.map(function (fileName) {
          const prefix0 = 'div';
          const prefix1 = '[';
          const prefix2 = 'id^';
          const prefix3 = '=';
          const prefix4 = '],';
          const prefix4b = '.';
          const prefix4c = ',';

          if (IdSelected) {
             var result = prefix0 + prefix1 + prefix2.fontcolor('#80aac6') + prefix3 + fileName.fontcolor('#b4c978') + prefix4 + '</br>';
          } else {
             var result = prefix4b + fileName + prefix4c + '</br>';
          }
          return result;
       });



       //Convert it to a string and write out on HTML CSS Selectors
       $('.cssResults span').html(newCssArray.join(' ').toString());

       //Convert it to a string and write out on HTML JS Selectors
       $('.jsResults span').html(newJsArray.join(' ').toString());

       //Convert it to a string and write out on Preload list JS Selectors
       $('.preloadResults span').html('ad.' + 'preload'.fontcolor('#b1778d') + '(' + '[<br>'.fontcolor('#c3bc25') + fullFileNameArray.join(', <br>').toString() + '<br>]'.fontcolor('#c3bc25') + ');<br>');

    };


    $('.convert-button').click(function () {
       convertArraysToResults();
    });

    $('.js-copy-button').click(function () {
       copyDivToClipboard('jsResults');
    });

    $('.css-copy-button').click(function () {
       copyDivToClipboard('cssResults');
    });

    $('.preload-copy-button').click(function () {
       copyDivToClipboard('preloadResults');
    });



    function copyDivToClipboard(divId) {
       var range = document.getSelection().getRangeAt(0);
       range.selectNode(document.getElementById(divId));
       window.getSelection();
       document.execCommand("copy")
    }


 }); //end