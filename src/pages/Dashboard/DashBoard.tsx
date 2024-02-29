import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import TableTwo from '../../components/Tables/TableTwo';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
