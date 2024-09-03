import Image from "next/image";
import { Photo } from "@/app/base/constants/photos";

type PhotoCardProps = {
  photo: Photo;
};

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return <Image src={photo.imageSrc} width={500} height={500} alt="" />;
};

export { PhotoCard };
