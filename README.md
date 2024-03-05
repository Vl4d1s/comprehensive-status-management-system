# Home Exercise - metisdata.io
## Comprehensive Status Management System


![CleanShot 2024-03-05 at 11 59 45](https://github.com/Vl4d1s/comprehensive-status-management-system/assets/42187212/9067ccbd-9d2c-4d3a-a2b8-2bea75c6d50a)

## Decisions

- Implementation: I decided to implement it as simply as possible, straightforward. Of course, if the application were larger and the amount of data was greater, I would consider using optimizations such as lazy-loading, pagination, memoization, etc.

- Stack:
  - Node.js/Express/TypeScript for the backend. I am aware that you are working with Nest; it's a small gap that I will fill in. It's exactly from the next Udemy course that I took.
  - React/TypeScript on the client-side generated with Vite.
  - Data fetching: React Query.
  - Design System: Mui. Although I know how to work with styled components, Tailwind, and more.
  - Postgres service: superbase.

- Monorepo: I used PNPM workspaces with Turbo template. Please make sure it is installed on your machine. I am proficient in working with both Yarn and npm as well.

## API Endpoints

### GET /employees

- **Description**: Retrieve a list of all employees.
- **Response**: A list of employee records on success; otherwise, an error message.

### GET /employees/:id

- **Description**: Retrieve a single employee record by its unique ID.
- **Parameters**: 
  - `id` - The unique identifier of the employee.
- **Response**: The employee record on success; otherwise, an error message.

### POST /employees

- **Description**: Create a new employee record.
- **Body**: A JSON object containing the new employee's details.
- **Response**: The created employee record on success; otherwise, an error message.

### PUT /employees/:id

- **Description**: Update an existing employee record by its unique ID.
- **Parameters**: 
  - `id` - The unique identifier of the employee to update.
- **Body**: A JSON object with the employee's updated details.
- **Response**: The updated employee record on success; otherwise, an error message.

### PATCH /employees/:id/status

- **Description**: Update the status of an existing employee by its unique ID.
- **Parameters**: 
  - `id` - The unique identifier of the employee whose status is to be updated.
- **Body**: A JSON object containing the new status of the employee.
- **Response**: The updated employee record on success; otherwise, an error message.

### DELETE /employees/:id

- **Description**: Delete an employee record by its unique ID.
- **Parameters**: 
  - `id` - The unique identifier of the employee to be deleted.
- **Response**: No content on success; otherwise, an error message.

## DB Design
![CleanShot 2024-03-05 at 12 28 07@2x](https://github.com/Vl4d1s/comprehensive-status-management-system/assets/42187212/1cbcc48b-b1f3-4fe8-9414-2b63f2bbf241)


# IMPORTANT!

I disabled RLS in Superbase and left the credentials hardcoded in the code. I am fully aware that this is not secure, it is only for your convenience during execution.

Let me know when you finish reviewing, and I will completely delete the table.
