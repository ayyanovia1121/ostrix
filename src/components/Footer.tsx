import React from 'react'
import { Twitter, Github, Headphones, HelpCircle, Briefcase, FileText, Zap, ShieldCheck, Settings, User, LogOut } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="container mx-auto p-4 flex flex-wrap items-center justify-end gap-4 text-orange-700/80 text-sm">
      <Twitter className="h-4 w-4 hover:text-orange-500" />
      <Github className="h-4 w-4 hover:text-orange-500" />
      <Headphones className="h-4 w-4 hover:text-orange-500" />
      <span>•</span>
      <Link href="#" className="hover:text-orange-500 flex items-center gap-1">
        <HelpCircle className="h-4 w-4" />
        Help Center
      </Link>
      <span>•</span>
      <Link href="#" className="hover:text-orange-500 flex items-center gap-1">
        <Briefcase className="h-4 w-4" />
        Careers
      </Link>
      <span>•</span>
      <Link href="#" className="hover:text-orange-500 flex items-center gap-1">
        <FileText className="h-4 w-4" />
        Terms
      </Link>
      <Link href="#" className="hover:text-orange-500">
        Privacy
      </Link>
      <span>•</span>
      <Link href="#" className="hover:text-orange-500 flex items-center gap-1">
        <Zap className="h-4 w-4" />
        StackBlitz
      </Link>
    </footer>
  );
}

export default Footer