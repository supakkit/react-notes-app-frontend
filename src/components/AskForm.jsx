import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@radix-ui/react-label";

export function AskForm() {
    return (
        <Card>
            <form>
                <CardContent className="grid gap-3">
                    <Label className="font-bold">Ask a Question About Notes</Label>
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
                </CardContent>
            </form>    
        </Card>
    );
}