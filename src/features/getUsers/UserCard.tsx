import { User } from './types/User';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

function UserCard({ user }: { user: User }): JSX.Element {
  const [qwe, setQwe] = useState(true);
  const [employeeId, setEmployeeId] = useState<number>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [height, setHeight] = useState(0);

  const dispatch = useDispatch();

  // Функция на удаление
  const del = (userId: number) => {
    axios
      .delete(`https://reactapi.bsite.net/api/Employee/${userId}`, {
        method: 'delete',
      })
      .then((res) => console.log(res));
    dispatch({ type: 'remove_user', payload: Number(userId) });
  };

  const flag = (): void => {
    setEmployeeId(user.employeeId);
    setQwe((prev) => !prev);
  };
  // Функция на изменение
  const onHandleSubm = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    fetch('https://reactapi.bsite.net/api/Employee', {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        employeeId,
        firstName,
        lastName,
        birthday,
        height,
      }),
    });
    dispatch({
      type: 'update_user',
      payload: { employeeId, firstName, lastName, birthday, height },
    });
    setQwe((prev) => !prev);
  };
  return (
    <div className="card" style={{ width: '18rem' }} key={user.employeeId}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Id: {user.employeeId}</li>
        <li className="list-group-item">Имя: {user.firstName}</li>
        <li className="list-group-item">Фамилия: {user.lastName}</li>
        <li className="list-group-item">Дата рождения: {user.birthday}</li>
        <button
          className="btn btn-danger"
          onClick={() => del(user.employeeId)}
          type="button"
        >
          Удалить
        </button>
        {!qwe && (
          <form onSubmit={onHandleSubm}>
            <input
              value={firstName}
              placeholder="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              type="text"
            />
            <input
              value={lastName}
              placeholder="lastName"
              onChange={(e) => setLastName(e.target.value)}
              id="setLastName"
              type="text"
            />
            <input
              value={birthday}
              placeholder="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              id="poster"
              type="text"
            />
            <input
              value={height}
              placeholder="height"
              onChange={(e) => setHeight(Number(e.target.value))}
              id="height"
              type="number"
            />
            <button className="btn btn-success" type="submit">
              Подтведридть изменения
            </button>
          </form>
        )}
        {qwe ? (
          <button className="btn btn-warning" onClick={flag}>
            Изменить
          </button>
        ) : (
          <button className="btn btn-danger" onClick={flag}>
            Не изменять
          </button>
        )}
      </ul>
    </div>
  );
}

export default UserCard;
