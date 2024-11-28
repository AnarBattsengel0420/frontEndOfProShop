import ProTable, { ProColumns } from "@ant-design/pro-table";
import { useRequest } from "ahooks";
import { Avatar, Button, Card, notification } from "antd";
import users from "api/users";
import moment from "moment";
import { useEffect, useState } from "react";
import { Edit01, Plus, RefreshCW02, Trash01 } from "untitledui-js-base";
import { CreateUser } from "./action/create";
import file from "api/file";
import { UpdateUser } from "./action/update";
import { DeleteUser } from "./action/delete";

const UserPage: React.FC = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [update, setUpdate] = useState<any>(undefined);
  const [deleteUser, setDelete] = useState<any>(undefined);

  const usersList = useRequest(users.list, {
    manual: true,
    onError: (error) => {
      notification.error({
        message: "Алдаа гарлаа",
        description: error?.message,
      });
    },
  });
  console.log(deleteUser, "Ll");

  useEffect(() => {
    usersList.run({});
  }, []);

  const refreshList = () => {
    usersList.run({});
  };

  const columns: ProColumns<Record<string, any>>[] = [
    {
      title: "№",
      dataIndex: "id",
      render: (_, __, index) => {
        return index + 1;
      },
    },
    {
      title: "",
      key: "avatar",
      render: (_, record) => {
        return (
          <Avatar
            className="uppercase"
            src={file.fileToUrl(record?.profile?.physical_path)}
          >
            {record.email.substring(0, 2)}
          </Avatar>
        );
      },
    },
    {
      title: "Цахим хаяг",
      dataIndex: "email",
      key: "email",
      fixed: "left",
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
      render: (_, record) => {
        return (
          <div>{moment(record.created_at).format("YYYY-MM-DD HH:mm")}</div>
        );
      },
    },
    {
      title: "Үйлдэл",
      valueType: "option",
      render: (_, record) => {
        return (
          <div className="flex items-center gap-3">
            <Edit01
              color="#1890ff"
              size="20"
              className="cursor-pointer"
              onClick={() => {
                setUpdate(record);
              }}
            />
            <Trash01
              color="#ff4d4f"
              size="20"
              className="cursor-pointer"
              onClick={() => {
                console.log("sdaaa");
                setDelete(record);
              }}
            />
          </div>
        );
      },
    },
  ];
  return (
    <Card>
      <ProTable
        name="Users"
        columns={columns}
        dataSource={usersList.data}
        bordered
        scroll={{ x: 1300 }}
        loading={usersList.loading}
        rowKey="id"
        toolBarRender={() => [
          <Button
            type="primary"
            size="large"
            icon={<Plus size="20" />}
            onClick={() => {
              setCreate(true);
            }}
          >
            Нэмэх
          </Button>,
          <Button
            type="default"
            size="large"
            icon={<RefreshCW02 size="20" />}
            onClick={() => {
              refreshList();
            }}
          />,
        ]}
        toolbar={{
          title: <div>Хэрэглэгчдийн жагсаалт</div>,
          tooltip: "Хэрэглэгчдийн жагсаалт",
          search: {
            onSearch: (value) => {},
            size: "large",
          },
          settings: undefined,
        }}
        searchFormRender={() => {
          return null;
        }}
      />
      {create && (
        <CreateUser
          open={create}
          onFinish={() => {
            refreshList();
            setCreate(false);
          }}
          onClose={() => {
            setCreate(false);
          }}
        />
      )}
      {update && (
        <UpdateUser
          data={update}
          onClose={() => {
            setUpdate(undefined);
          }}
          onFinish={() => {
            refreshList();
            setUpdate(undefined);
          }}
        />
      )}
      {deleteUser && (
        <DeleteUser
          data={deleteUser}
          onClose={() => {
            setDelete(undefined);
          }}
          onFinish={() => {
            refreshList();
            setDelete(undefined);
          }}
        />
      )}
    </Card>
  );
};

export default UserPage;
