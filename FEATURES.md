# Sky Music - Feature Documentation

## Core Features

### 1. Top 100 Albums Display

- Fetches real-time data from iTunes RSS feed
- Displays album art, title, and artist information
- Responsive grid layout that adapts to screen size

### 2. Favorites System

Users can mark albums as favorites with persistent storage:

- Click the "❤ Favorite" button to add to favorites
- Data persists in localStorage across sessions
- Toggle to show only favorited albums
- Visual feedback with filled star icon

### 3. Infinite Scroll

Optimized loading experience:

- Initially loads 12 albums
- Automatically loads 12 more as user scrolls
- Intersection Observer API for performance
- Loading skeletons for better UX

### 4. Search & Filter

- Real-time search across album titles and artists
- Case-insensitive matching
- Combines with favorites filter
- Updates results instantly

### 5. External Links

- Click any album card to open iTunes store page
- Opens in new tab with security attributes
- Keyboard accessible (Enter/Space)

## Technical Highlights

- **State Management**: Redux Toolkit with TypeScript
- **Styling**: Styled Components with modern design tokens
- **Performance**: Image optimization with Next.js Image
- **Accessibility**: ARIA labels, keyboard navigation
- **Responsive**: Mobile-first design approach
