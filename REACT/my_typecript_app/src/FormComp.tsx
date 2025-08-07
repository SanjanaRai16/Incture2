import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

function FormComp() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleChangee = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>User Form</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChangee}
        placeholder="Enter your name"
      />
      <br />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChangee}
        placeholder="Enter your email"
      />
    </div>
  );
}

export default FormComp;
