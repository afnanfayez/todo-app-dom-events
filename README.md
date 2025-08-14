# 📝 ToDo App – DOM Events  
GSG Code2Career Training - Frontend Development

---

## 🎯 Project Goals
- Master DOM manipulation using JavaScript.
- Understand different event types and how to handle them.
- Add, update, and delete tasks without page reload.
- Keep the code clean, organized, and easy to read.

---

## 📌 App Requirements

### 1. HTML Structure
- A title for the app (e.g., "My To-Do List").
- An input field to type a task.
- A button to add the task.
- A container (`<ul>` or `<div>`) to display tasks.
- Each task should include:
  - Task text
  - A "Complete" checkbox
  - A "Delete" button

---

### 2. JavaScript Features
- **Add Task:**
  - Triggered by clicking the Add button or pressing Enter.
  - Ignore empty input values.
  - Clear the input after adding the task.
  
- **Mark as Complete:**
  - Clicking the checkbox should visually mark the task (e.g., strikethrough).
  
- **Delete Task:**
  - Clicking the delete button removes the task from the list.
  
- **Event Handling:**
  - Use `addEventListener` only (no inline event attributes).
  - Implement:
    - Click events
    - Keyboard events (Enter)
    - Event delegation for list actions

---

### 3. DOM Manipulation
- Dynamically create, append, and remove elements.
- Use `classList.toggle` for styling changes.
- Avoid direct HTML string concatenation; use `createElement` instead.

---

### 4. Styling (CSS)
- Completed tasks should have a distinct style (e.g., grey text with a line-through).
- Hover effects for buttons.
- Minimal, clean layout.

---

## 📚 Key Concepts
- DOM selection (`getElementById`, `querySelector`, etc.)
- Creating and appending elements
- Removing elements
- Event bubbling and delegation
- Keyboard event handling
- Using `classList` for style updates

---

## 📦 Deliverables
- `index.html`
- `style.css`
- `script.js`
