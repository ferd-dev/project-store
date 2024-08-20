type Props = {
  nameCategory: string;
};

const CardNameCategory = ({ nameCategory }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-5">
      <div className="w-full max-w-3xl bg-gray-100 rounded-full py-4">
        <h2 className="text-center text-xl font-semibold text-primary-700 italic">
          {nameCategory}
        </h2>
      </div>
    </div>
  );
};

export default CardNameCategory;
