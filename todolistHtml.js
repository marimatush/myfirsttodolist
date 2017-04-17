//var list = [];
//var count = 0;

function newList() {
  var list = [];
  return list;
};

function addLine(list, text) {
  list.push({lineId: nextId(list), line: text, isDone: false});
};

function toggleDone(list, id) {
  if (!isNaN(id)) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].lineId == id) {
        list[i].isDone = !list[i].isDone;
      };
    };
  };
};

function deleteLine(list, id) {
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

function nextId(list) {
  var count = 0;
  for (var i = 0; i < list.length; i ++) {
    if (list[i].lineId > count) {
      count = list[i].lineId;
    };
  };

  return ++count;
};