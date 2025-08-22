import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        className="max-w-xs"
        required
      />
    </div>
  );
};

export default ImageInput;
