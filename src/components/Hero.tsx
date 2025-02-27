import React from 'react'
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Sparkles } from 'lucide-react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
      {/* Feature Badge */}
      <div className="mb-16">
        <Badge
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 border-orange-800/50 bg-orange-900/20 text-orange-100"
        >
          <Sparkles className="h-4 w-4 text-orange-400" />
          <span>Introducing the Visual Inspector!</span>
        </Badge>
      </div>
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center space-y-6 mb-8">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          What do you want to build?
        </h1>
        <p className="text-xl text-gray-400">
          Prompt, run, edit, and deploy full-stack{" "}
          <span className="text-orange-400">web</span> and{" "}
          <span className="text-orange-400">mobile</span> apps.
        </p>
      </div>
    </>
  );
}

export default Hero