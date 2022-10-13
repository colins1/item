export default class Content {
  constructor() {
    this.createContent();
  }
  
  static setAdd(body, content, string) {
    content.className = string;
    body.append(content);
  }
  
  createContent() {
    const body = document.querySelector('body');
	const content = document.createElement('div');
	Content.setAdd(body, content, 'content-board');
	
    const taskBoard = document.createElement('main');
	Content.setAdd(content, taskBoard, 'task-board');
  }
}
