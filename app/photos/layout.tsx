type PhotosLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const PhotosLayout = ({ children, modal }: PhotosLayoutProps) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default PhotosLayout;
