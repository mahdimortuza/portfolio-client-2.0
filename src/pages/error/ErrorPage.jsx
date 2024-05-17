import { useRouteError } from "react-router-dom";
import Container from "../../components/container/Container";

export default function ErrorPage() {
  const error = useRouteError(); 

  return (
    <Container>
      <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </Container>
  );
}