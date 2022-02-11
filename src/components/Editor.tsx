import React from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Editor = () => {
  return (
    <EditorContainer>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </EditorContainer>
  );
};

export default Editor;

const EditorContainer = styled.div`
  width: 400px;
`;
