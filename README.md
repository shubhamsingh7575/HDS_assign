# TailorAlly Storefront (HDS_assign)

A responsive React + TypeScript + Vite project that replicates the provided Tailor store UI. The page includes a top navbar, store header with ratings, banner, tabs, collections grid, a right sidebar with rate card, contacts, social icons, and a primary appointment CTA.

## Tech Stack
- React 19 + TypeScript
- Vite (rolldown-vite)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- ESLint for linting

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure
```text
src/
  components/
    Banner.tsx          # Banner image section
    BookCTA.tsx         # Primary "Book Appointment" button
    CollectionsGrid.tsx # Cards: Winter, Western, Ethnic, Clothes
    Sidebar.tsx         # Rate card, phones, description, social icons
    StoreHeader.tsx     # Avatar, title, contact line, ratings, badge
    TabsRow.tsx         # Collections/Products/Gallery/Reviews/Location
    TopNav.tsx          # Logo (left), welcome text (center), actions (right)
  App.tsx               # Composes the above modules
  main.tsx              # App mount
  index.css             # Tailwind import and base styles
```

## Customization
- Colors: update Tailwind utility classes in components (purple accent `#7A61FF`).
- Images: card and banner images use Pexels URLs with lazy loading and fallbacks. Replace links in `Banner.tsx` and `CollectionsGrid.tsx` as needed.
- Content: edit text such as store name, phones, and description inside `StoreHeader.tsx` and `Sidebar.tsx`.
- Icons: simple inline SVGs are used for reliability (no external icon lib). Swap with your preferred icon set if needed.

## Notes
- Layout is mobile-friendly and mirrors the reference screenshot.
- Image `<img>` tags include `loading="lazy"` and `onError` fallbacks to avoid broken images.