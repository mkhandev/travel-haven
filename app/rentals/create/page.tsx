import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/SubmitButton";

const RentalsPage = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">
        create property
      </h1>
      <div className="p-8 border rounded-md">
        <h3 className="mb-4 text-lg font-medium">General Info</h3>

        <FormContainer action={createPropertyAction}>
          <div className="grid gap-8 mb-4 md:grid-cols-2">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
            {/* price */}
            {/* categories */}
          </div>
          {/* text area / description */}
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default RentalsPage;
