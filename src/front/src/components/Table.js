import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Card,
  TextField,
  Button,
} from "react-md";
import {useDispatch} from "react-redux";


import './Table.sass';
import {getUsersByDivision, deleteUser, getUsersByPosition, createUser} from "../data/actions";

const App = (props) => {
  const { data } = props;

  const [name, setName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [adress, setAdress] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const getHeaderTable = () => {
    const headerData = [];
    const columns = [
      'Имя',
      'Отчество',
      'Фамилия',
      'Пол',
      'Дата рождения',
      'Адрес прописки',
      'Должность',
      'Подразделение',
      '',
    ];
    columns.forEach((item, index) => {
      headerData.push({
        id: index,
        name: item,
      });
    });
    return headerData;
  };

  const searchDataByDivision = (element) => {
    dispatch(getUsersByDivision(element));
  };

  const userDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const searchDataByPosition = (element) => {
    dispatch(getUsersByPosition(element));
  }

  const addUser = () => {
    const args = {
      name,
      middleName,
      lastName,
      gender,
      adress,
      date,
    };
    dispatch(createUser(args));
  }

  return(
    <section className="table_wrapper">
      <div />
      <div>



        <div style={{ marginBottom: '20px' }}>Добавить пользователя</div>
        <div style={{ marginBottom: '50px', display: 'flex' }}>
          <div>
            <TextField
              id="field-1"
              aria-describedby="field-1-message"
              label="Имя"
              style={{ marginBottom: '20px' }}
              onChange={(event) => setName(event.currentTarget.value)}
            />
            <TextField
              id="field-2"
              aria-describedby="field-2-message"
              label="Фамилия"
              style={{ marginBottom: '20px' }}
              onChange={(event) => setLastName(event.currentTarget.value)}
            />
            <TextField
              id="field-3"
              aria-describedby="field-3-message"
              label="Отчество"
              style={{ marginBottom: '20px' }}
              onChange={(event) => setMiddleName(event.currentTarget.value)}
            />
          </div>
          <div>
            <TextField
              id="field-4"
              aria-describedby="field-4-message"
              label="Адресс"
              style={{ marginBottom: '20px' }}
              onChange={(event) => setAdress(event.currentTarget.value)}
            />
            <TextField
              id="field-5"
              aria-describedby="field-5-message"
              label="Дата рождения"
              style={{ marginBottom: '20px' }}
              onChange={(event) => setDate(event.currentTarget.value)}
            />
            <TextField
              id="field-6"
              aria-describedby="field-6-message"
              label="Пол"
              style={{ marginBottom: '20px' }}
              onChange={(event) => setGender(event.currentTarget.value)}
            />
          </div>
          <div>
            <Button id="text-button-1" theme="primary" onClick={() => addUser()}>
              Добавить
            </Button>
          </div>
        </div>




        <TextField
          id="field-1"
          aria-describedby="field-1-message"
          label="Поиск сотрудников по подразделению"
          style={{ marginBottom: '20px' }}
          onChange={(event) => searchDataByDivision(event.currentTarget.value)}
        />
        <TextField
          id="field-1"
          aria-describedby="field-1-message"
          label="Поиск сотрудников по должности"
          onChange={(event) => searchDataByPosition(event.currentTarget.value)}
        />
        <Card className="table_card_wrapper">
          <TableContainer>
            <Table fullWidth>
              <TableHeader>
                {getHeaderTable().map((header) => (
                  <TableCell key={header.id}>
                    {header.name}
                  </TableCell>
                ))}
              </TableHeader>
              <TableBody>
                {(data[0] || []).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell key={1}>{item.name}</TableCell>
                      <TableCell key={2}>{item.middle_name}</TableCell>
                      <TableCell key={3}>{item.last_name}</TableCell>
                      <TableCell key={4}>{item.gender}</TableCell>
                      <TableCell key={5}>{item.birth_date}</TableCell>
                      <TableCell key={6}>{item.address}</TableCell>
                      <TableCell key={7}>{item.positions}</TableCell>
                      <TableCell key={8}>{item.division}</TableCell>
                      <TableCell key={10}>
                        <Button id="text-button-1" theme="primary" onClick={() => userDelete(item.id)}>
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </section>
  )
};

export default App;
