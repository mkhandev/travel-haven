import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile"
        width={24}
        height={24}
        className="object-cover w-6 h-6 rounded-full"
      />
    );
  }

  return <LuUser className="w-6 h-6 text-white rounded-full bg-primary" />;
}
export default UserIcon;
