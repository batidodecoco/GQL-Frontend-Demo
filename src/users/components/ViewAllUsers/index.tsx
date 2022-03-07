import { ReactElement } from "react";
import { useUsers } from "../../../main_app/hooks/useUsers";

export default function ViewAllUsers(): ReactElement {
  const { users } = useUsers();

  return (
    <section>
      <h2>Lista de Usuarios</h2>
      <table className="my-4 table-auto">
        <thead>
          <tr>
            <th className="text-xs font-normal">Nombre</th>
            <th className="text-xs font-normal">Apellido</th>
            <th className="text-xs font-normal">Email</th>
            <th className="text-xs font-normal">Telefono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-xs font-normal">{user.firstName}</td>
              <td className="text-xs font-normal">{user.lastName}</td>
              <td className="text-xs font-normal">{user.email}</td>
              <td className="text-xs font-normal">{user.telephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}