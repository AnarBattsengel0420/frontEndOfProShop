import { Button } from "antd";
import { Plus, RefreshCW02 } from "untitledui-js-base";

interface HeaderProps {
  onCreate: () => void;
  onRefresh: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCreate, onRefresh }) => {
  return (
    <div className="flex items-center flex-wrap justify-between mb-5">
      <h1 className="text-lg font-medium text-gray-700">Блогын ангилал</h1>
      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="primary"
          size="large"
          icon={<Plus size="20" />}
          onClick={onCreate}
        >
          Нэмэх
        </Button>
        <Button
          type="default"
          size="large"
          icon={<RefreshCW02 size="20" />}
          onClick={onRefresh}
        />
      </div>
    </div>
  );
};
