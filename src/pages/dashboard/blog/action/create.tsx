import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
  FontFamily,
  FontSize,
  ClassicEditor,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import { useState } from "react";

const BlogCreate: React.FC = () => {
  const [blog, setBlog] = useState<string>("");
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(_, editor) => {
          const data = editor.getData();
          setBlog(data);
        }}
        config={{
          toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "link",
            "insertTable",
            "mediaEmbed",
            "|",
            "bulletedList",
            "numberedList",
            "indent",
            "outdent",
            "fontFamily",
            "fontSize",
          ],
          plugins: [
            Bold,
            Essentials,
            Heading,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Paragraph,
            Table,
            Undo,
            FontFamily,
            FontSize,
          ],
          initialData: "<h1>Hello from CKEditor 5!</h1>",
        }}
      />
      <div className="mt-5">
        <h1>Content</h1>
        <div dangerouslySetInnerHTML={{ __html: blog }} />
      </div>
    </div>
  );
};

export default BlogCreate;
