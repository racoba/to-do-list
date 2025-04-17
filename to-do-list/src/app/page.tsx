"use client"
import { CheckList, SearchInput } from "@/components";
import { useState } from "react";

export default function Home() {
  const [searchInputValue, setSearchInputValue] = useState<string>("")
  const [options, setOptions] = useState<string[]>([])

  const onSubmitForm = () => {
    setOptions([...options, searchInputValue])
  }

  const onRemoveItem = (indexToRemove: number) => {
    setOptions(options.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 mx-auto items-center">
        <h1 className="text-6xl uppercase ">To Do List</h1>
        <SearchInput
          value={searchInputValue}
          setValue={setSearchInputValue}
          onSubmit={onSubmitForm}
        />
      </div>
      <div className="flex flex-col gap-[32px] row-start-2 px-6 sm:items-start w-full md:w-[60%] mx-auto">
        <CheckList options={options} onRemoveItem={onRemoveItem}/>
      </div>
    </div>
  );
}
