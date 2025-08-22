import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type defaultValue = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: defaultValue) => {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="mb-2 capitalize">
        Price ($)
      </Label>

      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export default PriceInput;
