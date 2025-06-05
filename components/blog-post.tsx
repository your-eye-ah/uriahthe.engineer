import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"

interface BlogPostProps {
  title: string
  date: string
  excerpt: string
  tags: string[]
  imageUrl: string
}

export default function BlogPost({ title, date, excerpt, tags, imageUrl }: BlogPostProps) {
  return (
    <Card className="overflow-hidden border-0 bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative h-48 md:h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10" />
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>

        <div className="md:col-span-2 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>

          <p className="text-gray-300 mb-4">{excerpt}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
