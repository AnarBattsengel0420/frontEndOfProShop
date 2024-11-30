interface ItemProps {
  label: string | React.ReactNode;
  value: string | React.ReactNode | number;
}

export const Item: React.FC<ItemProps> = ({ label, value }) => {
  return (
    <div className="flex md:flex-row flex-col items-start gap-3 py-3 border-b border-gray-200">
      <div className="text-gray-500">{label}:</div>
      <div>{value}</div>
    </div>
  );
};
