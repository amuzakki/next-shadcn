import { DollarSign, TrendingDown, TrendingUp, UserPlus, Users, Waves } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MetricCards() {
  return (
    <div className="grid grid-cols-2 gap-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs xl:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <DollarSign className="size-4" />
            </div>
            <CardDescription>Total Revenues</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-2xl tabular-nums leading-none tracking-tight">$1,250.00</div>
            <Badge>
              <TrendingUp className="size-3" />
              +12.5%
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">Visitors for the last 6 months</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <UserPlus className="size-4" />
            </div>
            <CardDescription>New Customers</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-2xl tabular-nums leading-none tracking-tight">1,234</div>
            <Badge variant="destructive">
              <TrendingDown className="size-3" />
              -20%
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">Acquisition needs attention</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <Users className="size-4" />
            </div>
            <CardDescription>Active Accounts</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-2xl tabular-nums leading-none tracking-tight">45,678</div>
            <Badge>
              <TrendingUp className="size-3" />
              +12.5%
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">Engagement exceeds targets</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <Waves className="size-4" />
            </div>
            <CardDescription>Growth Rate</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-2xl tabular-nums leading-none tracking-tight">4.5%</div>
            <Badge>
              <TrendingUp className="size-3" />
              +4.5%
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">Meets growth projections</p>
        </CardContent>
      </Card>
    </div>
  );
}
