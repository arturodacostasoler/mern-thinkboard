import { Route, Routes } from "react-router"

import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"

const App = () => {
    return (
        // data-theme="forest"
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<NoteDetailPage />} />
            </Routes>

        </div>
    )
}

export default App

/*Tailwind CSS IntelliSense plugin just isn't working on my VSCode
https://stackoverflow.com/questions/61343447/tailwind-css-intellisense-plugin-just-isnt-working-on-my-vscode
Its actually a pretty simple fix. open your settings.json file then add this to get the intellisense working on all files

"tailwindCSS.includeLanguages": {
    "html": "html",
    "javascript": "javascript",
    "css": "css"
},
"editor.quickSuggestions": {
    "strings": true
}*/