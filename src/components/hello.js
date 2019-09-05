import React from 'react';

const Hello = (props) => {
  const { firstName, lastName, age, game, isStudent, semuaGame } = props;
  return (
    <main>
      Nama saya adalah 
      {firstName} {lastName}
      <br/>
      Umur saya {age} tahun
      <br/>
      Game yang saya sukai ada {game} yaitu: {semuaGame}
      {isStudent}
    </main>
  );
}
 
export default Hello;