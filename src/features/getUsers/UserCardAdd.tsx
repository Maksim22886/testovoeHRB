import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function UserCardAdd(): JSX.Element {
  const [employeeId, setEmployeeId] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [height, setHeight] = useState<number>(0);
  const dispatch = useDispatch();
  const { users } = useSelector((store: RootState) => store.users);

  // Для нумерации id
  const PlusId = (): void => {
    setEmployeeId(users.length + 1);
  };
  // Создание карточки user
  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    fetch('https://reactapi.bsite.net/api/Employee', {
      method: 'post',
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
      type: 'Add_user',
      payload: { employeeId, firstName, lastName, birthday, height },
    });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="frame">
        <h1>Добавить пользователя</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            firstName
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            lastName
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="setLastName"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            birthday
          </label>
          <input
            value={birthday}
            placeholder="2023-07-04T08:42:28"
            onChange={(e) => setBirthday(e.target.value)}
            id="birthday"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            height
          </label>
          <input
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            id="height"
            type="number"
          />
        </div>
        <button className="btn btn-success" type="submit" onClick={PlusId}>
          Добавить
        </button>
      </div>
    </form>
  );
}

export default UserCardAdd;
