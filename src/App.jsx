import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Notifications from './pages/notifications/Notifications';
import Quiz from './pages/quizz/Quiz';
import Timelines from './pages/Timelines/Timelines';
import EditCreate from './pages/editCreate/editCreate';
import EventsTemplate from './components/eventsTemplate/eventsTemplate';
import CreateTimeline from './pages/createTimeline/CreateTimeline'
import CreateQuiz from "./pages/createQuiz/CreateQuiz";
import "@fontsource/league-spartan";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notifications />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/timeline" element={<Timelines />} />
        <Route path="/editCreate" element={<EditCreate />} />
        <Route path="/createTimeline" element={<CreateTimeline />} /> 
        <Route path="/createQuiz" element={<CreateQuiz />} /> 

        <Route
          path="/timeline/:currentTimeline"
          element={<EventsTemplateWrapper />}
        />
      </Routes>
    </BrowserRouter>
  );
};

function EventsTemplateWrapper() {
  const { currentTimeline } = useParams(); // Obtiene el parámetro de la URL
  return <EventsTemplate currentTimeline={currentTimeline} />;
}

export default App;