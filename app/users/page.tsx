import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Users() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can manage your users. Add a table or list of users here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

