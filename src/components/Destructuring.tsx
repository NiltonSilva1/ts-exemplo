interface DestructuringProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  category: Category;
}

export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P = "Python",
  TXT = "text",
}

export const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: DestructuringProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
        <p>Categoria: {category}</p>
      </div>
    </div>
  );
};
