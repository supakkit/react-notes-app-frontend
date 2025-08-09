import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"


export function NoteCard({ isPublic }) {
  return (
    <Card className="max-w-2xs">
      <CardContent className="grid gap-2">
        {isPublic ? null :
          <p className="font-bold text-sm">📌 Pinned</p>
        }
        <CardTitle className="font-bold text-lg/6">Lorem ipsum dolor, sit amet consectetur</CardTitle>
        <CardDescription className="line-clamp-4 text-pretty">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure tenetur eveniet perspiciatis quaerat. Architecto vel temporibus repudiandae rem ratione molestias, iusto distinctio, aperiam recusandae exercitationem nemo laboriosam commodi tempora adipisci.
        </CardDescription>
        <Badge
            className="bg-blue-200 text-blue-600"
        >#Badge</Badge>
      </CardContent>
      {isPublic ? null :
        <CardFooter>
          <CardDescription className="w-full flex justify-between items-center gap-2 text-xs">
              <p className="mr-2">Created on: 4/28/2025</p>
              <Link  className="block text-blue-500 text-wrap underline-offset-4 hover:underline">View</Link>
              <Link  className="block text-green-500 underline-offset-4 hover:underline">Edit</Link>
              <Link  className="block text-red-500 underline-offset-4 hover:underline">Delete</Link>
              <Link  className="block text-yellow-500 underline-offset-4 hover:underline">Publish</Link>
          </CardDescription>
        </CardFooter>
      }
      
    </Card>
  )
}
