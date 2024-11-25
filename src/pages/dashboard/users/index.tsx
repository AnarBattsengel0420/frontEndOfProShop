import ProTable, { ProColumns } from "@ant-design/pro-table";
import { Button } from "antd";
import { useState } from "react";
import { CreateUser } from "./action/create";

const UserPage: React.FC = () => {
  const [create, setCreate] = useState<boolean>(false);
  const columns: ProColumns<Record<string, any>>[] = [
    {
      title: "Цахим хаяг",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Хэрэглэгчийн нэр",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Утас",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Нэр",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Овог",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Төрсөн өдөр",
      dataIndex: "birth_date",
      key: "email",
    },
    {
      title: "Хүйс",
      dataIndex: "gender",
      key: "email",
    },
    {
      title: "Идэвхтэй эсэх",
      dataIndex: "is_active",
      key: "email",
    },
    {
      title: "Баталгаажуулсан эсэх",
      dataIndex: "is_verified",
      key: "email",
    },
    {
      title: "Бүртгүүлсэн огноо",
      dataIndex: "created_at",
    },
  ];
  return (
    <div>
      <ProTable
        name="Users"
        columns={columns}
        bordered
        rowKey="id"
        toolBarRender={() => [
          <Button
            type="primary"
            size="large"
            onClick={() => {
              setCreate(true);
            }}
          >
            Хэрэглэгч нэмэх
          </Button>,
        ]}
        toolbar={{
          title: <div>Хэрэглэгчдийн жагсаалт</div>,
          tooltip: "Хэрэглэгчдийн жагсаалт",
          search: {
            onSearch: (value) => {},
            size: "large",
          },
        }}
        searchFormRender={() => {
          return null;
        }}
      />
      {create && (
        <CreateUser
          open={create}
          onClose={() => {
            setCreate(false);
          }}
        />
      )}
    </div>
  );
};

export default UserPage;
