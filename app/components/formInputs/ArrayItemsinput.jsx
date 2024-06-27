"use client";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

export default function ArrayItemsInput({ setItems, items = [], itemTitle }) {
  const [item, setItem] = useState("");
  const [showTagForm, setShowTagForm] = useState(false);
  function addItem() {
    if (!item) return;
    setItems([...items, item]);
    setItem("");
  }
  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  // items END
  return (
    <div className="sm:col-span-2">
      {showTagForm ? (
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="voice-search"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-gray-300 block w-full ps-1 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#666666] "
              placeholder={`Create a ${itemTitle}`}
            />
          </div>
          <button
            onClick={addItem}
            type="button"
            className="ml-3 shrink-0 w-8 h-8 bg-green-500  flex items-center justify-center"
          >
            <Plus className="w-4 h-4 " />
          </button>
          <button
            type="button"
            onClick={() => setShowTagForm(false)}
            className="ml-3 shrink-0 w-8 h-8 bg-red-500  flex items-center justify-center"
          >
            <X className="w-4 h-4 " />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowTagForm(true)}
          type="button"
          className="flex items-center space-x-2 text-slate-800 dark:text-slate-300 py-2 px-4 "
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap gap-4 mt-4">
        {items.map((item, i) => {
          return (
            <div
              onClick={() => removeItem(i)}
              key={i}
              className="bg-slate-200 flex space-x-2 items-center dark:bg-slate-600 px-4 py-2 rounded-lg cursor-pointer dark:text-slate-300 text-slate-800"
            >
              <p>{item}</p>
              <X className="w-4 h-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
