import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <form className="grid w-full items-center gap-2">
        <Input 
            type="search" 
            placeholder="Search notes by title, content, or tags"
            className="bg-white"
        />
        <Button 
            type="submit" 
            variant="outline"
            className="w-fit"
        >Search</Button>
    </form>
  )
}
