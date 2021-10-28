import { Container } from "./styles";

interface IUser {
  name: string;
}

interface IProfileProps {
  user: IUser;
}

export function Profile({ user }: IProfileProps) {
  return (
    <Container>
      <img src="https://github.com/ronaldprofile.png" alt={user.name} />
      <strong>{user.name}</strong>
    </Container>
  );
}
