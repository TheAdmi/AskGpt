import React, { useState } from "react";
import axios from "axios";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from 'react-hot-toast';
import { TypeAnimation } from 'react-type-animation';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  // Saving notification :
  const WaitNotif = () => (
    toast(
      <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
        <div className="flex items-center px-4 py-6">
          <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-rose-500 rounded-full" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="ml-2 text-md text-gray-700 dark:text-gray-400">Wait...</p>
        </div>
      </div>
      , {
        style: { background: 'none', boxShadow: 'none' },
        duration: 120000,
        position: 'top-center',
      })
  );

  // Saved image notification :
  const DoneNotif = () => (
    toast(
      <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
        <div className="flex items-center px-4 py-6">
          <CheckCircleIcon className="w-6 h-6 fill-rose-500" />
          <p className="ml-2 text-md text-gray-700 dark:text-gray-400">Done</p>
        </div>
      </div>
      , {
        style: { background: 'none', boxShadow: 'none' },
        duration: 2000,
        position: 'top-center',
      })
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    WaitNotif();
    try {
      const response = await axios.post('http://localhost:3300/getOpenAIResponse', { "value": value });
      setResult(response.data.result);
      toast.remove();
      DoneNotif();
      setValue("");
    } catch (error) {
      console.error('Error :', error);
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900 flex flex-col min-h-screen">
      <Navbar />
      <Toaster />

      <div className="py-4 mt-6 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-none tracking-normal text-gray-900 dark:text-white md:text-4xl md:tracking-tight">
          Discover a world of knowledge <br/> and assistance with Ask<span className="text-rose-500">GPT</span>
        </h1>
        <TypeAnimation sequence={[
            "What can I assist you with right now?",
            1000,
            "How can I be of service today?",
            1000,
            "Is there something specific you'd like support with?",
            1000,
            "What brings you here? How can I assist?",
            1000,
            "Are there any questions on your mind that I can answer?",
            1000,
            "In what way can I support you today?",
            1000,
            "What do you need help with at the moment?",
            1000,
            "How can I make your experience better today?",
            1000,
            "Is there a particular topic you'd like information or help on?",
            1000,
            "How can I contribute to your goals or inquiries?",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-2xl sm:text-3xl font-semibold leading-none tracking-normal text-gray-900 dark:text-white md:tracking-tight"
        />
      </div>

      <form className="mb-6 mx-3 mt-4 sm:mx-0" onSubmit={handleSubmit}>
        <div className="relative w-full xl:w-5/12 lg:w-3/5 md:w-3/4 sm:w-3/4 mx-auto">
          <input type="text" className="block w-full p-4 md:mx-0 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="typing here.." value={value} onChange={(e) => setValue(e.target.value)} required />
          <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500">
            <PaperAirplaneIcon className="h-8 w-8 fill-rose-500" />
          </button>
        </div>
      </form>
      <div className="mx-3 sm:mx-0">
        {result ?
          (<MarkdownPreview className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 m-4 rounded-lg relative w-full xl:w-5/12 lg:w-3/5 md:w-3/4 sm:w-3/4 mx-auto"
            source={result} />)
          : ""
        }
      </div>
      <Footer />
    </main>
  )
}

export default Home;