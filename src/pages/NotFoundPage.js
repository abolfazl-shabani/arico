import {
  ContainerContact,
  DetailContact,
  TitleContact,
} from "../styles";

const NotFoundPage = () => {
  return (
    <>
      <ContainerContact>
        <TitleContact>404 Error</TitleContact>
        <DetailContact>Page Not Found</DetailContact>
      </ContainerContact>
    </>
  );
};

export default NotFoundPage;
