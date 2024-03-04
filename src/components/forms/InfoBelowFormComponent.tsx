interface IInfoBelowFormProps{
  text: string;
  handleClick: () => void;
  titleClick: string;
  titleHover: string;
}

export default function InfoBelowFormComponent({text, handleClick, titleClick, titleHover}: IInfoBelowFormProps) {
  return (
    <div className="text-xs text-center mt-4">
      <span>
        {text}{" "}
        <span
          onClick={handleClick}
          className="text-cyan-500 cursor-pointer font-semibold text-sm"
          title={titleHover}
        >
          {titleClick}
        </span>
      </span>
    </div>
  );
}
