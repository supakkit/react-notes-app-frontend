import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export function SignUp() {
  return (
        <div className="flex justify-center items-center min-h-screen w-sm">
            <Card className="w-full max-w-sm h-fit">
                <CardHeader className="text-center">
                    <CardTitle className="font-bold text-2xl">Create your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="fullname">Full Name</Label>
                            <Input
                                id="fullname"
                                type="text"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Confirm Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                    <CardDescription>
                        Already have an account? <Link to='/login' className="text-blue-600 cursor-pointer underline-offset-4 hover:underline">Log in</Link>
                    </CardDescription>
                </CardFooter>
            </Card>     
        </div>
        
  )
}
