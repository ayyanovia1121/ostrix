"use client";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { ArrowRight, LinkIcon, Sparkles} from "lucide-react";
import { Badge } from "./ui/badge";
import { suggestions } from "@/constants";

const PromptArea = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <div className="w-full max-w-3xl mx-auto mb-10">
        <div className="relative group gap-y-2">
          <Textarea
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="How can Bolt help you today?"
            className="bg-orange-950/30 border-orange-800/50 min-h-[160px] max-h-[200px] px-8 py-6 text-xl rounded-xl resize-none 
                          text-white placeholder:text-gray-400 focus:ring-orange-500/20 focus:border-orange-700/50
                          backdrop-blur-sm shadow-lg shadow-orange-900/10"
          />
          {userInput && (
            <div className="absolute right-4 top-4 flex items-center gap-1">
              <button className="p-2 bg-orange-900/50 hover:bg-orange-400/50 rounded-md transition-colors cursor-pointer">
                <ArrowRight className="h-5 w-5 text-orange-500" />
              </button>
            </div>
          )}
          <div className="absolute left-4 bottom-4 flex items-center gap-1">
            <button className="p-2 hover:bg-orange-900/50 rounded-md transition-colors">
              <LinkIcon className="h-5 w-5 text-orange-500" />
            </button>
            <button className="p-2 hover:bg-orange-900/50 rounded-md transition-colors">
              <Sparkles className="h-5 w-5 text-orange-500" />
            </button>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl ">
        {suggestions.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-orange-950/20 hover:bg-orange-900/30 border-orange-800/50 px-4 py-2 cursor-pointer backdrop-blur-sm"
          >
            {index === 0 && (
              <span className="text-xs font-normal mr-2 bg-orange-500 text-white px-1.5 py-0.5 rounded-sm">
                NEW
              </span>
            )}
            {item.title}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default PromptArea;
