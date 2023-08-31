import React from 'react';

interface User {
  nombre: string;
  apellido: string;
}
export const Form: React.FC = () => {
  const [userForm, setUserForm] = React.useState<User>({
    nombre: 'Leticia',
    apellido: 'de la Osa'
  });

  const handleChange =
    (valor: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setUserForm({ ...userForm, [valor]: e.target.value });

  return (
    <>
      <h1>{`${userForm.nombre} ${userForm.apellido}`}</h1>
      <input
        name="nombre"
        type="text"
        onChange={handleChange('nombre')}
        value={userForm.nombre}
      />
      <input
        name="apellido"
        type="text"
        onChange={handleChange('apellido')}
        value={userForm.apellido}
      />
    </>
  );
};
