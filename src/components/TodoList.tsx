"use client"
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Calender */}
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={date => {
              setDate(date)
              setOpen(false)
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
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
