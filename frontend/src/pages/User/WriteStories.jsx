import React, { useState } from 'react';
import { Button, Input, Label } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

// Dynamically import a rich text editor
const RichTextEditor = dynamic(() => import('react-quill'), { ssr: false });

const WriteStories = () => {
  const { theme } = useTheme();
  const [editorValue, setEditorValue] = useState('');
  const [file, setFile] = useState(null);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (editorValue.trim() === '' && !file) {
      alert('Please enter a story or upload a PDF.');
      return;
    }

    // Handle form submission logic (e.g., save story to the server)
    alert('Story submitted!');
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <CardHeader className="px-6 py-4">
            <CardTitle className="text-3xl font-bold">Write Your Story</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8">
              <Label htmlFor="story-editor">Write Your Story</Label>
              <RichTextEditor
                id="story-editor"
                value={editorValue}
                onChange={handleEditorChange}
                theme={theme === 'dark' ? 'dark' : 'light'}
                modules={{
                  toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline'],
                    ['link'],
                    ['clean'],
                  ],
                }}
                formats={[
                  'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'link',
                ]}
                className="h-96"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="pdf-upload">Upload PDF of Your Story</Label>
              <Input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="mt-2"
              />
            </div>
            <Button onClick={handleSubmit} className={`w-full bg-blue-400 text-white rounded hover:bg-blue-500 transition duration-150 ${theme === 'dark' ? 'bg-blue-600' : ''}`}>
              Submit Story
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WriteStories;
