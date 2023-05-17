interface Props {
  entered: string | undefined;
  generated: string;
  extra: boolean;
}

export function Letter({ generated, entered, extra }: Props) {
  const isCorrect = entered === generated;
  const letterClass = isCorrect ? "text-primary-content" : "text-error";
  return (
    <span className={entered ? letterClass : "text-base-content"}>
      {extra ? entered : generated}
    </span>
  );
}
