## Event management project

- Table which displays and helps to manage calling users. Helps administrator to add new, edit or delete users.

### Technologies Used

- HTML/CSS
  - Styled Components
- TypeScript
- React
- Node.js
  - Express.js
- MongoDB

### Installation

- Both server and client folders should be running simultaneously for the complete functionality of the project.

- server:
  - npm i
  - npm run build
  - npm run dev

Needs .env file in server folder.

- client:
  - npm i
  - npm run dev

### Features

- "Add new" user button (when clicked):
  - Displays modal which displays:
    - labels and inputs and lets write in it.
    - "Add new" button, which adds new user to the table and invoke new modal, which displays that user added successufully.
- Update user button (when clicked):
  - Lets edit already existing user values by making values as inputs.
  - Displays two buttons - save and cancel.
    - "Save" button saves edited user values and goes back to displaying Update and Delete buttons.
      --- "Cancel" button cancels editing and goes back to displaying Update and Delete buttons.
- Delete user button (when clicked):
  - Displays two buttons - yes and cancel.
    - "Yes" button deletes existing user with all its values and goes back to displaying Update and Delete buttons.
    - "Cancel" button goes back to displaying Update and Delete buttons.
- Pagination:
  - Displays page buttons depending on the number of data and items per page. When there is a lot pages, it displays three surrounding page buttons based on which is clicked: first page, two nearest before and two after, and last page button.
- Responsive Web Design.
