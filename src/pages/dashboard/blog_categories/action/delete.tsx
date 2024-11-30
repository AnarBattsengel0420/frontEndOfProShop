import { ModalForm } from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { notification } from "antd";
import blogCategory from "api/blog_category";
import { BlogCategoryType } from "api/blog_category/types";

interface DeleteBlogCategoryProps {
  data: BlogCategoryType;
  onFinish: () => void;
  onClose: () => void;
}

export const DeleteBlogCategory: React.FC<DeleteBlogCategoryProps> = ({
  data,
  onFinish,
  onClose,
}) => {
  const category = useRequest(blogCategory.deleteCategory, {
    manual: true,
    onSuccess: () => {
      onFinish();
      notification.success({
        message: "Амжилттай",
        description: "Блогын ангилал амжилттай устгагдлаа",
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
      onFinish={async () => await category.runAsync(data?.id)}
      modalProps={{
        onCancel: onClose,
        title: "Блогын ангилал устгах",
        okText: "Устгах",
        okButtonProps: {
          danger: true,
        },
        cancelText: "Цуцлах",
      }}
    >
      <div>Та {data?.name} блогын ангилалыг устгах гэж байна.</div>
    </ModalForm>
  );
};
