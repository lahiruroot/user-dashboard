import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Projects() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can view and manage your projects. Add a list or grid of projects here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

