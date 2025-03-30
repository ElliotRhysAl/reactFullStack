import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="p-4">
      <h1 className="text-2xl font-bold">About Me</h1>

      <p>
        I'm Elliot, a self-taught web developer. I'm currently learning front-end development, but I'm also interested in
        back-end services, deployments, data, and everything else under the sun!
      </p>

      <p>
        Feel free to take a look through my site and let me know what you think! Everything is stored in my public&nbsp;
        <a href="https://github.com/ElliotRhysAl/reactFullStack" target="_blank" rel="noopener noreferrer">
          Github Repo
        </a>
        . I've built everything from scratch using various sources from across the web.
      </p>

      <p>
        I hope that some of the functions, code, or documentation on there can help you build something or provide feedback
        to help me improve!
      </p>
    </Container>
  );
};
  
  export default AboutPage;