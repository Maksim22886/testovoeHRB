import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import UserCardAdd from './UserCardAdd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { User } from './types/User';

function Users(): JSX.Element {
  const [search, setSearch] = useState('');
  const { users } = useSelector((store: RootState) => store.users);
  const dispatch = useDispatch();
  console.log(users);

  // Отображение users
  useEffect(() => {
    axios
      .get('https://reactapi.bsite.net/api/Employee')
      .then((response) =>
        dispatch({ type: 'get_users', payload: response.data }),
      );
  }, []);

  const filterUser = users.filter((user) => {
    return user.lastName.toLowerCase().includes(search.toLowerCase());
  });
  // Для выборки
  const ClickUser = (e: any) => {
    setSearch(e.target.textContent);
    setOpen(!open);
  };
  const [open, setOpen] = useState(true);

  return (
    <div>
      <UserCardAdd />
      <form className="searchForm">
        <input
          type="text"
          value={search}
          placeholder="Поиск по фамилии"
          className="searchInp"
          onChange={(event) => setSearch(event.target.value)}
        />
        <PersonSearchIcon />
        <ul className="autocomplite">
          {search && open
            ? filterUser.slice(0, 3).map((el: User) => {
                return (
                  <li className="autocomplite_item" onClick={ClickUser}>
                    {el.lastName}
                  </li>
                );
              })
            : null}
        </ul>
      </form>
      <div className="UsersList">
        {filterUser?.map((user) => (
          <UserCard key={user.employeeId} user={user} />
        ))}
      </div>
    </div>
  );
}
export default Users;
