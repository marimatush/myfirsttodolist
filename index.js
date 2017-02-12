var todoList = [];
const readline = require('readline');

const todo = require('./todolist');

// var id = todoList.add('buy milk');
// todoList.remove(id);
// todoList.markDone(id);
// var all = todoList.getAll();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function consoleInput() {
  rl.question('Please select action: 1 - add new line, 2 - mark line as done, 3 - delete line,\
 4 - show list, exit - to exit:' + ' ', (answer) => {
  	switch (answer.trim().toLowerCase()) {
  		case 'exit':
        rl.close();
  		  break;
  		case '1': // add new line to the list
  		  rl.question('Enter line:' + ' ', (answer) => {
          //addLine(todoList, ++count, answer); 
  		    todo.add(answer);
          console.log('Line' + ' \'' + answer + '\' ' + 'added to the list!' + '\n');
  		    consoleInput();
		    });
  		  break;
  		case '2': // mark line as done
        rl.question('Enter line id to mark as done:' + ' ', (answer) => {
          //if (markDone(todoList, answer)) {
          if (todo.complete(answer)) {
            console.log('Line' + ' ' + answer + ' ' + 'marked as Done!' + '\n');
          } else {
            console.log('Sorry, cannot fine line id' + ' ' + answer + ' ' + 'in the List, try again..' + '\n');
          };
	        consoleInput();
		    });
  		  break;
      case '3': // delete line from the list
        rl.question('Enter line id to delete:' + ' ', (answer) => {
          //if (deleteLine(todoList, answer)) {
          if (todo.delete(answer)) {
            console.log('Line' + ' ' + answer + ' ' + 'was deleted!' + '\n');
          } else {
            console.log('Sorry, cannot fine line id' + ' ' + answer + ' ' + 'in the List, try again..' + '\n');
          };
          consoleInput();
        });
        break;
      case '4': // show list
        //console.log(printList(todoList));
        console.log(todo.getAll());
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