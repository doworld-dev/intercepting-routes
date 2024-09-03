import Link from "next/link";
import { PhotoCard } from "@/app/base/components/PhotoCard";
import { Photo, photos } from "@/app/base/constants/photos";

type PhotoPageProps = {
  params: {
    id: string;
  };
};

const PhotoPage = ({ params: { id } }: PhotoPageProps) => {
  const photo: Photo = photos.find((p) => p.id.toString() === id)!;

  return (
    <div>
      <Link href="/photos">Back</Link>
      <PhotoCard photo={photo} />
      <p>상세 페이지</p>
    </div>
  );
};

export default PhotoPage;
