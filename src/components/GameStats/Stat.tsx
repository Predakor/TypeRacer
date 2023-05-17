interface Props {
  title: string;
  value: string | number;
  descr: string;
  className?: string;
}

function Stat({ title, value, descr, className = "" }: Props) {
  return (
    <div className={`stat ${className}`}>
      <h3 className="stat-title">{title}</h3>
      <span className={"stat-value tooltip"} data-tip={descr}>
        {value}
      </span>
    </div>
  );
}
export default Stat;
