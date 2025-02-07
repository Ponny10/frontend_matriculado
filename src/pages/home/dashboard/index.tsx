import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { StudentsList } from './studentsList';
import { actionsReducer as actions } from 'reducers';

export const Dashboard = () => {

  const { usuario } = useSelector((state: _RouteState) => state.auth.login.user);
  const { students } = useSelector((state: _RouteState) => state.home.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.home.dashboard.getStudents(usuario));
    dispatch(actions.home.dashboard.resetStudent());
  }, [dispatch, usuario]);

  return (
    <div>
      {
        students ? <StudentsList students={students}  /> : <p>No hay data</p>
      }
    </div>
  )
}

export default Dashboard;
