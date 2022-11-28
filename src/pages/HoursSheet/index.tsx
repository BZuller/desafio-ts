import NavigationBar from '../../components/NavigationBar';
import Card from '../../components/Card';
import homeStyle from '../HoursSheet/styles.module.scss';
import Table from '../../components/Table';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import IUserHours from '../../interfaces/timesheet';
import TimesheetService from '../../services/timesheet.service';
import calculateTotalExtraHours, { calculateTotalMissingHours, calculateWorkedHours } from '../../functions/hoursCalc';

export default function HoursSheet(): React.ReactElement {
  const [hours, setHours] = useState<IUserHours[]>([]);

  const fetchHours = (): void => {
    TimesheetService.getHours()
      .then((response) => setHours(response))
      .catch(() => toast.error('Ocorreu um erro ao carregar as horas'));
  };

  const time = calculateTotalExtraHours(hours);

  const workedHours = calculateWorkedHours(hours);

  const isPositive = time !== '00:00';

  const missingTime = calculateTotalMissingHours(hours);

  const isNegative = missingTime !== '00:00';

  useEffect(() => {
    fetchHours();
  }, []);
  return (
    <div className={homeStyle.body}>
      <NavigationBar />
      <div className={homeStyle.container}>
        <main className={homeStyle.containerBox}>
          <h2>Boas Vindas, Bruno Muller!</h2>
          <section className={homeStyle.cards}>
            <Card title="Horas feitas no mês" body={workedHours} />
            <Card title="Previsão de horas" className={homeStyle.cardBodyExpectedHours} body="128:00/160" />
            <Card
              title="Horas Extras"
              body={time}
              className={isPositive ? `${homeStyle.cardBodyPositive}` : `${homeStyle.cardBodyZero}`}
            />
            <Card
              title="Horas Negativas"
              body={missingTime}
              className={isNegative ? `${homeStyle.cardBodyNegative}` : `${homeStyle.cardBodyZero}`}
            />
          </section>
          <h3 className={homeStyle.title}>Projeto em andamento</h3>
          <section className={homeStyle.tableHome}>
            <Table hours={hours}></Table>
          </section>
        </main>
      </div>
    </div>
  );
}
