import {
  ModalForm,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton
} from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { Button, Col, notification, Row } from "antd";
import blogCategory from "api/blog_category";
import file from "api/file";

type CreateCategoryProps = {
  open: boolean;
  onClose: () => void;
  onFinish?: () => void;
};

export const CreateCategory: React.FC<CreateCategoryProps> = ({
  open,
  onClose,
  onFinish,
}) => {
  const category = useRequest(blogCategory.create, {
    manual: true,
    onSuccess: () => {
      notification.success({
        message: "Амжилттай",
        description: "Блогын ангилал амжилттай нэмэгдлээ",
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
  return (
    <ModalForm
      width={500}
      open={open}
      onFinish={async (values) => {
        const image = await upload.runAsync({
          file: values.image_id[0]?.originFileObj,
        });
        await category.runAsync({
          ...values,
          image_id: image[0]?.id,
        });
      }}
      title={<div className="text-lg text-gray-700">Блогын ангилал үүсгэх</div>}
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
