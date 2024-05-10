## Getting Started

# Routing

- Static & dynamic routes
- Not found page
- Parallel Routes(PR)
  - Folder name starts with @ Eg: @archive, @latest in archive folder
  - Layout for parallel routes will not have children prop but have parallel routes as props
  - default.jsx in second parallel route need to be there because dynamic route inside first PR will only work if there is same dynamic route or default.jsx
- Catch-all Routes
  - [[...filter]] : folder name example
