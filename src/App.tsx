import './App.scss';
import './styles/index.scss';
import DashboardCard from './components/DashboardCard/DashboardCard';

function App() {
  return (
    <div>
      <div />
      <div className='dashboard-card-container'>
        <DashboardCard title='Toegewezen' icon='' />
        <DashboardCard title='Uitgevoerd' icon='' />
        <DashboardCard title='Documentatie' icon='' />
        <DashboardCard title='Instellingen' icon='' />
      </div>
      <div />
    </div>
  );
}

export default App;
