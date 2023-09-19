import { UserProtectedRoute } from "@/components/protected-route";
import Image from "next/image";
import ProfileImage from "@/assets/Default Image.png";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  console.log(session);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleSubmit = async () => {
    console.log("halo?");
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("email", session?.user?.email as string);
      try {
        const response = await fetch("/api/upload-image-cms", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          console.log("Image uploaded successfully");
          console.log(response);
        } else {
          console.error("Image upload failed");
        }
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }
  };

  return (
    <UserProtectedRoute>
      <>
        <p>Profile Page</p>
        {session?.user.image ? (
          <p>hai</p>
        ) : (
          <Image
            src={ProfileImage}
            alt="default profile picture"
            width={100}
            height={100}
          />
        )}
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button onClick={handleSubmit}>Upload</button>
        </div>
      </>
    </UserProtectedRoute>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
