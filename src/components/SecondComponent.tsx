interface SecondComponentProps {
  name: string;
}

export const SecondComponent = ({ name }: SecondComponentProps) => {
  return (
    <div>
      <p>Meu segundo compenente</p>
      <p>o nome dele é: {name}</p>
    </div>
  );
};
