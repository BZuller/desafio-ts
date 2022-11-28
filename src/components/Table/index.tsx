import IUserHours from '../../interfaces/timesheet';
import tableStyle from './styles.module.scss';

type props = {
  hours: IUserHours[];
};
export default function Table({ hours }: props): React.ReactElement {
  return (
    <table className={tableStyle.table}>
      <thead className={tableStyle.tableHeader}>
        <tr>
          <th className={tableStyle.headerText1}>Projeto</th>
          <th className={tableStyle.headerText2}>Atividades</th>
          <th className={tableStyle.headerText3}>Início</th>
          <th className={tableStyle.headerText4}>Horas Projeto</th>
          <th className={tableStyle.headerText5}>Horas apropriadas</th>
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr className={tableStyle.tableRow} key={hour.id}>
            <td className={tableStyle.tableData}>{hour.projeto}</td>
            <td className={tableStyle.tableData}>{hour.atividades}</td>
            <td className={tableStyle.tableData}>{hour.inicio}</td>
            <td className={tableStyle.tableData}>{(hour.horas_projeto / 60).toFixed(0)} horas</td>
            <td className={tableStyle.tableData}>{(hour.horas_apropriadas / 60).toFixed(0)} horas</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
