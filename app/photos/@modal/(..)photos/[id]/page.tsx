import { Modal } from "@/app/base/components/Modal";
import { PhotoCard } from "@/app/base/components/PhotoCard";
import { Photo, photos } from "@/app/base/constants/photos";

type PhotoModalProps = {
  params: {
    id: string;
  };
};

const PhotoModal = ({ params: { id } }: PhotoModalProps) => {
  const photo: Photo = photos.find((p) => p.id.toString() === id)!;

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
};

export default PhotoModal;
