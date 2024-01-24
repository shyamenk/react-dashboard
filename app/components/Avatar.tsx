type Props = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: Props) => {
  return (
    <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
