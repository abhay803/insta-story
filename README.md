# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Running the Application

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

3. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.

4. Start the e2e test server:

    ```bash
    npm run cypress:open
    ```

## Proof of Concept: Instagram Story Feature

This project includes a **proof of concept (POC) for an Instagram-like story feature** with the following capabilities:

- **Automatic Story Progression:** Each story advances to the next automatically after 5 seconds.
- **User Controls:** Users can tap to go to the previous or next story.
- **Mobile-Only Support:** The feature is optimized for mobile devices and may not function as intended on desktop browsers.

### Key Features

- **Touch Interactions:** Tap left/right areas to navigate between stories.

### Usage

1. Open the app on a mobile device or enable mobile emulation in your browser.
2. Interact with the story component to experience the automatic and manual navigation.

### Implementation Notes

- Built with React functional components and hooks.
- Uses timers (`setInterval`) for automatic progression.
- Handles touch events for navigation.

### Potential Improvements

- **Progress Bar:** Add a visual progress bar at the top of each story to indicate time remaining before advancing to the next story.
- **Seen Story Indicator:** Update the UI to visually distinguish stories that have already been viewed via automatically advance.
- **Loader Icon:** Display a loader or spinner while all stories are being fetched and loaded in the preview.
- **Enhanced Animations:** Smooth transitions and animations when moving between stories.
- **Pause on Hold:** Allow users to pause story progression by holding down on the story.