import Icon from '@mdi/react';
import './DashboardCard.scss';

const DashboardCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className='dashboard-card'>
      <Icon path={icon} />
      <p className='dashboard-card-title'>{title}</p>
    </div>
  );
};

export default DashboardCard;
