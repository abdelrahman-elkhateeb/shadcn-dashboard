
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

export default function TodoList() {
  return (
    <div className="">
      Calender
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label className="text-sm text-muted" htmlFor="item1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et</label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label className="text-sm text-muted" htmlFor="item1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et</label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label className="text-sm text-muted" htmlFor="item1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et</label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label className="text-sm text-muted" htmlFor="item1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et</label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}
