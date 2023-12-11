"use client";

import React, { useEffect, useState } from "react";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [textEditorValue, setTextEditorValue] = useState("");
  // const [successMsg, setSuccessMsg] = useState(false)
  const clearFrom = () => {
    setTitle("");
    setTopic("");
    setKeywords("");
    setCoverImage("");
    setTextEditorValue("");
  };

  //   useEffect(() => {
  //     if (isSuccess) {
  //       clearFrom();
  //       alert("article created successfully");
  //     }
  //   }, [isSuccess]);

  //   useEffect(() => {
  //     if (isError && error) {
  //       alert("error = ", error);
  //     }
  //   }, [isError, error]);

  // useEffect(() => {
  //   if (successMsg) {
  //     setSuccessMsg(false);
  //     clearFrom()
  //   }
  // }, [successMsg])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title?.trim()) {
      return console.log("title is required");
    }

    if (!textEditorValue?.trim()) {
      return console.log("textEditorValue is required");
    }

    if (!topic?.trim()) {
      return console.log("topic is required");
    }

    if (!coverImage) {
      return console.log("coverImage is required");
    }

    if (!keywords?.trim()) {
      return console.log("keywords is required");
    }

    console.log("title = ", title);
    console.log("textEditorValue = ", textEditorValue);
    console.log("topic = ", topic);
    console.log("keywords= ", keywords);
    console.log("coverImage= ", coverImage);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", textEditorValue);
    formData.append("category", topic);

    formData.append("post_image", coverImage);
    //createArticle(formData);
  };

  return (
    <>
      <div className="py-[20px]">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-y-[30px] md:gap-y-[50px]"
        >
          <div>
            <div className="text-base md:text-xl lg:text-[1.563rem] font-semibold leading-[29.83px] mb-[10px]  md:mb-[15px] lg:mb-[20px] xl:mb-[25px] xxl:mb-[30px]">
              Title
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Article title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-full w-full bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <div className="text-base md:text-xl lg:text-[1.563rem] font-semibold leading-[29.83px] mb-[10px]  md:mb-[15px] lg:mb-[20px] xl:mb-[25px] xxl:mb-[30px]">
              Article
            </div>
            <div>
              <input
                type="text"
                placeholder="Article title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-full w-full bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <div className="text-base md:text-xl lg:text-[1.563rem] font-semibold leading-[29.83px] mb-[10px]  md:mb-[15px] lg:mb-[20px] xl:mb-[25px] xxl:mb-[30px]">
              Select Topics
            </div>
            <div className="">
              <select
                className="w-full rounded-lg bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 flex"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              >
                {/* {categoryData
                  ? categoryData.map((tagItem) => (
                      <option value={`${[tagItem.id]}`} key={tagItem.id}>
                        {tagItem.name}
                      </option>
                    ))
                  : null} */}
              </select>
            </div>
          </div>

          <div>
            <div className="text-base md:text-xl lg:text-[1.563rem] font-semibold leading-[29.83px] mb-[10px]  md:mb-[15px] lg:mb-[20px] xl:mb-[25px] xxl:mb-[30px]">
              Document
            </div>

            <label className="bg-[#F5F5F5] py-[87px] flex justify-center items-center w-full rounded-lg cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-y-[10px]">
                <div className="text-xs font-normal text-[#757575] leading-[14.32px]">
                  Add article cover image...
                </div>
                <div className="text-xs font-normal  leading-[14.32px]">
                  <span className="font-semibold">Chosen file:</span>{" "}
                  {coverImage?.name ? coverImage.name : "No Image chosen yet"}
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
            </label>
          </div>

          <div>
            <div className="text-base md:text-xl lg:text-[1.563rem] font-semibold leading-[29.83px] mb-[10px]  md:mb-[15px] lg:mb-[20px] xl:mb-[25px] xxl:mb-[30px]">
              Add Keywords
            </div>
            <div className="">
              <input
                type="text"
                placeholder="eg: corona, healthcare..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="h-full w-full bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 rounded-lg"
                required
                //disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-[22px] md:px-[30px] lg:px-[35px] xl:px-[37px] py-[3px] sm:py-[4px] md:py-[7px] lg:py-[9px] xl:py-[12px]  bg-gradient-to-b from-[#D13F96] to-[#833586]  text-white rounded-[5px] text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-[21.48px]"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
