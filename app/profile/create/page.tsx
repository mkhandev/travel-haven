import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/SubmitButton";
import { createProfileAction } from "@/utils/actions";

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize"> new user</h1>
      <div className="max-w-lg p-8 border rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="userName" label="User name" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfilePage;
