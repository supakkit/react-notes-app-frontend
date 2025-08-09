import { Button } from '../components/ui/button'
import { Badge } from "@/components/ui/badge"

export function Notes() {
    return (
        <div>
            <div className="p-8 grid gap-2">
                <h2
                    className='font-bold text-2xl'
                >Algorithm: Insert Sort</h2>
                <p
                    className='text-sm'
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto exercitationem aspernatur aliquid cupiditate. Accusantium deleniti amet, non culpa veritatis praesentium id, corporis nostrum vel ea itaque tempora voluptas nobis.</p>
                <Badge
                    className="bg-blue-200 text-blue-600"
                >#Badge</Badge>
                <div className='grid gap-3 mt-4'>
                    <p className="font-bold text-sm">📌 Pinned</p>
                    <Button className="w-fit">Edit Note</Button>
                </div>
                
            </div>
            
        </div>
    );
}