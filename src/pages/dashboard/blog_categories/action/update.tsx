import {
  ModalForm,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { Button, Col, notification, Row } from "antd";
import blogCategory from "api/blog_category";
import { BlogCategoryType } from "api/blog_category/types";
import file from "api/file";

type UpdateBlogCategoryProps = {
  data: BlogCategoryType;
  onClose: () => void;
  onFinish?: () => void;
};

export const UpdateBlogCategory: React.FC<UpdateBlogCategoryProps> = ({
  data,
  onClose,
  onFinish,
}) => {
  console.log(data?.id, "Kkkk");
  const category = useRequest(blogCategory.update, {
    manual: true,
    onSuccess: () => {
      notification.success({
        message: "Амжилттай",
        description: "Блогын ангилал амжилттай засагдлаа",
      });
      onFinish?.();
    },
    onError: (error) => {
      notification.error({
        message: "Алдаа",
        description: error?.message,
      });
      onClose?.();
    },
  });

  const blogCategories = useRequest(blogCategory.list, {
    manual: true,
    onError: (error) => {
      notification.error({
        message: "Алдаа гарлаа",
        description: error?.message,
      });
    },
  });

  const upload = useRequest(file.upload, {
    manual: true,
    onSuccess: () => {
      notification.success({
        message: "Амжилттай",
        description: "Зураг амжилттай хадгалагдлаа",
      });
    },
    onError: (error) => {
      notification.error({
        message: "Алдаа",
        description: error?.message,
      });
    },
  });
  const updateUpload = async (file: any) => {
    if (!file) return null;
    const id = file?.uid?.toString();
    if (id?.includes("rc-upload")) {
      const image = await upload.runAsync({
        file: file?.originFileObj,
      });
      return image[0]?.id;
    }
    return file?.uid;
  };
  return (
    <ModalForm
      initialValues={{
        ...data,
        image_id: [
          {
            uid: data?.image_id,
            name: "image",
            status: "done",
            type: "image/jpeg",
            url: file.fileToUrl(data?.image?.physical_path),
          },
        ],
      }}
      width={500}
      open={!!data}
      onFinish={async (values) => {
        const image = await updateUpload(values?.image_id[0]);
        await category.runAsync(data?.id, {
          ...values,
          image_id: image,
        });
      }}
      title={<div className="text-lg text-gray-700">Блогын ангилал засах</div>}
      submitter={{
        render: (props) => {
          return (
            <div className="flex items-center gap-4">
              <Button size="large" onClick={onClose} type="default">
                Болих
              </Button>
              <Button size="large" type="primary" onClick={props.submit}>
                Хадгалах
              </Button>
            </div>
          );
        },
      }}
      modalProps={{
        styles: {
          header: {
            padding: "16px 16px 0 16px",
          },
          body: {
            background: "#f7fafc",
            padding: "16px",
            border: "1px solid #e4e7eb",
          },
          content: {
            padding: 0,
          },
          footer: {
            padding: "0 16px 16px 16px",
          },
        },
        destroyOnClose: true,
        onCancel: onClose,
      }}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <ProFormText
            name="name"
            label="Ангилалын нэр"
            rules={[
              {
                required: true,
                message: "Ангилалын нэрийг оруулна уу",
              },
            ]}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <ProFormUploadButton
            label="Ангилалын зураг"
            name="image_id"
            title="Ангилалын зураг"
            max={1}
            rules={[
              {
                required: true,
                message: "Зураг оруулна уу",
              },
              {
                validator: (_, file) => {
                  if (file && file?.length > 0) {
                    if (
                      file[0]?.type === "image/jpeg" ||
                      file[0]?.type === "image/png"
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Зөвхөн JPG, PNG файлыг оруулах боломжтой"
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
            fieldProps={{
              listType: "picture",
              maxCount: 1,
              width: "500px",
              beforeUpload: () => {
                return false;
              },
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <ProFormTextArea
            name="description"
            label="Тайлбар"
            rules={[
              {
                required: true,
                message: "Тайлбар оруулна уу",
              },
            ]}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xl={24}>
          <ProFormSwitch name="is_active" label="Идэвхтэй эсэх" />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xl={24}>
          <ProFormSelect
            name="parent_id"
            request={async () => {
              const data = await blogCategories.runAsync({});
              return data?.map((item) => {
                return {
                  label: item?.name,
                  value: item?.id,
                };
              });
            }}
            label="Эхийн ангилал"
            placeholder={"Эхийн ангилал сонгох"}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
      </Row>
    </ModalForm>
  );
};
