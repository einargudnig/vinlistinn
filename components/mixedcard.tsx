import { BellRing, Wine } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

type CardProps = React.ComponentProps<typeof Card>

export function MixedCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Blandaði pakkinn</CardTitle>
        <CardDescription>Eitthvað fyrir alla</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
            <div
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  5 flöskur
                </p>
                <p className="text-sm text-muted-foreground">
                  Þessi er fullkominn ef þú villt drekka meira en rauðvín
                </p>
              </div>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Wine className="mr-2 h-4 w-4" /> 18.990kr
        </Button>
      </CardFooter>
    </Card>
  )
}
