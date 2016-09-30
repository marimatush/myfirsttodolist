var todoList = [];
const readline = require('readline');
var count = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addLine(todoArr,id,text) {
  todoArr.push({lineId: id, line: text, isDone: false});
  //return {
  //	lineId: id,
  //	line: text,
  //	isDone: false
  //};
};

function markDone(todoArr,lineId) {
  var lineFound = false;
  if (!isNaN(lineId)) {
    for (var i = 0; i < todoArr.length; i++) {
      if (todoArr[i].lineId == lineId) {
        todoArr[i].isDone = true;
        lineFound = true;
        return (true);
      };
    };
  };

  if (!lineFound) {
    return (false);
  };
  //todoLine.isDone = true;
};

function deleteLine(todoArr,lineId) {
  var lineFound = false;
  if (!isNaN(lineId)) {
    for (var i = 0; i < todoArr.length; i++) {
      if (todoArr[i].lineId == lineId) {
        todoArr.splice(todoArr.indexOf(todoArr[i]), 1);
        lineFound = true;
        return (true);
      };
    };
  };
  if (!lineFound) {
    return (false);
  };
  //todoList.splice(lineId, 1);
};


function printList(todoArr) {
  var text = '';
  for (var i = 0; i < todoArr.length; i++) {
    text += printLine(todoArr[i]);
  };

  return (text);
};

function printLine(todoLine) {
  var status;
  if (todoLine.isDone) {
    status = '*done*';
  } else {
    status = 'not done';
  };
  return ('todo' + ' ' + todoLine.lineId + ':' + ' ' + todoLine.line + ' - ' + status + '\n');
};

function consoleInput() {
  rl.question('Please select action: 1 - add new line, 2 - mark line as done, 3 - delete line,\
 4 - show list, exit - to exit:' + ' ', (answer) => {
  	switch (answer.trim().toLowerCase()) {
  		case 'exit':
        rl.close();
  		  break;
  		case '1': // add new line to the list
  		  rl.question('Enter line:' + ' ', (answer) => {
          //todoList.push(addLine(++count, answer));
          addLine(todoList, ++count, answer); 
  		    console.log('Line' + ' \'' + answer + '\' ' + 'added to the list!' + '\n');
  		    consoleInput();
		    });
  		  break;
  		case '2': // mark line as done
        rl.question('Enter line id to mark as done:' + ' ', (answer) => {
          /*var lineFound = false;
	        if (!isNaN(answer)) {
            for (var i = 0; i < todoList.length; i++) {
              if (todoList[i].lineId == answer) {
                markDone(todoList[i]);
                lineFound = true;
                console.log('Line' + ' ' + answer + ' ' + 'marked as Done!' + '\n');
              };
            };
          };
          if (!lineFound) {
            console.log('Sorry, cannot fine line id' + ' ' + answer + ' ' + 'in the List, try again..' + '\n');
          };*/
          if (markDone(todoList, answer)) {
            console.log('Line' + ' ' + answer + ' ' + 'marked as Done!' + '\n');
          } else {
            console.log('Sorry, cannot fine line id' + ' ' + answer + ' ' + 'in the List, try again..' + '\n');
          };
	        consoleInput();
		    });
  		  break;
      case '3': // delete line from the list
        rl.question('Enter line id to delete:' + ' ', (answer) => {
          /*var lineFound = false;
          if (!isNaN(answer)) {
            for (var i = 0; i < todoList.length; i++) {
              if (todoList[i].lineId == answer) {
                deleteLine(todoList.indexOf(todoList[i]));
                lineFound = true;
                console.log('Line' + ' ' + answer + ' ' + 'was deleted!' + '\n');
              };
            };
          };
          if (!lineFound) {
            console.log('Sorry, cannot fine line No' + ' ' + answer + ' ' + 'in the List, try again..' + '\n');
          };*/
          if (deleteLine(todoList, answer)) {
            console.log('Line' + ' ' + answer + ' ' + 'was deleted!' + '\n');
          } else {
            console.log('Sorry, cannot fine line id' + ' ' + answer + ' ' + 'in the List, try again..' + '\n');
          };
          consoleInput();
        });
        break;
      case '4': // show list
        /*for (var i = 0; i < todoList.length; i++) {
          printLine(todoList[i]);
        };*/
        console.log(printList(todoList));
        consoleInput();
        break;
  		default:
  		  console.log('Sorry,' + ' ' + answer + ' ' + 'not a valid option.');
  		  consoleInput();
  	};
  });
};

// Go go go!
consoleInput();