export default class Task {
  constructor() {
    this.createTask();
  }
  
  static setAdd(body, content, string) {
    content.className = string;
    body.append(content);
  }
  
  static setAddTitle(contextButton, stringList, columnHeader, stringText, titleToDo, text) {
    contextButton.classList = stringList;
    contextButton.textContent = stringText;
    columnHeader.append(titleToDo);
    titleToDo.textContent = text;
    columnHeader.append(contextButton);
  }

  createTask() {
    const taskBoard = document.querySelector('.task-board');

    const toDoColumn = document.createElement('section');
	Task.setAdd(taskBoard, toDoColumn, 'to-do column dropable');

    const inProgressColumn = document.createElement('section');
	Task.setAdd(taskBoard, inProgressColumn, 'in-progress column dropable');

    const doneColumn = document.createElement('section');
	Task.setAdd(taskBoard, doneColumn, 'done column dropable');

    const columnHeaderToDo = document.createElement('header');
    toDoColumn.append(columnHeaderToDo);

    const columnHeaderInProgress = document.createElement('header');
    inProgressColumn.append(columnHeaderInProgress);

    const columnHeaderDone = document.createElement('header');
    doneColumn.append(columnHeaderDone);

    const columnFooterToDo = document.createElement('footer');
	Task.setAdd(toDoColumn, columnFooterToDo, 'footer to-do');
	
    const addCardToDo = document.createElement('p');
	Task.setAdd(columnFooterToDo, addCardToDo, 'add-card-button');
    addCardToDo.textContent = '✙ Add another card';

    const columnFooterinProgress = document.createElement('footer');
	Task.setAdd(inProgressColumn, columnFooterinProgress, 'footer in-progess');
	
    const addCardInProgress = document.createElement('p');
	Task.setAdd(columnFooterinProgress, addCardInProgress, 'add-card-button');
    addCardInProgress.textContent = '✙ Add another card';

    const columnFooterDone = document.createElement('footer');
	Task.setAdd(doneColumn, columnFooterDone, 'footer done');
	
    const addCardDone = document.createElement('p');
	Task.setAdd(columnFooterDone, addCardDone, 'add-card-button');
    addCardDone.textContent = '✙ Add another card';

    const titleToDo = document.createElement('p');
    const contextButtonToDo = document.createElement('div');
	Task.setAddTitle(contextButtonToDo, 'column-header-button', columnHeaderToDo, '\u22EF', titleToDo, 'todo');

    const titleInProgress = document.createElement('p');
    const contextButtonInProgress = document.createElement('div');
	Task.setAddTitle(contextButtonInProgress, 'column-header-button', columnHeaderInProgress, '\u22EF', titleInProgress, 'in progress');


    const titleDone = document.createElement('p');
    const contextButtonDone = document.createElement('div');
	Task.setAddTitle(contextButtonDone, 'column-header-button', columnHeaderDone, '\u22EF', titleDone, 'done');
  }
}
