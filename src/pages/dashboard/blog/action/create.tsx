import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const BlogCreate: React.FC = () => {
  const [blog, setBlog] = useState<string>("");

  const tinymceOptions = {
    relative_urls: false,
    height: 300,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "wordcount",
      "visualblocks",
      "visualchars",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "nonbreaking",
      "table",
      "contextmenu",
      "directionality",
      "emoticons",
      "paste",
      "textcolor",
      "help",
    ],
    toolbar:
      "undo redo | styleselect | bold italic backcolor | " +
      "alignleft aligncenter alignright alignjustify | " +
      "bullist numlist outdent indent | removeformat | " +
      "link image media fullscreen | forecolor backcolor emoticons",
    fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
  };

  return (
    <div>
      <Editor
        apiKey={import.meta.env.VITE_EDITOR_API_KEY}
        init={tinymceOptions}
        onEditorChange={(content) => {
          console.log(content);
          setBlog(content);
        }}
      />
      <div className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: blog }} />
      </div>
    </div>
  );
};

export default BlogCreate;
