import { useState } from "react";
import { Details } from "../../interfaces/details.interface";
export default function DetailsForm({
  initialData,
  onSubmit,
}: {
  initialData: Details;
  onSubmit: Function;
}) {
  const [details, setDetails] = useState<Details>(initialData);

  return <div>DetailsForm</div>;
}
