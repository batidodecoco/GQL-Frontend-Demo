import { ReactElement, useCallback, useState } from "react";
import Input from "../../../main_app/components/Input";
import { useCreateUser } from "../../../main_app/hooks/useCreateUser";

export default function CreateUser(): ReactElement {
  const { createUser } = useCreateUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = useCallback(async () => {
    await createUser({
      firstName,
      lastName,
      email,
      telephone: phone
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }, [firstName, lastName, email, phone]);

  return (
    <section>
      <h2>Crear Usuario</h2>
      <div className="grid grid-cols-1 gap-4">
        <Input label="Nombre" value={firstName} onChange={setFirstName} placeholder="Ingresá el nombre..." />
        <Input label="Apellido" value={lastName} onChange={setLastName} placeholder="Ingresá el apellido..." />
        <Input label="Correo electrónico" value={email} onChange={setEmail} placeholder="Ingresá el correo electrónico..." />
        <Input label="Teléfono" value={phone} onChange={setPhone} placeholder="Ingresá el teléfono..." />
      </div>
      <button onClick={onSubmit} className="mt-4 px-4 py-2 rounded-md bg-indigo-700 text-indigo-100 transition-all duration-500 hover:bg-indigo-900 text-indigo-50">
        Crear Usuario
      </button>
    </section>
  )
}