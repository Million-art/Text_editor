import CreatableReactSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { NoteData } from './App';

type NoteFormProps={
    onsubmit:(data:NoteData)=>void
}

const NoteForm = ({ onSubmit }: NoteFormProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
        title:titleRef.current?.value,
        textArea:textAreaRef.current?.value,
        Tags:[]
    })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[800px]" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            ref={titleRef}
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
            Tag
          </label>
          <CreatableReactSelect className="w-full" isMulti />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter content"
            rows={15}
            ref={textAreaRef}
          ></textarea>
        </div>
        <div className="flex items-center gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Note
          </button>
          <Link to="/">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;