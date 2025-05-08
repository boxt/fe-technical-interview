# 💻 The app

A one-page example app that lists 9 items. These items can be filtered by title using the search bar at the top of the page.

> ⚠️ IMPORTANT: Please do not remove any references of `@ts-nocheck`, these are added on purpose!

# 🏃‍♀️ Running the app

- Use Node.js `20.11.0`
- Run `npm install`
- Run `npm run dev`
- For test, run `npm run test`

# 📚 Structure

- `/pages/index.ts` - homepage
- `/components` - components folder, includes:
  - `Search` component
  - `Results` component
  - `Item` component (use within the `Results` component)
- `/lib` - contains a mockApiRequest helper function and some seed data (fine to be ignored for the purpose of this exercise!)
- `middleware.ts` - example middleware file (more about this below). Related files for the middleware exercise:
  - `/api/feature-flags` - endpoint that call the mockApiRequest function
  - `/pages/example/index.ts` - example page used in the middleware file

# ✅ To do:

Identify and fix:

1. The app is not returning the list of items - why is that?

2. The search is broken - how can it be fixed? (Scenario: Search for `#2` → Results are correctly filtered → Clear the search → Results are not reset)

3. What other issues can you spot in the following files?

- `src/pages/index.tsx`
- `src/components/Results.tsx`
- `src/components/Item.tsx`

4. How can we improve the example unit test?

5. What other improvements would you recommend to keep the code clean and scalable?

6. Bonus task: Open up the `src/middleware.ts` file and try to find the answer to the following two questions:

- When I visit the `/example` page, I always end up on `/404`. Why is that?
- When I land on the `/example` page and the `ab-test-image` flag is true, I still don't see the correct image. Why is that?
