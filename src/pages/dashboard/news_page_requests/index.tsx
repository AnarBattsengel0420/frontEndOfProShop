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
import { GenderBadge } from "components/badge/gender";
import IBadge from "components/badge";
import { RoleType } from "utils/types";

const NewsRequestsPage: React.FC = () => {
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
      width: 50,
      render: (_, __, index) => {
        return index + 1;
      },
    },
    {
      title: "",
      key: "avatar",
      width: 70,
      align: "center",
      render: (_, record) => {
        return (
          <Avatar
            className="uppercase"
            src={file.fileToUrl(record?.profile?.physical_path)}
          >
            {record?.email.substring(0, 2)}
          </Avatar>
        );
      },
    },
    {
      title: "Мэдээний хуудсын нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Имэйл хаяг",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Утас",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Байршил",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Чиглэл",
      dataIndex: "news_direction",
      key: "news_direction",
    },
    {
      title: "Статус",
      dataIndex: "role",
      align: "center",
      width: 100,
      renderText: (text) => {
        if (RoleType.ADMIN === text) {
          return <IBadge title="Админ" color="blue" />;
        }
        return <IBadge title="Хэрэглэгч" color="yellow" />;
      },
    },
    {
      title: "Төрсөн өдөр",
      dataIndex: "birth_date",
      key: "email",
      render: (_, record) => {
        return <div>{moment(record?.birth_date).format("YYYY-MM-DD")}</div>;
      },
    },
    {
      title: "Хүйс",
      dataIndex: "gender",
      key: "email",
      width: 100,
      render: (_, record) => {
        return <GenderBadge status={record?.gender} />;
      },
    },
    {
      title: "Идэвхтэй эсэх",
      dataIndex: "is_active",
      key: "email",
      render: (_, record) => {
        if (record?.is_active) {
          return <IBadge title="Тийм" color="green" />;
        }
        return <IBadge title="Үгүй" color="red" />;
      },
    },
    {
      title: "Баталгаажуулсан эсэх",
      dataIndex: "is_verified",
      key: "email",
      render: (_, record) => {
        if (record?.is_verified) {
          return <IBadge title="Тийм" color="green" />;
        }
        return <IBadge title="Үгүй" color="red" />;
      },
    },
    {
      title: "Бүртгүүлсэн огноо",
      dataIndex: "created_at",
      render: (_, record) => {
        return (
          <div>{moment(record?.created_at).format("YYYY-MM-DD HH:mm")}</div>
        );
      },
    },
    {
      title: "Үйлдэл",
      valueType: "option",
      align: "center",
      fixed: "right",
      width: 100,
      render: (_, record) => {
        return (
          <div className="flex items-center gap-3 justify-center">
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
        name="NewsRequests"
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
          title: (
            <div className="text-lg font-medium text-gray-700">
              Хэрэглэгчдийн жагсаалт
            </div>
          ),
          tooltip: "Хэрэглэгчдийн жагсаалтын удирдлагийг эндээс хийнэ үү?",
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

export default NewsRequestsPage;
