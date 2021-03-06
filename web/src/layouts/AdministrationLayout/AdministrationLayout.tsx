import { Link, routes } from '@redwoodjs/router'

// type AdministrationLayoutProps = {
//   children?: React.ReactNode
// }

// const AdministrationLayout = ({ children }: AdministrationLayoutProps) => {
const AdministrationLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>TSQ Admin</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.courses()}>Kurse</Link>
            </li>
            <li>
              <Link to={routes.members()}>Mitglieder</Link>
            </li>
            <li>
              <Link to={routes.courselist()}>Kurslisten</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdministrationLayout
