import Link from "next/link";
import Image from "next/image";
import { photos } from "@/app/base/constants/photos";
import styles from "./PhotosPage.module.css";

const PhotosPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo List</h1>

        <ul className={styles.photoList}>
          {photos.map(({ id, imageSrc }) => (
            <li key={id} className={styles.photoItem}>
              <Link href={`/photos/${id}`} className={styles.photoLink}>
                <Image
                  src={imageSrc}
                  width={300}
                  height={300}
                  alt={`Photo ${id}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PhotosPage;
