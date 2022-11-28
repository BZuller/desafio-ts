import navStyle from './styles.module.scss';

export default function NavigationBar(): React.ReactElement {
  return (
    <nav className={navStyle.navBar}>
      <section className={navStyle.userNavSectionLeft}>
        <img src="./img/logo.svg" alt="Timesheet logo" /> Planilha{' '}
      </section>
      <section className={navStyle.userNavSectionRight}>
        Olá,<div className={navStyle.userName}>Bruno Muller.</div>
        <div className={navStyle.version}>Versão 10.0.0</div>
        <img src="./img/exit.svg" alt="Exit icon" />
      </section>
    </nav>
  );
}
