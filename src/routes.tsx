import { Navigate } from 'react-router-dom';
// files
// import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
// import Calendar from './pages/Calendar';
// import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/DashBoard';
import Profile from './pages/Profile';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
// const routes = () => {
//   // const { pathname } = useLocation();

//   // useEffect(() => {
//   //   window.scrollTo(0, 0);
//   // }, [pathname]);

//   return (
//     // <Routes>
//     //   <Route
//     //     index
//     //     element={
//     //       <>
//     //         <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <ECommerce />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/calendar"
//     //     element={
//     //       <>
//     //         <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Calendar />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/profile"
//     //     element={
//     //       <>
//     //         <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Profile />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/forms/form-elements"
//     //     element={
//     //       <>
//     //         <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <FormElements />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/forms/form-layout"
//     //     element={
//     //       <>
//     //         <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <FormLayout />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/tables"
//     //     element={
//     //       <>
//     //         <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Tables />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/settings"
//     //     element={
//     //       <>
//     //         <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Settings />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/chart"
//     //     element={
//     //       <>
//     //         <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Chart />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/ui/alerts"
//     //     element={
//     //       <>
//     //         <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Alerts />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/ui/buttons"
//     //     element={
//     //       <>
//     //         <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <Buttons />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/auth/signin"
//     //     element={
//     //       <>
//     //         <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <SignIn />
//     //       </>
//     //     }
//     //   />
//     //   <Route
//     //     path="/auth/signup"
//     //     element={
//     //       <>
//     //         <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//     //         <SignUp />
//     //       </>
//     //     }
//     //   />
//     // </Routes>
//   );
// };

const routes = () => [
  { path: '*', element: <Navigate to="/" /> },

  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'users',
    element: <Dashboard />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
];

export default routes;
