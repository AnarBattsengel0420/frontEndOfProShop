import { useRequest } from "ahooks";
import { Card, notification } from "antd";
import blogCategory from "api/blog_category";
import { useEffect, useState } from "react";
import { CreateCategory } from "./action/create";
import { CategoryCard } from "./components/card";
import { Header } from "./components/header";

const BlogCategoriesPage: React.FC = () => {
  const [create, setCreate] = useState<boolean>(false);

  const categoryList = useRequest(blogCategory.list, {
    manual: true,
    onError: (error) => {
      notification.error({
        message: "Алдаа гарлаа",
        description: error?.message,
      });
    },
  });

  useEffect(() => {
    categoryList.run({});
  }, []);

  const refreshList = () => {
    categoryList.run({});
  };

  return (
    <Card>
      <Header
        onCreate={() => {
          setCreate(true);
        }}
        onRefresh={refreshList}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {categoryList?.data?.map((item, index) => {
          return (
            <CategoryCard
              category={item}
              key={index}
              fetch={categoryList}
              refreshList={refreshList}
            />
          );
        })}
      </div>
      {create && (
        <CreateCategory
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
    </Card>
  );
};

export default BlogCategoriesPage;
