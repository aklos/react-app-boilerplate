import * as React from "react";
import Button from "./Button";

export default function NewLeadForm(props: {
  data: { name: string; email: string; phone: string };
  onChange: (key: string, value: string) => void;
}) {
  const { data, onChange } = props;
  const [submitted, toggleSubmitted] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toggleSubmitted(true);
      }}
    >
      <div className="mb-4">
        <TextField
          label="Name"
          value={data.name}
          onChange={(v) => onChange("name", v)}
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <TextField
          label="Email"
          type="email"
          value={data.email}
          onChange={(v) => onChange("email", v)}
        />
        <TextField
          label="Phone"
          type="phone"
          value={data.phone}
          onChange={(v) => onChange("phone", v)}
        />
      </div>
      <Button
        color="green"
        type="submit"
        submitted={submitted}
        disabled={!data.name || !data.email || !data.phone}
        onClick={() => {
          window.dataLayer.push({
            event: "new_lead",
            personData: data,
          });
        }}
      >
        New lead
      </Button>
    </form>
  );
}

function TextField(props: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const { label, type, value, onChange } = props;

  return (
    <label>
      <input
        required
        className="w-full px-3 py-1 rounded-md border"
        type={type || "text"}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
