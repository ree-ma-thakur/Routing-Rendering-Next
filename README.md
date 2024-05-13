# Routing

- Static & dynamic routes
- Not found page
- Parallel Routes(PR)
  - Folder name starts with @ Eg: @archive, @latest in archive folder
  - Layout for parallel routes will not have children prop but have parallel routes as props
  - default.jsx in second parallel route need to be there because dynamic route inside first PR will only work if there is same dynamic route or default.jsx
- Catch-all Routes
  - [[...filter]] : folder name example
- Error file
  - error.jsx : Must be a client component because errors can also be possible on client not only on server; It can be used with 'use client' only

# React Server Components(RSC) vs Client Components

- RSC: Only rendered on the server, by defualt all components are RSC
- CC: Pre-rendered on server but then also potentially on the client, can be achieved using 'use client'; Eg: error.jsx, usePathname, useRouter, useState, etc

# Intercepting Route

- It is an Alternative route which sometimes get activated depending on whether we are navigating it through internal link within the page or we are coming from external link.
- It intercepts the internal navigation request.
- We can mae IR using (path-to-interceoter-route)same-name-as-of-intercepter-route Eg: (.)image
- Interceptor folder will be available in layouts also, as in @modal

# Route Groups

- Every route group has their own layout
