import { createClient } from "@supabase/supabase-js";

const bucket = "travel-haven";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
    });

  if (error) {
    throw new Error("Image upload failed: " + error.message);
  }

  if (!data) {
    throw new Error("Image upload failed.");
  }
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
