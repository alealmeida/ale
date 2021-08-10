import HeaderJobs from './layout'

const Layout = props => (
  <div>
    <HeaderJobs />
    <div>
      {props.children}
    </div>
  </div>
)

export default Layout