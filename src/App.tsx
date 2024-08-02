import "./App.scss";
import "./styles/index.scss";
import DashboardCard from "./components/DashboardCard/DashboardCard";
import { Bookmark, CheckCircle, Cog, Grid } from "./Icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="dashboard-card-container">
        <DashboardCard title="Toegewezen" icon={Bookmark} />
        <DashboardCard title="Uitgevoerd" icon={CheckCircle} />
        <DashboardCard title="Documentatie" icon={Grid} />
        <DashboardCard title="Instellingen" icon={Cog} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
