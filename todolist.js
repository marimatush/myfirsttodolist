var list = [];
var count = 0;

function addLine(text) {
  list.push({lineId: ++count, line: text, isDone: false});
};

function markDone(id) {
  var lineFound = false;
  if (!isNaN(id)) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].lineId == id) {
        list[i].isDone = true;
        lineFound = true;
        return (true);
      };
    };
  };

  if (!lineFound) {
    return (false);
  };
};

function deleteLine(id) {
  var lineFound = false;
  if (!isNaN(id)) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].lineId == id) {
        list.splice(list.indexOf(list[i]), 1);
        lineFound = true;
        return (true);
      };
    };
  };
  if (!lineFound) {
    return (false);
  };
};

//var all = todolist.getall

function printList() {
  var text = '';
  for (var i = 0; i < list.length; i++) {
    text += printLine(list[i]);
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

module.exports = {
  add: addLine,
  delete: deleteLine,
  complete: markDone,
  getAll: printList,
};