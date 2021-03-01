import React from "react";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Card,
} from "react-md";

import './Table.sass';

const App = (props) => {
  const { data } = props;
  console.log(data);
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
    ];
    columns.forEach((item, index) => {
      headerData.push({
        id: index,
        name: item,
      });
    });
    return headerData;
  };

  return(
    <section className="table_wrapper">
      <div />
      <div>
        <Card className="table_card_wrapper">
          <TableContainer>
            <Table>
              <TableHeader>
                {getHeaderTable().map((header) => (
                  <TableCell key={header.id}>
                    {header.name}
                  </TableCell>
                ))}
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                   </TableRow>
                ))}
                {/*{Array.from({length: 10}, (_, i) => (*/}
                {/*  <TableRow key={i}>*/}
                {/*    <TableCell>{`Cell 1, row ${i + 1}`}</TableCell>*/}
                {/*    <TableCell>{`Cell 2, row ${i + 1}`}</TableCell>*/}
                {/*    <TableCell>{`Cell 3, row ${i + 1}`}</TableCell>*/}
                {/*  </TableRow>*/}
                {/*))}*/}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </section>
  )
};

export default App;
