"use client"

import React, { useState } from 'react';

const EmojiPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emojis = ['😀', '😂', '😊', '😍', '🥳', '🎉', '👍', '👋', '❤️', '🌟'];

  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  const handleEmojiClick = (emoji) => {
    // onSelect(emoji);
    setIsOpen(false); // Close the picker after selecting an emoji
  };

  return (
    <div className="relative">
      <button
        onClick={togglePicker}
        className="p-2 bg-gray-200 rounded-full shadow-md focus:outline-none"
      >
        😊 {/* Default emoji icon, you can use any */}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 right-0 w-48 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-wrap p-2">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                className="p-2 hover:bg-gray-100 focus:outline-none"
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
