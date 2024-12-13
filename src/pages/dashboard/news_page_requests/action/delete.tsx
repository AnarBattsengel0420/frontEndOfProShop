import { ModalForm } from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { notification } from "antd";
import users from "api/users";
import { UsersType } from "api/users/types";

interface DeleteUserProps {
  data: UsersType;
  onFinish: () => void;
  onClose: () => void;
}

export const DeleteUser: React.FC<DeleteUserProps> = ({
  data,
  onFinish,
  onClose,
}) => {
  const user = useRequest(users.deleteUser, {
    manual: true,
    onSuccess: () => {
      onFinish();
      notification.success({
        message: "Амжилттай",
        description: "Хэрэглэгч амжилттай устгагдлаа",
      });
    },
    onError: (error) => {
      notification.error({
        message: "Алдаа",
        description: error?.message,
      });
      onClose();
    },
  });
  return (
    <ModalForm
      open={!!data}
      width={400}
      onFinish={async () => await user.runAsync(data?.id)}
      modalProps={{
        onCancel: onClose,
        title: "Хэрэглэгч устгах",
        okText: "Устгах",
        okButtonProps: {
          danger: true,
        },
        cancelText: "Цуцлах",
      }}
    >
      <div>Та {data?.username} хэрэглэгчийг устгах гэж байна.</div>
    </ModalForm>
  );
};
