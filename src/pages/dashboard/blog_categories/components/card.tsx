import { Avatar, Card, Descriptions } from "antd";
import { BlogCategoryType } from "api/blog_category/types";
import file from "api/file";
import { useState } from "react";
import { DeleteBlogCategory } from "../action/delete";
import { UpdateBlogCategory } from "../action/update";
import { Edit01, Trash01 } from "untitledui-js-base";
import moment from "moment";
import { Item } from "./item";
import IBadge from "components/badge";

type CategoryCardProps = {
  category: BlogCategoryType;
  fetch: any;
  refreshList: () => void;
};
export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  fetch,
  refreshList,
}) => {
  const [update, setUpdate] = useState<any>(undefined);
  const [deleteUser, setDelete] = useState<any>(undefined);

  return (
    <div className="col-span-1">
      <Card
        loading={fetch?.loading}
        hoverable
        className="bg-[#f7fafc]"
        actions={[
          <div
            onClick={() => {
              setUpdate(category);
            }}
            className="flex items-center gap-2 justify-center hover:text-blue-500"
          >
            <Edit01 />
            <div>Засах</div>
          </div>,
          <div
            onClick={() => {
              setDelete(category);
            }}
            className="flex items-center gap-2 justify-center hover:text-red-500"
          >
            <Trash01 />
            <div>Устгах</div>
          </div>,
        ]}
      >
        <Card.Meta
          title={
            <div className="uppercase text-xl text-gray-600">
              {category?.name}
            </div>
          }
          description={
            <div className="flex flex-col gap-2">
              <div className="text-base">Ангилалын мэдээлэл</div>
              <Item label="Тайлбар" value={category?.description} />
              <Item
                label="Үүсгэсэн"
                value={moment(category?.created_at).format("YYYY/MM/DD")}
              />
              <Item
                label="Идэвхтэй эсэх"
                value={
                  category?.is_active ? (
                    <IBadge title="Тийм" color="green" />
                  ) : (
                    <IBadge title="Үгүй" color="red" />
                  )
                }
              />
              <Item
                label="Үүсгэсэн админ"
                value={category?.admin?.username || "N/A"}
              />
              <Item label="Slug" value={category?.slug || "N/A"} />
              <Item
                label="Эх ангилал"
                value={category?.parent?.name || "N/A"}
              />
            </div>
          }
          avatar={
            <Avatar
              src={file.fileToUrl(category?.image?.physical_path)}
              size={64}
            />
          }
        />
      </Card>
      {update && (
        <UpdateBlogCategory
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
        <DeleteBlogCategory
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
    </div>
  );
};
