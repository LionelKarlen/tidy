# Ideals

- Should be able to register an Item
  - each item has:
    - a unique id, that can be used to generate a qr code
    - a name to identify it
    - an optional description
    - an optional location
    - an optional designation
    - an optional list of categories
    - a derived status
      - which explain whether the Item is:
        - "incomplete" (not all values are filled in)
        - "misplaced" (all values are filled in, but location != designation)
        - "complete" (all values are filled in and location == designation)
- Should be able to register a location
  - each location has:
    - a unique id, that can be used to generate a qr code
    - a name to identify it
    - an optional description
- Should be able to display all Items
  - with a toggleable display option {maybe remembered on the backend}
    - gallery (cards)
    - list (inline image)
    - compact list (doesn't show inline image)
  - with a search function for the name
  - with a filter function for:
    - status
    - category
    - location
    - designation (I'm not sure how this is going to work, since there are
      potentially many entries {maybe something like the twitch.tv radio button
      dropdown?})
- Should be able to display a specific Item
  - with all fields
  - with an option to generate a qr code
  - with an option to edit
  - with an option to delete
- Should be able to display all locations/categories
  - with an option to edit
  - with an option to delete

- There will be no mobile app, but the qr codes will simply link to the right
  url, making them accessible from mobile

# Roadmap

## 1.0.0

### 0.0.0

- [x] Set up project
- [x] Add precommit hooks
- [x] Set up github rules (no pushing to main)
- [x] Add tailwind && daisyui (including themes)
- [x] Add pocketbase
- [x] Add solid-router
- [x] Add solid-icons
- [x] Merge

### 0.1.0

- [x] Bump version
- [x] Pb auth
- [x] Login page
- [x] Layout + Navigation
- [x] Merge

### 0.2.0

- [ ] Bump version
- [ ] Add Item Creation/Edit form
- [ ] Add Item list page
- [ ] Add Item deletion (modal!!)
- [ ] Add Item details page
- [ ] Merge

### 0.3.0

- [ ] Bump version
- [ ] Add location/category Creation/Update form
- [ ] Add location/category list page
- [ ] Add location/category deletion (modal!!)
- [ ] Merge

### 0.4.0

- [ ] Bump version
- [ ] Add Item list display toggle
- [ ] Add Item filter
- [ ] Merge

### 0.5.0

- [ ] Bump version
- [ ] Add qr code generation & display
- [ ] Add qr code download option
- [ ] Merge

### 0.6.0

- [ ] Bump version
- [ ] Prepare for deployment strategy
- [ ] Docker files
- [ ] Merge

# Technical Specifications

## Frontend

- solidjs
- tailwindcss
- daisyui

## Backend

- Pocketbase

## Deployment

- docker-compose
- releases on github

# Visual Specifications

## Logo

Pure text logo using the
"[Caveat](https://fonts.google.com/specimen/Caveat?preview=tidy)" font in
regular 400.

## Icons

[Feather Icons](https://feathericons.com), using the
[solid-icons](https://github.com/x64Bits/solid-icons) package.

## Themes

### Light

```css
@plugin "daisyui/theme" {
  name: "tidy-light";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(97% 0 0);
  --color-base-300: oklch(94% 0 0);
  --color-base-content: oklch(0% 0 0);
  --color-primary: #90b494;
  --color-primary-content: oklch(0% 0 0);
  --color-secondary: #718f94;
  --color-secondary-content: oklch(0% 0 0);
  --color-accent: #bfc8ad;
  --color-accent-content: oklch(0% 0 0);
  --color-neutral: #262626;
  --color-neutral-content: oklch(100% 0 0);
  --color-info: #3993dd;
  --color-info-content: oklch(16% 0 206);
  --color-success: #86cd82;
  --color-success-content: oklch(18% 0 165);
  --color-warning: #ffd25a;
  --color-warning-content: oklch(18% 0 80);
  --color-error: #e26d5c;
  --color-error-content: oklch(16% 0 30);
  --radius-selector: 0.25rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.28125rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
```

## Dark

```css
@plugin "daisyui/theme" {
  name: "tidy-dark";
  default: false;
  prefersdark: true;
  color-scheme: "light";
  --color-base-100: #353535;
  --color-base-200: #2b2b2b;
  --color-base-300: #212121;
  --color-base-content: oklch(100% 0 0);
  --color-primary: #90b494;
  --color-primary-content: oklch(0% 0 0);
  --color-secondary: #718f94;
  --color-secondary-content: oklch(0% 0 0);
  --color-accent: #bfc8ad;
  --color-accent-content: oklch(0% 0 0);
  --color-neutral: #262626;
  --color-neutral-content: oklch(100% 0 0);
  --color-info: #3993dd;
  --color-info-content: oklch(16% 0 206);
  --color-success: #86cd82;
  --color-success-content: oklch(18% 0 165);
  --color-warning: #ffd25a;
  --color-warning-content: oklch(18% 0 80);
  --color-error: #e26d5c;
  --color-error-content: oklch(16% 0 30);
  --radius-selector: 0.25rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.28125rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
```
