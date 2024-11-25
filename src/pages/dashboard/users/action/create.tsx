import {
  DrawerForm,
  ProFormDatePicker,
  ProFormText,
  ProFormUploadButton,
} from "@ant-design/pro-form";
import { Button, Col, Row } from "antd";

type CreateUserProps = {
  open: boolean;
  onClose: () => void;
};

export const CreateUser: React.FC<CreateUserProps> = ({ open, onClose }) => {
  return (
    <DrawerForm
      width={600}
      open={open}
      title={<div className="text-xl">Хэрэглэгч нэмэх</div>}
      submitter={{
        render: (props) => {
          return (
            <div className="flex items-center gap-4">
              <Button size="large" onClick={props.reset} type="default">
                Болих
              </Button>
              <Button size="large" type="primary" onClick={props.submit}>
                Хадгалах
              </Button>
            </div>
          );
        },
      }}
      drawerProps={{
        destroyOnClose: true,
        onClose: onClose,
      }}
    >
      <Row gutter={[24, 24]}>
        <Col xl={14}>
          <Row gutter={[24, 24]}>
            <Col xl={24}>
              <ProFormText
                name="username"
                label="Хэрэглэгчийн нэр"
                rules={[
                  {
                    required: true,
                    message: "Хэрэглэгчийн нэрээ оруулна уу",
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
              <ProFormText
                name="email"
                label="Цахим хаяг"
                rules={[
                  {
                    required: true,
                    message: "Цахим хаягаа оруулна уу",
                  },
                ]}
                fieldProps={{
                  size: "large",
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col xl={10}>
          <ProFormUploadButton
            label="Зураг"
            name="profile"
            title="Зураг оруулах"
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
              listType: "picture-card",
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
        <Col xl={12}>
          <ProFormText
            name="first_name"
            label="Нэр"
            rules={[
              {
                required: true,
                message: "Нэрээ оруулна уу",
              },
            ]}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
        <Col xl={12}>
          <ProFormText
            name="last_name"
            label="Овог"
            rules={[
              {
                required: true,
                message: "Овог оруулна уу",
              },
            ]}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xl={12}>
          <ProFormText
            name="phone"
            label="Утас"
            rules={[
              {
                required: true,
                message: "Утас оруулна уу",
              },
            ]}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
        <Col xl={12}>
          <ProFormDatePicker
            name="birth_date"
            label="Төрсөн өдөр"
            rules={[
              {
                required: true,
                message: "Төрсөн өдөр оруулна уу",
              },
            ]}
            fieldProps={{
              size: "large",
            }}
          />
        </Col>
      </Row>
    </DrawerForm>
  );
};
