import FormContainer from "@/components/form/FormContainer";
import {
  updateProfileAction,
  fetchProfile,
  updateProfileImageAction,
} from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/SubmitButton";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function ProfilePage() {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">User profile</h1>
      <div className="p-8 border rounded-md ">
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.userName}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={profile.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={profile.lastName}
            />
            <FormInput
              type="text"
              name="userName"
              label="Username"
              defaultValue={profile.userName}
            />
          </div>
          <SubmitButton text="update profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default ProfilePage;
